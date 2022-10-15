import "./InstagramPost.css";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Feed from "../Feed/Feed";
import { FeedModel } from "../../models/feed.model";

const InstagramPost = ({ ...props }) => {
  let post: FeedModel | undefined;
  const [feed, setFeedData] = useState(post);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchInstagramPost = async () => {
      try {
        const token = process.env.REACT_APP_INS_TOKEN;
        axios
          .get(
            `https://graph.instagram.com/${props.postId}?fields=id,media_type,media_url,caption&access_token=${token}`
          )
          .then((resp) => {
            setFeedData(resp.data);
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
    <Container className="feed-container">
      {feed && <Feed key={feed.id} feed={feed} width={"100%"} />}
    </Container>
  );
};

export default InstagramPost;
