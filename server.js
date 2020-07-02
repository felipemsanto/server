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
    return res.render("about")
})

server.get("/classes", function(req, res) {

    return res.render("classes", {items: videos })
})

server.listen(5000, function() {
    console.log("server is running")
})