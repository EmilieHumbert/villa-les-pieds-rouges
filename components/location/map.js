import { icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const marker = icon({
  iconUrl: "images/leaflet/marker-icon.png",
  iconSize: [25, 41],
});

const Map = () => {
  return (
    <div className="mb-8">
      <MapContainer
        center={[43.66235, -1.4436462]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: 400, width: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
          tileSize={512}
          zoomOffset={-1}
        />
        <Marker position={[43.66235, -1.4436462]} icon={marker}>
          <Popup>VILLA LES PIEDS ROUGES</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
