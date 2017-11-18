import React from 'react';

export const CreateBusStopMessage = props => (
    <div>
        <p>Presiona en cualquier parte del mapa para crear una para de camión.</p>
    </div>
);

export default ({createBusStop, cancelCreateBusStop}) => (
    <div>
        <p>¿Deseas crear la parada de camión?</p>
        <button className="button" onClick={createBusStop}>Crear</button>
        <button className="button" onClick={cancelCreateBusStop}>Cancelar</button>
    </div>
)