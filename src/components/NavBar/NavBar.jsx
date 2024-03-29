import "./navbar.css";
import back from "../../assets/images/back.svg";
import searchIcon from "../../assets/images/search.svg";
import close from "../../assets/images/close.svg";
import { useState } from "react";

function NavBar(props) {
  const { setSearch } = props;
  const [showSearchBar, setSearchState] = useState(false);
  const showSearch = () => setSearchState(true);
  const closeSearch = () => setSearchState(false);

  return (
    <>
      <nav className="nav">
        {showSearchBar === false && (
          <div className="nav__content">
            <h1 className="nav__title">NOTES</h1>
            <button onClick={showSearch} className="nav__btn nav__search-btn">
              <img src={searchIcon} alt="search" />
            </button>
          </div>
        )}

        {showSearchBar === true && (
          <div className="nav__search">
            <button onClick={closeSearch} className="nav__btn">
              <img src={back} alt="" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={closeSearch} className="nav__btn">
              <img src={close} alt="" />
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
