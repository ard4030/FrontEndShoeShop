// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const center = {
//   lat: 29.584369,
//   lng: 52.576443
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyA0a76fFw8IOEgKGmNUdUGzux7UNz1Uwjo"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={5}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MyComponent)