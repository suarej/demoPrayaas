import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import tw from "twin.macro";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faMapMarked, faMapMarkedAlt, faMapMarker, faMapMarkerAlt, faMapPin } from "@fortawesome/free-solid-svg-icons";

const MapContainer = styled.div`
  ${tw`
        w-full
        md:h-full
        h-96
        p-2
        border
        
    `};
`;

const Heading = styled.h1`
  ${tw`
        items-center
        justify-center
        text-center
        text-black
        text-xl
        font-medium
    `};
`;

const StepIcon = styled.span`
  ${tw`
        text-red-500
        text-3xl
    `};
`;

const StepContainer = styled.div`
  ${tw`
        flex
        transition-colors
        hover:text-red-500
    `};
`;

const AnyReactComponent = (props: any) => {
  const { text } = props;

  return (
    <StepContainer>
      <StepIcon>
        <FontAwesomeIcon icon={faMapPin} />
      </StepIcon>
      <Heading>{text}</Heading>
    </StepContainer>
  );
};

export function GoogleMaps() {
  const defaultProps = {
    center: {
      lat: 18.416,
      lng: 73.545 ,
    },
    zoom: 14,
    restriction: {
      latLngBounds: {
        north: -10,
        south: -40,
        east: 160,
        west: 100,
      },
    },
  };

  const API_KEY = "AIzaSyDKMLOk_UGhynQ_kimRX3gTmal2jgf9ylc";

  return (
    <MapContainer> 
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={18.5115626} lng={73.8448766} text="Prayaas" />
      </GoogleMapReact>
      </MapContainer>
  );
}
