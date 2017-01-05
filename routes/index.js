var express = require('express')
var router = express.Router()
var path = require('path')

const db = require('../database')

router.get('/', function(req, res, next) {
    //setting title variable
    db.getItems()
        .then(todos => {
            res.render('index', {
                title: 'NOT Trello',
                todos
            })
        })
})

router.post('/api/todo', function(req, res) {
    const {
        item
    } = req.body
    console.log('Item: ', item);
    console.log('Item: ', req.body);
    if (item.length === 0) {
      console.log("cannot be blank")
        db.getItems().then(item => {res.redirect('/')
      })
    } else {
        db.addItems(item).then(() => res.redirect('/'))
    }
})


module.exports = router
