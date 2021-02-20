import React from "react";
import { connect } from "react-redux";

const Suplentes = ({suplentes, eliminarSuplente}) => {
  return (
    <section>
      <h2>Suplentes</h2>
      <div className="contenedor-Supletes">
        {suplentes.map((j) => (
          <article className="suplentes" key={j.id}>
            <div>
              <img src={j.foto} alt={j.nombre} />
              <button className="btn-rm" onClick={() => eliminarSuplente(j)}>X</button>
            </div>
            <p>{j.nombre}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
    suplentes: state.suplentes,
});

const mapDispatchToProps = payload => ({

   
    eliminarSuplente(jugador){
        payload({
            type:"ELIMINAR_SUPLENTE",
            jugador
        })        
    }    
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);