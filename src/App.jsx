import Modal from "./components/Modal/Modal";
import NavBar from "./components/NavBar/NavBar";
import NoteList from "./components/NoteList/NoteList";
import AddNoteBtn from "./UI/AddNoteBtn";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotesState] = useState(() => {
    const saveNotes = localStorage.getItem("notes");
    return saveNotes ? JSON.parse(saveNotes) : [];
  });

  let [showModal, setShowModal] = useState(false);
  let [edit, setEdit] = useState(false);
  const [titleController, setTitle] = useState("");
  const [noteController, setNote] = useState("");
  let [search, setSearch] = useState("");
  let [editedNote, setEditNote] = useState({});

  let changeNoteData = (id) => {
    // edit note
    const editedNote = notes.find((note) => note.id === id);
    setEdit(true);
    setEditNote(editedNote);
  };

  const editNoteData = (newNote) => {
    if (titleController != "" && noteController != "") {
      const arr = [...notes];
      arr.forEach((note) => {
        if (note.id === newNote.id) {
          note.title = titleController;
          note.note = noteController;
          note.date = new Date().toLocaleDateString();
        }
      });
      openModal(false);
      setNotesState(arr);
    }
  };

  const editNote = () => {
    openModal(true);
    setEdit(true);
  };

  const closeModal = (status) => {
    setShowModal(status);
  };

  const openModal = (status) => {
    setShowModal(status);
    setEdit(false);
  };

  const addNote = () => {
    if (titleController !== "" && noteController !== "") {
      const noteItem = {
        id: uuidv4(),
        title: titleController,
        note: noteController,
        date: new Date().toLocaleDateString(),
      };
      const arr = [...notes];
      arr.push(noteItem);
      setNotesState(arr);
      closeModal(false);
    }
  };

  const deleteNote = (id) => {
    let index = notes.findIndex((item) => item.id === id);
    let arr = [...notes];
    arr.splice(index, 1);
    setNotesState(arr);
  };

  useEffect(() => {
    localStorage.notes = JSON.stringify(notes);
  }, [notes]);

  const filteredNotes = () => {
    return search
      ? notes.filter((note) =>
          note.title.toLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes;
  };

  return (
    <>
      <NavBar setSearch={setSearch} />
      <main className="main">
        <NoteList
          allNotes={filteredNotes()}
          editNote={editNote}
          deleteNote={deleteNote}
          changeNoteData={changeNoteData}
        />
        <Modal
          showModal={showModal}
          closeModal={closeModal}
          edit={edit}
          setTitle={setTitle}
          setNote={setNote}
          addNote={addNote}
          editNoteData={editNoteData}
          editedNote={editedNote}
        />
      </main>
      <AddNoteBtn showBtn={showModal} openModal={openModal} />
    </>
  );
}

export default App;
