import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [term, setTerm] = useState("");
  const getData = async () => {
    const key = process.env.REACT_APP_PIXABAY_API_KEY;
    const per_page = 48;
    const { data } = await axios.get(
      `https://pixabay.com/api/?key=${key}&per_page=${per_page}&q=${term}&image_type=photo`
    );
    return data.hits;
  };
  useEffect(() => {
    try {
      const data = getData();
      data.then((result) => {
        setImages(result);
      });
    } catch (error) {
      setError(error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container my-10 mx-auto flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {images.map((image, i) => (
          <Card image={image} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
