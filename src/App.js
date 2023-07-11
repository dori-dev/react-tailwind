function App() {
  return (
    <div className="m-4">
      <div className="card">
        <img
          src="https://source.unsplash.com/random/"
          alt=""
          className="w-full"
        />
        <div className="px-6 py-4">
          <span className="card-title">An Example Image</span>
          <ul className="mt-2">
            <li>
              <strong>Views:</strong> 11K
            </li>
            <li>
              <strong>Downloads:</strong> 3.3K
            </li>
            <li>
              <strong>Likes:</strong> 200
            </li>
          </ul>
        </div>
        <div className="px-6 pb-2">
          <span className="tag">#wow</span>
          <span className="tag">#beautiful</span>
          <span className="tag">#tag2</span>
          <span className="tag">#tag3</span>
          <span className="tag">#image</span>
          <span className="tag">#background</span>
          <span className="tag">#tag4</span>
          <span className="tag">#tag5</span>
        </div>
      </div>
    </div>
  );
}

export default App;
