function Form(){

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log("Cadastrado!")
    }

    return(
        <div className="m-5">
            <h4>Meu cadastro</h4>
            <form onSubmit={cadastrarUsuario} className="d-grid gap-2">
                <div>
                    <input type="text" className="form-control" placeholder="Digite o seu nome"/></div>
                <div> 
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;