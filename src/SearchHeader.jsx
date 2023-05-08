import React from "react";
import { useState } from "react";

export default function SearchHeader({ search }) {

  const [value, setValue] = useState('');

  const handleInput = (event)=>{
    setValue(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  return (
    <div className="searchArea">
      <form onSubmit={handleFormSubmit}>
        <input
          value={value}
          onChange={handleInput}
          className="input"
          type="text"
          placeholder="Ne aramıştınız?"
        />
        
      </form>
    </div>
  );
}
