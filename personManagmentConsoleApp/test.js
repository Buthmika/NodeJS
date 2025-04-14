const fs=require('fs');
// fs.writeFileSync("data.txt","Hello World!")
// fs.appendFileSync("data.txt"," Buthmika")
const data=fs.readFileSync("data.txt")
console.log(data.toString())
