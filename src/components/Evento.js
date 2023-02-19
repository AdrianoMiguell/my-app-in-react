import Button  from "./evento/Button";

function Evento() {

    function meuEvento(){
        console.log("Ativando primeiro evento!")
    }
    function meuSegEvento(){
        console.log("Ativando segundo evento!")
    }

    return(
        <div>
            <p> Clique no botão para disparar o evento </p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={meuSegEvento} text="Segundo Evento"/>
        </div>
    )
} 

export default Evento;