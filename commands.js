const fetchGif = require('./commands/fetchGif')
const chats =require('./commands/botChats')

module.exports = async (msg) => {
  
        if(msg.channel.id !== process.env.BOTCHANNELID)
            return

        chats.forEach((chat)=>{
        msg.content=msg.content.trim().toLowerCase()
        if(msg.content===chat.statement.toLowerCase()){
            msg.reply(chat.reply)
        }
    })

if (msg.content.trim().split(" ")[0] === "!gif") {
  fetchGif(msg);
}
};
