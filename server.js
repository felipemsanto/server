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
    const about = {
        avatar_url: "assets/img/frank.png",
        name: "Francisco Ferreira",
        role: "Professor de Matemática",
        description: "Sempre tentando fazer o melhor para isso e aquilo, um texto aiLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec  maximus.",
    }


    return res.render("about", { about })
})

server.get("/classes", function(req, res) {

    return res.render("classes", {items: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        if (video.id == id) {
            return true
        }
    })

    if (!video) {
        return res.send("Video not found")
    }

    return res.render("video", {item: video})


})

server.listen(5000, function() {
    console.log("server is running")
})