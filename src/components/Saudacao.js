function Saudacao({ nome }) {
  function gerarSaudacao(alguem) {
    return `Olá, ${alguem}, tudo bem?!?`;
  }

  return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>;
}

export default Saudacao;
