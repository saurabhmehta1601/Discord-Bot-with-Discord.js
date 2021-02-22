const fetch=require('node-fetch')

module.exports = async (msg) => {
  if (msg.content.split(" ").length > 1)
    search_term = msg.content
      .trim()
      .split(" ")
      .slice(1, msg.content.split(" ").length);
  else search_term = "kitten";

  const url =
    "https://g.tenor.com/v1/search?q=" +
    search_term +
    "&key=" +
    process.env.TENORGIFKEY;

  const res = await fetch(url, {
    mode: "no-cors",
  });

  const json = await res.json();
  const gif = json.results[Math.floor(Math.random() * json.results.length)].url;

  msg.channel.send(gif);
  msg.channel.send("Gif from Tenor ❤");
};
