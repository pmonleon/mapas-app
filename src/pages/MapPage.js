import React, { useContext, useEffect } from 'react';
import { useMapbox } from '../hooks/useMapBox';
import { SocketContext } from '../context/SocketContext';

const puntoInicial = {
    lng: -122.4725,
    lat: 37.8010,
    zoom: 13.5
}


export const MapPage = () => {

const { setRef, coords, nuevoMarcador$, movimientoMarcador$, agregarMarcador, actualizarPosicion  } = useMapbox( puntoInicial );
const { socket } = useContext( SocketContext );

    // Escuchar los marcadores existentes
    useEffect(() => {
        socket.on( 'marcadores-activos', (marcadores) => {
            for( const key of Object.keys( marcadores ) ) {
                console.log({marcadores})
                agregarMarcador( marcadores[key], key );
            }
        });
    }, [ socket, agregarMarcador ])

    // Nuevo marcador
    useEffect(() => {
        nuevoMarcador$.subscribe( marcador => {
            // TODO: nuevo marcador emitir
            console.log({marcador})
            socket.emit( 'marcador-nuevo', marcador );
        });
    }, [nuevoMarcador$, socket]);

    // Movimiento de Marcador
    useEffect(() => {
        movimientoMarcador$.subscribe( marcador => {
            socket.emit( 'marcador-actualizado', marcador );
        });
    }, [socket, movimientoMarcador$]);

    // Mover marcador mediante sockets
    useEffect( () => {
        socket.on( 'marcador-actualizado', ( marcador) => {
            actualizarPosicion( marcador );
        })
    },[ socket, actualizarPosicion ])
    
    // Escuchar nuevos marcadores
    useEffect(() => {
        
        socket.on('marcador-nuevo', ( marcador ) => {
            console.log({marcador})
            agregarMarcador( marcador, marcador.id );
        });

    }, [socket, agregarMarcador])
    



    return (
        <>

            <div className="info">
                Lng: { coords.lng } | lat: { coords.lat } | zoom: { coords.zoom }
            </div>
            
            <div 
                ref={ setRef }
                className="mapContainer"
            />

            

        </>
    )
}