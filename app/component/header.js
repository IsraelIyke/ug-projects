import { useState } from "react";
import { MdArrowDropDownCircle } from "react-icons/md";
import Link from "next/link";
const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    // <nav className="bg-gradient-to-r from-yellow-600 to-white-500 p-3">
    <div>
      <nav className="mobile">
        <div className="nav">
          {/* Hamburger icon for mobile */}
          <div className="small">
            <button onClick={toggleMenu}>
              <MdArrowDropDownCircle style={{ fontSize: "2rem" }} />
            </button>
          </div>
          {/* Navigation links */}
          <ul className={`${showMenu ? "nav-list" : "nav-list-hidden"} `}>
            <Link href="./">
              <li>Home</li>
            </Link>
            <Link href="./psd-curve">
              <li>Sieve Analysis</li>
            </Link>
            <Link href="./mix-proportion">
              <li>Mix Proportion&Cost</li>
            </Link>
            <Link href="./converter">
              <li>Converter&Chart</li>
            </Link>
          </ul>
        </div>
      </nav>

      <nav className="desktop">
        <div className="nav">
          {/* Navigation links */}
          <ul className="nav-list">
            <Link href="./">
              <li>Home</li>
            </Link>
            <Link href="./psd-curve">
              <li>Sieve Analysis</li>
            </Link>
            <Link href="./mix-proportion">
              <li>Mix Proportion&Cost</li>
            </Link>
            <Link href="./converter">
              <li>Converter&Chart</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
