import axios from "axios";

export const fetchInstagramPost = async (limit: number) => {
  const token = process.env.REACT_APP_INS_TOKEN;
  return axios.get(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${limit}&access_token=${token}`
  );
};
