const { Telegraf } = require("telegraf")
const cfg = require("./config.json")
const bot = new Telegraf(cfg.APITOKEN)

const lang = require("./languages.json")

bot.on("text", ctx => {
  let text = ctx.message.text
  if(text == "/start"){
    ctx.reply(lang["eng"].startMessage)
  }else{
    ctx.reply(lang["eng"].existsCommand)
  }
})

bot.launch()
