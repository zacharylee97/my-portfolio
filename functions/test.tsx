import fetch from "node-fetch";

exports.handler = async (event, context) => {
  try {
    const limit = 12;
    const token = process.env.REACT_APP_INS_TOKEN;
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${limit}&access_token=${token}`
    );
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
