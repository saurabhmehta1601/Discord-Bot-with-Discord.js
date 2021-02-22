const fetchGif = require('./fetchGif')

module.exports = async (msg) => {
  
  if( msg.channel.id == process.env.BOTCHANNELID)  {
    
    switch (msg.content) {
      case "hiii":
        msg.reply("hii brother");
        break;
      case "helloow":
        msg.reply("hello man hoo are you");
        break;
      case "are you fine?":
        msg.channel.send("yeah totally");
        break;
      default:
        break;
    }
}    

if (msg.content.trim().split(" ")[0] === "!gif") {
  fetchGif(msg);
}
};
