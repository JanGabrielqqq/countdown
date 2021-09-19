import React from "react";
import modules from "./Header.module.scss";
function Header() {
  return (
    <div className={modules.text}>
      <strong>We're launching soon</strong>
    </div>
  );
}

export default Header;
