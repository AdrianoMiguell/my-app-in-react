import styles from "./css/Style.module.css";

function OutraLista({ item }) {
  return (
    <>
      <h3> Lista de coisas boas</h3>
      {item.length > 0 ? (
        item.map((item, index) => (
          <p key={index} className={styles.textDecoration}>
            {item}
          </p>
        ))
      ) : (
        <p>Não há items na lista!</p>
      )}
    </>
  );
}

export default OutraLista;
