const express = require('express'), router = express.Router()

router.get('/', (req, res) => {
    path = String(__dirname) + "\\views\\index.html"
    res.sendFile(path)
})

router.get('/index.html', (req, res) => {
    res.redirect('/')
})

router.get('/multiplayer', (req, res) => {
    path = String(__dirname) + "\\views\\multiplayer.html"
    res.sendFile(path)
})

router.get('/multiplayer.html', (req, res) => {
    res.redirect('/multiplayer')
})

router.get('/singleplayer', (req, res) => {
    path = String(__dirname) + "\\views\\singleplayer.html"
    res.sendFile(path)
})

router.get('/singleplayer.html', (req, res) => {
    res.redirect('/singleplayer')
})

module.exports = router