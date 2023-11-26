import { React } from "react";
import "./styles.css";

const Meme = () => {
  return (
    <main>
      <form className="meme--form">
        <input
          className="meme--input--field"
          type="text"
          placeholder="Top text"
        />
        <input
          className="meme--input--field"
          type="text"
          placeholder="Top text"
        />
        <button className="meme--button"> Get a new meme image 🖼 </button>
      </form>
    </main>
  );
};

export default Meme;
