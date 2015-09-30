help = (name)->
  alert "help #{name}"
  last=  "bos"
  first = "wes"
  middle = "irv"

yell = (name)->
  who = name.toUpperCase()
  console.log(who)

yell('wes')

