import "./InstagramFeed.css";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Feed from "../Feed/Feed";
import { FeedModel } from "../../models/feed.model";

const InstagramFeed = ({ ...props }) => {
  const feed: FeedModel[] = [];
  const [feeds] = useState(feed);

  useEffect(() => {
    const abortController = new AbortController();
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
