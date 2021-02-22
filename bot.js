const commandHandler =require('./commands')
require('dotenv').config()
const fetch=require('node-fetch')
const Discord=require('discord.js')
const client= new Discord.Client()
client.login(process.env.BOTTOKEN)

client.on('ready',()=>{
    console.log('Botserver is live')
})


client.on('message',commandHandler)