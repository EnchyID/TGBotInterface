const { Telegraf } = require("telegraf")
const cfg = require("./config.json")
const bot = new Telegraf(cfg.APITOKEN)

const lang = require("./languages.json")

bot.on("text", ctx => {
  let text = ctx.message.text
  if(text == "/start"){
    ctx.reply(lang["eng"].startMessage)
  }else{
    sendKeyboardMessage(ctx, lang["eng"].existsCommand, ["Test", "Start"])
  }
})

function sendKeyboardMessage(ctx, text, buttons){
  let lists = []
  buttons.forEach(text -> {
    lists.push([{text: text}])                              
  })
  lists.push([{text: "Submit"}])
  ctx.reply(text, {
    reply_markup: {
      keyboard: lists,
      resize_keyboard: true
    }
  })
}

bot.launch()
