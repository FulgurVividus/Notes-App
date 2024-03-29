import addNote from "../assets/images/edit.svg";

const AddNoteBtn = (props) => {
  if (!props.showBtn)
    return (
      <button className="add__note-btn" onClick={() => props.openModal(true)}>
        <img src={addNote} alt="addNote" />
      </button>
    );
};

export default AddNoteBtn;
