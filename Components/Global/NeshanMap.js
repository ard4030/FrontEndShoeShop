// "use client"
// import axios from 'axios';
// import dynamic from 'next/dynamic';
// import React from 'react'

// const NeshanMap = dynamic(() => import("react-neshan-map-leaflet/dist/NeshanMap"), {
//     ssr: false
//     });



// function SimpleMap() {

//     const getAddress = async (lat,lang) => {
//         await axios.get(`https://api.neshan.org/v5/reverse?lat=${lat}&lng=${lang}`,{
//             headers:{
//                 "Api-Key": "service.f3ef56b402fc4787bc18165e0ec42d0e"
//             }
//         }).then(response => {
//             console.log(response.data)
//             alert(JSON.stringify(response.data))
//         })
//     }

//   return (
//     <NeshanMap
//     options={{
//     key: 'web.b6ee3d92aa8c44dbb7736402781582da',
//     maptype: 'dreamy',
//     poi: true,
//     traffic: false,
//     center: [35.699739, 51.338097],
//     zoom: 13
//     }}

//     onInit={(L, myMap) => {
//     let marker = L.marker([35.699739, 51.338097])
//       .addTo(myMap)
//       .bindPopup('I am a popup.');

//     myMap.on('click', function (e) {
//       marker.setLatLng(e.latlng)
//       getAddress(e.latlng.lat,e.latlng.lng)
//     });

//     L.circle([35.699739, 51.348097], {
//       color: 'red',
//       fillColor: '#f03',
//       fillOpacity: 0.5,
//       radius: 500
//     }).addTo(myMap);
//   }}
// />
//   );
// }

// export default SimpleMap;