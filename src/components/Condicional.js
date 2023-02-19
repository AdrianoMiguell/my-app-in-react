import {useState} from 'react'

function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log("Email enviado: "+userEmail)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div className='mx-5 m-2'>
            <h2>Cadastre o seu email</h2>
            <form> 
                <input type="email" className='m-2 form-control' placeholder="Digite o seu email..." onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail} type="submit"> Enviar email</button>
            </form>
            {userEmail && (
                <div>
                    <span className="alert alert-primary p-0"> O email foi cadastrado: {userEmail} </span>
                    <button onClick={limparEmail}> Limpar email </button>
                </div>
            )}
        </div>
    )
}

export default Condicional