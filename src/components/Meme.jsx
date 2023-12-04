import React, { useState } from "react";
import "./styles.css";
import memesData from "../data/memesData";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  const getMeme = () => {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme((previousMeme) => ({
      ...previousMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="meme--form">
        <input
          className="meme--input--field"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="meme--input--field"
          type="text"
          placeholder="Top text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="meme--button" onClick={getMeme}>
          {" "}
          Get a new meme image 🖼{" "}
        </button>

        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
};

export default Meme;
