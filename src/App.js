import react, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="m-4 flex flex-wrap gap-10">
      {images.map((image) => (
        <div className="card">
          <img src={image.webformatURL} alt="" className="w-full" />
          <div className="px-6 py-4">
            <span className="card-title">Beautiful Photo By {image.user}</span>
            <ul className="mt-2">
              <li>
                <strong>Views:</strong> {image.views}
              </li>
              <li>
                <strong>Downloads:</strong> {image.downloads}
              </li>
              <li>
                <strong>Likes:</strong> {image.likes}
              </li>
            </ul>
          </div>
          <div className="px-6 pb-2">
            {image.tags.split(",").map((tag) => (
              <span className="tag">#{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
