import axios from "axios";

exports.handler = async () => {
  const limit = 12;
  const token = process.env.REACT_APP_INS_TOKEN;
  try {
    return axios.get(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${limit}&access_token=${token}`
    );
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
