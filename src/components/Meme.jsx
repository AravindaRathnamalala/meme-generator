import { React, useState } from "react";
import "./styles.css";
import memesData from "../data/memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  const getMemeImage = () => {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    console.log(url);
    setMemeImage(url);
  };

  return (
    <main>
      <div className="meme--form">
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
        <button className="meme--button" onClick={getMemeImage}>
          {" "}
          Get a new meme image 🖼{" "}
        </button>
        <img src={memeImage} className="meme--image" />
      </div>
    </main>
  );
};

export default Meme;
