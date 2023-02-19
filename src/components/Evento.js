function Evento() {

    function meuEvento(){
        console.log("Botão clicado!")
    }

    return(
        <div>
            <p> Clique no botão para disparar o evento </p>
            <button onClick={meuEvento}> Clique aqui! </button>
        </div>
    )
} 

export default Evento;