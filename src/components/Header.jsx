import { React } from "react";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <img className="header--image" src={require("../images/troll_face.png")} />
      <h1 className="header--title">Meme Generator</h1>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
};

export default Header;
