import { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "😎": "savage"
  };

  var emojisInDict = Object.keys(emojiDictionary);
  const [userInput, setUserInput] = useState("");

  function onChangeEventHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];

    if (emojiMeaning === undefined) {
      emojiMeaning = "Emoji not listed in the database";
    }
    setUserInput(emojiMeaning);
  }

  function emojiClickEventHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setUserInput(emojiMeaning);
  }
  return (
    <div className="App">
      <h1>Know The Emogi</h1>
      <input onChange={onChangeEventHandler} />
      <div>meaning {userInput}</div>
      <div>Emojis we know </div>
      {emojisInDict.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickEventHandler(emoji)}
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}