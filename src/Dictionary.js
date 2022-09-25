import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord} definition`);
  }

  function handleKeyWordChange(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyWordChange} />
      </form>
    </div>
  );
}
