
import React /*, { useEffect, useMemo, useRef, useState } */ from 'react'
import { MapPage } from './pages/MapPage'
import { SocketProvider } from './context/SocketContext'
//import mapboxgl from 'mapbox-gl';
//import { getUserLocation } from './helpers/getUserLocation';

// mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN || ''

// if ( !navigator.geolocation ) {
//   alert( 'Tu navegador no tiene opción de Geolocation' );
//   throw new Error('Tu navegador no tiene opción de Geolocation');
// }


const MapasApp = () => {

  // const [userLocation, setuserLocation] = useState(null)
  // const initialPoint = useMemo(() => {
  //   return {
  //     lng: -122.4725,
  //     lat: 37.8010,
  //     zoom: 13.5
  //   }
  // }, [])

  
  // const mapDiv = useRef();

  // Mapa y coords
  // const mapa = useRef();
  // const [ coords, setCoords ] = useState( initialPoint );


  // useEffect(() => {
  //   getUserLocation().then((data) => {
  //     setCoords({
  //       lng: data[0].toFixed(4),
  //       lat: data[1].toFixed(4),
  //       zoom: zoom.toFixed(2)
  //   })
  //     console.log({userLocation})
  //     setuserLocation(data)
  //   })  
  // }, [])

  // useEffect(() => {
  //       const map = new mapboxgl.Map({
  //         container: mapDiv.current,
  //         style: 'mapbox://styles/mapbox/light-v10', // style URL
  //         center: [initialPoint.lng, initialPoint.lat] ,// userLocation, // starting position [lng, lat]
  //         zoom: initialPoint.zoom // starting zoom
  //       })
  //       mapa.current = map;

  // }, [])
  

  // coords cuando se mueve el mapa
  // useEffect(() => {
  //       mapa?.current?.on('move', () => {
  //           const { lng, lat } = mapa.current.getCenter();
  //           setCoords({
  //               lng: lng.toFixed(4),
  //               lat: lat.toFixed(4),
  //               zoom: mapa.current.getZoom().toFixed(2)
  //           })
  //       });

       
  // }, [mapa])
  
  

  
  return (
    <>
        {/* { !!coords && (
          <>
            <div className="info">
            Lng: { coords.lng } | lat: { coords.lat } | zoom: { coords.zoom }
            </div>
            
            <div 
                ref={ mapDiv }
                className="mapContainer"
            />
          </>
        )} */}
         <SocketProvider>
          <MapPage  />
         </SocketProvider>
    </> 
  )
}

export default MapasApp

