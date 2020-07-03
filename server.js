const express = require('express')
const nunjucks = require('nunjucks');
const { static } = require('express');

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    const data = {
        avatar_url: "assets/img/frank.png",
        name: "Francisco Ferreira",
        role: "Professor de Matemática",
        description: "Sempre tentando fazer o melhor para isso e aquilo, um texto aiLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec  maximus.",
        link: [
            { name: "Linkedin", url: "https://www.linkedin.com/in/felipemsanto/" },
            { name: "Facebook", url: "https://www.facebook.com/francisco.ferreira.140" },
            { name: "YouTube", url: "https://www.youtube.com/channel/UC2bS-aCNBs8oGBTtN7HlwMQ/featured?view_as=subscriber" }
         ]  
    }


    return res.render("about", {about: about})
})

server.get("/classes", function(req, res) {

    return res.render("classes", {items: videos })
})

server.listen(5000, function() {
    console.log("server is running")
})