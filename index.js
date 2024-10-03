const express = require("express")
const app = express();

app.get('/',(req,res) => res.json({message:
    "working"
}))
app.listen(8080,()=> console.log("App is running 8080"))