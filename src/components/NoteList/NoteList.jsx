import NoteListBtn from "../../UI/NoteListBtn";
import NoteItem from "../NoteItem/NoteItem";
import "./notelist.css";
import { useState } from "react";

const NoteList = (props) => {
  const { allNotes, editNote, deleteNote, changeNoteData } = props;

  let [gridShow, setGridShow] = useState(false);
  const gridOrList = () => {
    setGridShow((gridShow = !gridShow));
  };

  return (
    <>
      <div className="note__list">
        <div className="container note__list-content">
          <div className="note__list-header">
            {
              <h2 className="note__list-title">
                {allNotes.length > 0 ? "All Notes" : "No Notes"}
              </h2>
            }
            <NoteListBtn grid={gridShow} changeGridShow={gridOrList} />
          </div>
          <div
            className={gridShow ? "note__list-items" : "note__list-items grid"}
          >
            {allNotes?.map((note) => (
              <NoteItem
                gridShow={gridShow}
                note={note}
                editNote={editNote}
                key={note.id}
                deleteNote={deleteNote}
                changeNoteData={changeNoteData}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteList;
