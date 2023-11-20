import "./Feed.css";

const Feed = ({ ...props }) => {
  const { id, caption, media_type, media_url } = props.feed;
  let post;

  switch (media_type) {
    case "VIDEO":
      post = (
        <video
          width={props.width}
          height="auto"
          src={media_url}
          typeof="video/mp4"
          controls
          playsInline
        ></video>
      );
      break;
    case "CAROUSEL_ALBUM":
      post = (
        <img
          width={props.width}
          height="auto"
          id={id}
          src={media_url}
          alt={caption}
        />
      );
      break;
    default:
      post = (
        <img
          width={props.width}
          height="auto"
          id={id}
          src={media_url}
          alt={caption}
        />
      );
  }
  return (
    <div className="feed-item">
      {post}
      {props.caption && <h5 className="caption">{caption}</h5>}
    </div>
  );
};

export default Feed;
