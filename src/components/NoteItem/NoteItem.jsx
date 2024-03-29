import del from "../../assets/images/del.svg";
import edit from "../../assets/images/edit.svg";

const NoteItem = (props) => {
  const { note, gridShow, editNote, deleteNote, changeNoteData } = props;

  return (
    <>
      <div className="note__item">
        <div className={gridShow ? "note__item-top" : "note__item-top column"}>
          <h3 className="note__item-title">{note.title}</h3>
          <p className="note__item-date">{note.date}</p>
        </div>
        <p className="note__item-descr">{note.note}</p>
        <div className="note__item-btnGroups">
          <button className="note__item-btn edit">
            <img src={edit} alt="edit" />
            <span
              onClick={() => {
                editNote();
                changeNoteData(note.id);
              }}
            >
              EDIT
            </span>
          </button>
          <button
            onClick={() => deleteNote(note.id)}
            className="note__item-btn del"
          >
            <img src={del} alt="del" />
            <span>DELETE</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
