import {usePlacesDbDetails} from "./usePlacesDbDetails";
import {useEffect, useState} from "react";
import {LatLng} from "react-native-maps";
import axios from "axios";
import {API_KEY} from "../../constants/map";

export type placeIconDetails = {
    id: number,
    mapApiId: string,
    coords: LatLng,
    iconUrl: string
    iconBackgroundColor: string
}

export function usePlacesIconDetails(): {
    placesIconDetails: placeIconDetails[] | null,
}{
    const {placesDbDetails} = usePlacesDbDetails();
    const [places, setPlaces] = useState<placeIconDetails[] | null>(null);
    useEffect(() => {
        if (placesDbDetails){
            Promise.all(placesDbDetails.map(e => {
                return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${e.coords.latitude},${e.coords.longitude}&key=${API_KEY}`)
                    .then(response => {
                        return {
                            ...e,
                            mapApiId: response.data.results[0].place_id
                        }
                    });
            }))
                .then(e => Promise.all<placeIconDetails>(e.map(e2 => {
                    return axios.get(`https://places.googleapis.com/v1/places/${e2.mapApiId}?fields=iconMaskBaseUri,iconBackgroundColor&key=${API_KEY}&languageCode=uk`)
                        .then(response => {
                            const res = response.data;
                            return {
                                ...e2,
                                iconUrl: `${res.iconMaskBaseUri}.png`,
                                iconBackgroundColor: res.iconBackgroundColor,

                            }
                        })
                })))
                .then(e => setPlaces(e))
                .catch(err => alert(err))
        }
    }, [placesDbDetails])

    return {placesIconDetails: places};
}
