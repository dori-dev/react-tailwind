const Card = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="card">
      <img src={image.webformatURL} alt={image.tags} className="w-full" />
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
        {tags.map((tag, i) => (
          <span className="tag" key={i}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
