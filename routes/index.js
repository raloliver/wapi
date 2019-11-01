const express = require('express');
const router = express.Router();

router.get('/', function (request, response) {
  response.render('index', { title: 'Library API' });
});
router.get('/book', function (request, response) {
  response.render('book', {
    title: 'Books page', books: [
      { name: 'Livro 1' },
      { name: 'Livro 2' },
      { name: 'Livro 3' },
      { name: 'Livro 4' },
      { name: 'Livro 5' },
      { name: 'Livro 6' },
      { name: 'Livro 7' },
      { name: 'Livro 8' }
    ]
  });
});
router.get('/if', function (request, response) {
  response.render('if', { title: 'if', is3D: false });
});

router.get('/xml', function (request, response) {
  response.header('Content-Type', 'text/xml');
  response.send('<?xml version="1.0" encoding="UTF-8"?><characters><character><name>Autor 1</name><surname>Surname 1</surname></character><character><name>Autor 2</name><surname>Surname 2</surname></character><character><name>Autor 3</name><surname>Surname 3</surname></character></characters>');
});

let json2xml = require('json2xml');
router.get('/xml-mapper', function (request, response) {
  response.header('Content-Type', 'text/xml');
  let obj = {
    "characters": [
      { "character": { "name": "Autor 1", "surname": "Surname 1" } },
      { "character": { "name": "Autor 2", "surname": "Surname 2" } },
      { "character": { "name": "Autor 3", "surname": "Surname 3" } }
    ]
  };

  response.send(json2xml(obj));
});

module.exports = router;
