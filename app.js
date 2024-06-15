import Server from "./server/Server.js";


app.use(express.static('public'));


Server.run(process.env.PORT || 8080)
