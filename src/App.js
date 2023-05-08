import SearchHeader from "./SearchHeader";
import ImageList from "./components/ImageList";
import searchImages from "./functions/Api";
import { useState } from "react";

function App() {
  const [valueImages, setvalueImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    console.log(result);
    setvalueImages(result);
    console.log(valueImages);
  };

  return (
    <div className="App">
      <div className="heroClass">
        <div>
          <h1 className="heroText">Ne arıyorsunuz?</h1>
          <SearchHeader search={handleSubmit}></SearchHeader>
        </div>
      </div>
      <ImageList imagePlaceHolder={valueImages}></ImageList>
    </div>
  );
}

export default App;
