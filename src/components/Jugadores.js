import React from 'react';
import {connect} from 'react-redux'

const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => {
    return ( 
        <section>
            <h2>Jugadores</h2>
            <div className="contenedor-jugadores">
                {
                    jugadores.map(j => (
                        <article className="jugador" key={j.id}>
                            <img src={j.foto } alt={j.name}/>
                            <h3>{j.name}</h3>
                            <div>
                                <button onClick={ () => agregarTitular(j)}>Titular</button>
                                <button onClick={() => agregarSuplente(j)}>Suplente</button>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
     );
}

/* const mapStateToProps = state => ({
    
    jugadores: state.jugadores
    
}) */  

// Lo mismo pero mas resumido

const mapStateToProps = state => {
    
    return({    
    jugadores: state.jugadores    
})}


const mapDispatchToProps = dispatch => {
    
    return({

    agregarTitular(jugador){
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },

    agregarSuplente(jugador){
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador
        })
    }
})}
 
export default connect(mapStateToProps, mapDispatchToProps) (Jugadores);