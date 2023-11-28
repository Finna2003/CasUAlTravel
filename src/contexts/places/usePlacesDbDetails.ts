import {useEffect, useState} from "react";
import {LatLng} from "react-native-maps";
import {axiosBase} from "../../utility/axiosBase";

export type placeDbDetails = {
    id: number,
    coords: LatLng,
}

export function usePlacesDbDetails(): {
    placesDbDetails: placeDbDetails[] | null
}{
    const [places, setPlaces] = useState<placeDbDetails[] | null>(null);
    const loadFromServer = () => {
        /*axiosBase.get("/places")
            .then(response => {
                if (response.status === 200){
                    // @ts-ignore
                    setPlaces(response.data.map(e => ({
                        id: e.placeId,
                        coords: {
                            latitude: parseFloat(e.location.latitude),
                            longitude: parseFloat(e.location.longitude)
                        }
                    })));
                }
                else throw new Error();
            })
            .catch(err => {
                alert(err)
            });*/

        new Promise<placeDbDetails[]>((resolve, reject) => {
            setTimeout(() => {
                resolve( [
                    {
                        id: 1,
                        coords: {
                            latitude: 50.42652831373371,
                            longitude: 30.56305017477877
                        }
                    },
                    {
                        id: 2,
                        coords: {
                            latitude: 50.4106665963391,
                            longitude: 30.438216318517146
                        }
                    },
                    {
                        id: 3,
                        coords: {
                            latitude: 50.36663150740578,
                            longitude: 30.49764481957499
                        }
                    },
                    {
                        id: 4,
                        coords: {
                            latitude: 50.36663150740578,
                            longitude: 30.49764481957499
                        }
                    },
                    {
                        id: 5,
                        coords: {
                            latitude: 50.43464324796345,
                            longitude: 30.557270970833883
                        }
                    },
                    {
                        id: 6,
                        coords: {
                            latitude: 50.438235377125174,
                            longitude: 30.553996846321105
                        }
                    },
                    {
                        id: 7,
                        coords: {
                            latitude: 50.45150269043815,
                            longitude: 30.494900962550712
                        }
                    },
                    {
                        id: 8,
                        coords: {
                            latitude: 50.45289567147714,
                            longitude: 30.514289421697338
                        }
                    },
                    {
                        id: 9,
                        coords: {
                            latitude: 50.454909194697514,
                            longitude: 30.46517818726079
                        }
                    },
                    {
                        id: 10,
                        coords: {
                            latitude: 50.44173057838623,
                            longitude: 30.512967561014715
                        }
                    }
                ],)
            }, 0)
        }).then(response => {
            setPlaces(response as placeDbDetails[]);
        })
            .catch(err => alert(err))
    }

    useEffect(() => {
        loadFromServer();
    }, [])

    return {placesDbDetails: places}
}
