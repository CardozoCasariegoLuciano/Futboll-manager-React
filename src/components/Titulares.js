import React from "react";
import { connect } from "react-redux";

const Titulares = ({titulares, eliminarTitular}) => {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="contenedor-Titulares">
        {titulares.map((j) => (
          <article className="titular" key={j.id}>
            <div>
              <img src={j.foto} alt={j.nombre} />
              <button className="btn-rm" onClick={ () => eliminarTitular(j)}>X</button>
            </div>
            <p>{j.nombre}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = payload => ({

   
    eliminarTitular(jugador){
        payload({
            type:"ELIMINAR_TITULAR",
            jugador
        })        
    }    
})
export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
