import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuario com nome ${name} foi cadastrado com sucesso! Sua senha é ${password}`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="m-5">
      <h4>Meu cadastro</h4>
      <form onSubmit={cadastrarUsuario} className="d-grid gap-2">
        <div>
          <label htmlFor="name"> Nome </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"> Senha </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
