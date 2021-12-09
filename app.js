const path = require("path")
const express = require("express")

const app = express()


app.set("port", process.env.PORT || 4000) 


app.listen(app.get("port"), () => console.log("listening on port http:localhost:" + app.get("port")))

app.use(express.static(path.resolve(__dirname,"./public")))

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname,"./views","home.html")))

app.get("/registrar", (req, res) => res.sendFile(path.resolve(__dirname,"./views","registrar.html")))

app.get("/ingresar", (req, res) => res.sendFile(path.resolve(__dirname,"./views","ingresar.html")))