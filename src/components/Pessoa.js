import styles from "./css/Style.module.css";

function Pessoa({ nome, idade, profissao, foto }) {
    return (
      <div>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>        
        <img src={foto} alt={"foto de "+ nome} className={styles.image}/>
      </div>
    );
  }
  
  export default Pessoa;