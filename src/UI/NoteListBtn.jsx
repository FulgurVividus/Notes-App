import gridImg from "../assets/images/grid.svg";
import list from "../assets/images/list.svg";

const NoteListBtn = (props) => {
  const { grid, changeGridShow } = props;

  return (
    <>
      <button className="note__list-btn" onClick={changeGridShow}>
        <img src={grid ? list : gridImg} alt="grid" />
        <span>{grid ? "Grid" : "List"}</span>
      </button>
    </>
  );
};

export default NoteListBtn;
