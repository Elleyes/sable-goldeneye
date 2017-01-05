var express = require('express')
var router = express.Router()
var path = require('path')

const db = require('../database')

// app.use(bodyParser.urlencoded({extended: true}))
/* GET home page. */

//verb and uri must be unique within the app

router.get('/', function(req, res, next) {
  //setting title variable
  db.getListos()
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
        db.getListos().then(item => {res.redirect('/')
      })
    } else {
        db.addItems(item).then(() => res.redirect('/'))
    }
})

router.post('/api/todo/modify', function(request, response) {
    // Get all the items IDs
    console.log(request.body)
    if ('delete' in request.body) {
        console.log("deleting")
        db.removeItems(request.body.todos)
    } else if ('complete' in request.body) {
        //call complete db function
        console.log("completing")
        db.markComplete(request.body.todos)
    } else if ('edit' in request.body) {
        console.log("editing")
        db.editTask(request.body.todos, request.body.newToDo)
    }
    console.log('modify');
    response.redirect('/')
})

router.post('/api/todo/edit',  function(request, response) {

  db.editTask(request.body.newToDo, request.body.id)
  response.redirect('/')
})

router.post( '/api/todo/:id', (request, response) => {
  const { id } = request.params
  const { completed } = request.body

  db.updateCompletion( id, completed )
    .then( result => response.json({ message: `${id} completed` }) )
})

module.exports = router
