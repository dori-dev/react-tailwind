import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";
import Search from "./search";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const getData = async (text) => {
    const key = process.env.REACT_APP_PIXABAY_API_KEY;
    const per_page = 48;
    const term = text || "";
    const { data } = await axios.get(
      `https://pixabay.com/api/?key=${key}&per_page=${per_page}&q=${term}&image_type=photo`
    );
    return data.hits;
  };
  const searchTerm = (text) => {
    try {
      setIsLoading(true);
      const data = getData(text);
      data.then((result) => {
        setImages(result);
        setIsLoading(false);
      });
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    try {
      const data = getData();
      data.then((result) => {
        setImages(result);
        setIsLoading(false);
      });
    } catch (error) {
      setError(error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container my-10 mx-auto flex flex-col justify-center items-center">
      <Search handleSearch={searchTerm} />
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-16 font-semibold text-orange-600">
          Loading...
        </h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {images.map((image, i) => (
            <Card image={image} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
