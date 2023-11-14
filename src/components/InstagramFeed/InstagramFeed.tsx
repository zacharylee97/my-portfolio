import "./InstagramFeed.css";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Feed from "../Feed/Feed";
import { FeedModel } from "../../models/feed.model";

const InstagramFeed = ({ ...props }) => {
  const feed: FeedModel[] = [];
  const [feeds, setFeedsData] = useState(feed);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchInstagramPost = async () => {
      try {
        const token = process.env.REACT_APP_INS_TOKEN;
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${token}`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
          });
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchInstagramPost();

    return () => {
      abortController.abort();
    };
  }, [props.limit]);

  return (
    <Container className="instagram-feed-container">
      <Container className="header">
        <h1>Instagram</h1>
        <a href="https://www.instagram.com/zachary.lee97/">
          https://www.instagram.com/zachary.lee97/
        </a>
      </Container>
      <Container className="feed-container">
        {feeds.map((feed) => (
          <Feed key={feed.id} feed={feed} />
        ))}
      </Container>
    </Container>
  );
};

export default InstagramFeed;
