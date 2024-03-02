import React, { useState } from "react";
import { Controller, Star } from "react-bootstrap-icons";
import logoLight from "../img/logo/wgwg_logo_light.png";
import logoDark from "../img/logo/wgwg_logo_dark.png";

function Navbar() {
  //스크롤 다운 하면 로고 색상 전환 로직을 위한 state 선언
  const [logoMode, setLogoMode] = useState("light");

  const logoState = logoMode === "light" ? logoLight : logoDark;

  return (
    <nav>
      <div className="nav_wrap">
        <div className="nav_left">
        <a href="#">
          <div className="navbar_logo">
            <img src={logoState} alt="logo" />
          </div>
        </a>
          <div className="navbar_server">
            <a href="#">
              <div className="nav_list">
                <Controller />
                <p>서버</p>
              </div>
            </a>
          </div>
          <a href="#">
            <div className="nav_list">
              <Star />
              <p>리뷰</p>
            </div>
          </a>
        </div>
        <div className="nav_right">
          <a href="#">
            <div className="nav_list">
              <p>로그인</p>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
