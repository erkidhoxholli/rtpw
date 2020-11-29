// @ts-ignore
import React from 'react';
import {styled} from '@rtpw/design-system/constants/theme';
import Dimensions from '@rtpw/design-system/constants/dimensions';
import Colors from '@rtpw/design-system/constants/colors';
// @ts-ignore
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";

const Wrapper = styled.div`
  height: 80vh; 
  width: 100%
`

type Markers = {
    lat: number,
    lng: number,
    text: string
}
type GoogleMapProps = {
    center: {
        lat: number,
        lng: number
    }
    apiKey?: string;
    markers?: Markers[];
};


const GoogleMap = ({center, markers, apiKey}: GoogleMapProps) => {
    return (
        <Wrapper>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || apiKey}}
                defaultCenter={center}
                defaultZoom={11}
            >
                {
                    markers?.map(marker => (
                        <Marker
                            key={`${marker.lat}-${marker.lng}`}
                            lat={marker.lat}
                            lng={marker.lat}
                            text={marker.text}
                        />
                    ))
                }

            </GoogleMapReact>
        </Wrapper>
    );
}

export default GoogleMap;
