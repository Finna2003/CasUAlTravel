import {Image, Pressable, View, Text} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import {INITIAL_REGION, MAP_STYLE} from "../../constants/map";
import ProjectLoadingScreen from "../../components/common/ProjectLoadingScreen";
import PlaceDetails from "../../components/map/PlaceDetails";
import {useState} from "react";
import {placeIconDetails} from "../../contexts/places/usePlacesIconDetails";
import {COLORS} from "../../constants/theme";
import {usePlaces} from "../../contexts/places/PlacesProvider";

export default function Map(){

    const [selectedPlace, setSelectedPlace] = useState<placeIconDetails | null>(null)
    const {useIconDetails} = usePlaces();
    const {placesIconDetails} = useIconDetails();

    if (!placesIconDetails){
        return <ProjectLoadingScreen/>
    }


    return (
        <View>
            <MapView
                style={{width: '100%', height: '100%'}}
                provider={PROVIDER_GOOGLE}
                customMapStyle={MAP_STYLE}
                initialRegion={INITIAL_REGION}
                onPress={() => setSelectedPlace(null)}
            >
                {placesIconDetails.map(e => (
                    <Marker
                        key={e.id}
                        coordinate={e.coords}
                        style={{width: 42, height: 42, pointerEvents: "auto"}}
                        onPress={(event) => {
                            console.log(e.iconUrl);
                            setSelectedPlace(e);
                            event.stopPropagation();
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: e.iconUrl === "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet.png" ? "#B96464" : e.iconBackgroundColor,
                                borderRadius: 100,
                                height: selectedPlace?.id === e.id ? "100%" : "80%",
                                width: selectedPlace?.id === e.id ? "100%" : "80%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                source={e.iconUrl === "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet.png" ? require('../../assets/images/map-default-icon.png') : {uri: e.iconUrl}}
                                style={{height: "60%", width: "60%"}}
                            />
                        </View>
                    </Marker>
                ))}
            </MapView>

            {selectedPlace && (
                <View style={{
                    position: "absolute",
                    width: "100%",
                    height: 100,
                    bottom: 0,
                    backgroundColor: COLORS.light_grey,
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25,
                }}>
                    <PlaceDetails/>
                </View>
            )}
        </View>
    )
}
