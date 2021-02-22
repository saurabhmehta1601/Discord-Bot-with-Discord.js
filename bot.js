require('dotenv').config()
const Discord=require('discord.js')
const client= new Discord.Client()
const fetch=require('node-fetch')
client.login(process.env.BOTTOKEN)

client.on('ready',()=>{
    console.log('👍👍👍👍👍')
})

client.on('message',async (msg)=>{
    if(msg.channel.id==process.env.BOTCHANNELID && msg.content==="helloow") //replying message in particular channel
        msg.reply('hello man hoo are you')
    else if(msg.channel.id==process.env.BOTCHANNELID && msg.content==="are you fine?")
        msg.channel.send("yeah totally")

    else if(msg.channel.id==process.env.BOTCHANNELID && msg.content.split(" ")[0]==="!gif")
       {
        
        if(msg.content.split(" ").length > 1 ) 
        search_term=msg.content.trim().split(" ").slice(1,msg.content.split(" ").length)
        else
        search_term="kitten"

        const res= await fetch("https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
            process.env.TENORGIFKEY,{
                mode: 'no-cors'
            })

        const json= await res.json()
        const gif=json.results[Math.floor(Math.random()*json.results.length)].url
       
        msg.channel.send(gif)
        msg.channel.send('Gif from Tenor')
       } 
})