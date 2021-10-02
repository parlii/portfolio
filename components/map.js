import React from "react";
import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";
import { OverlayView } from "@react-google-maps/api";
import getConfig from "next/config";
// https://react-google-maps-api-docs.netlify.app/

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const containerStyle = {
  width: "1000px",
  height: "800px",
};

const center = {
  lat: 27.7,
  lng: 85.3,
};
const position = {
  lat: 29.55,
  lng: 80.41,
};
const onLoad = (marker) => {
  console.log("marker: ", marker);
};
const onClick = () => {
  console.info("I have been clicked!");
};
const divStyle = {
  background: `white`,
  border: `0.5px solid #ccc`,
  padding: 10,
};

function GMap() {
  return (
    <LoadScriptNext googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
        {/* Child components, such as markers, info windows, etc. */}
        <OverlayView
          position={center}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div style={divStyle}>
            <h4>OverlayView</h4>

            <button onClick={onClick} type="button">
              Click me
            </button>
          </div>
        </OverlayView>
        <></>
      </GoogleMap>
    </LoadScriptNext>
  );
}

export default React.memo(GMap);
