import "./modal.css";

function Modal(props) {
  let {
    showModal,
    closeModal,
    edit,
    setTitle,
    setNote,
    addNote,
    editNoteData,
    editedNote,
  } = props;

  const ModalBtn = () => {
    if (!edit) {
      return (
        <button className="modal__block-form-btn add" onClick={addNote}>
          Add
        </button>
      );
    } else {
      return (
        <button
          onClick={() => editNoteData(editedNote)}
          className="modal__block-form-btn add"
        >
          Edit
        </button>
      );
    }
  };

  if (showModal)
    return (
      <>
        <div
          className={showModal ? "modal active" : "modal"}
          onClick={() => {
            closeModal(false);
            setTitle("");
            setNote("");
          }}
        >
          <div className="modal__block" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal__block-title">
              {edit ? "Edit Note" : "Add Note"}
            </h3>
            <form action="#" className="modal__block-form">
              <label className="modal__block-form-input">
                <span>Title</span>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label className="modal__block-form-input">
                <span>Content</span>
                <input
                  type="text"
                  placeholder="Content"
                  onChange={(e) => setNote(e.target.value)}
                />
              </label>

              <div className="modal__block-form-btns">
                <button
                  className="modal__block-form-btn cancel"
                  onClick={() => closeModal(false)}
                >
                  Cancel
                </button>
                <ModalBtn />
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

export default Modal;
