import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <nav>
        <div className="title-container">
          <Link to="/" className="title">
            تجهیزات دندانپزشکی مودت
          </Link>
          <p>نمایندگی ایمپلنت T.Strong آذربایجان شرقی</p>
        </div>
        <menu onClick={() => setMenuState(!menuState)}>
          <span />
          <span />
          <span />
        </menu>
        <ul
          className={menuState ? "open" : ""}
          onClick={() => setMenuState(!menuState)}
        >
          <li>
            <NavLink to="/">خانه</NavLink>
          </li>
          <li>
            <NavLink to="/products">محصولات</NavLink>
          </li>

          <li>
            <NavLink to="/about"> درباره </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
