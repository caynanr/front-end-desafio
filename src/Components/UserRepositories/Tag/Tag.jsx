import React from "react";
import styles from "./Tag.module.css";
import TagModal from "./TagModal";

const Tag = ({ tags, addTag, deleteTag, index, id }) => {
  const [tagList, setTagList] = React.useState([]);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    setTagList([...tags]);
  }, [tags]);

  function toogleModal() {
    setModal(!modal);
  }

  return (
    <>
      {tagList.map((t, i) => (
        <li className={styles.tag} key={i}>{`#${t}`}</li>
      ))}

      {tagList.length >= 1 ? (
        <button onClick={toogleModal} className={styles.btnTag}>
          Editar tags <span className={styles.btnEdit}></span>
        </button>
      ) : (
        <button onClick={toogleModal} className={styles.btnTag}>
          Adicionar tags <span className={styles.btnAdd}></span>
        </button>
      )}

      {modal && (
        <TagModal
          tags={tagList}
          toogleModal={toogleModal}
          modal={modal}
          setTagList={setTagList}
          deleteTag={deleteTag}
          addTag={addTag}
          index={index}
          id={id}
        />
      )}
    </>
  );
};

export default Tag;
