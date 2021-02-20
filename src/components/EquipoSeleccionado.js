import React from "react";
import Suplentes from "./Suplentes";
import Titulares from "./Titulares";

const EquipoSeleccionado = () => {
    return (  
        <section className="">
            <Titulares/>
            <Suplentes/>
        </section>
    );
}
 
export default EquipoSeleccionado;