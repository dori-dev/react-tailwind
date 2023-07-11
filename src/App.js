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
    <div className="mx-6 my-10 flex flex-wrap gap-10 justify-center">
      {images.map((image, i) => (
        <Card image={image} key={i} />
      ))}
    </div>
  );
}

export default App;
