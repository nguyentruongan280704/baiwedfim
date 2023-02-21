import "./narbar.css"
import React, { useState } from "react";

function Narbar() {
  const [isVisible, setIsVisible] = useState(true)
  const handleSearchButton = () => {
    setIsVisible(!isVisible)
  }
  return (
    <>
      <div className="navbar-name">
        <div className="container nav-bar">
          <div className="row row-navbar">
            <div className="col-3">
              <img
                src="http://flixgo.volkovdesign.com/main/img/logo.svg"
                alt=""
                className="logo-flixgo"
              />
            </div>
            <div className="col-2 tudutai">
              {/* <li class="nav-item dropdown"> */ }
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                HOME
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Home slideshow bg
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Home static bg
                  </a>
                </li>
              </ul>
              {/* </li> */ }
            </div>
            <div className="col-2">
              {/* <li class="nav-item dropdown"> */ }
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATALOG
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Catalog Grid
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Catalog List
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Details Movie
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Details TV Series
                  </a>
                </li>
              </ul>
              {/* </li> */ }
            </div>
            <div className="col-2">
              <span>PRICING PLAN</span>{ " " }
            </div>
            {/* search button */ }
            <div className="col-1">
              <i class="fa-solid fa-magnifying-glass" onClick={ handleSearchButton }></i>
            </div>

            <div className="col-2 ">
              <button className="btn-navbar">SIGN IN</button>
            </div>
          </div>

          <div className={ isVisible ? "row search" : "row search bienmat" }>
            <div className="col-12">
              <input type="text" placeholder="I'm looking for..." className="input" />
              <button className="btn-search">SEARCH</button>
            </div>
          </div>
          {/* end */ }
        </div>
      </div>
    </>
  );
}

export default Narbar;
