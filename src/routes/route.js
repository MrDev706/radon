const express = require('express');
const { json } = require('express/lib/response');
const movies = ['Stevejobs', 'kgf2', 'scam 1992', 'Rocky handsome', 'Tamasha'];




const router = express.Router();

router.get('/test-me', function (req, res) {
  
    
    
    res.send(result)
});

router.get('/movies', function (req, res) {
    

    res.send(movies)
});

router.get('/movies/:indexNum', function (req, res) {
    let num = req.params.indexNum;
    if(num > movies.length) {
      res.send('enterd index number is not available')

    }
    else {
    let name = movies[num];
    res.send('My Movie name =' + name)
    }
});

router.get('/all-movies', function (req, res) {
    let box = [ 
    {
     'id': 1,
     'name': "Rocky handsome",
    }, 
    {
        'id': 2,
        'name': "steve",
    },
    {
        'id': 3,
        'name': "kgf",
    },
       ]
       
    res.send('My 4th api!' + JSON.stringify(box))
});

router.get('/get-movie/:id', function (req, res) {
    let box = [ 
        {
         'id': 1,
         'name': "Rocky handsome",
        }, 
        {
            'id': 2,
            'name': "steve",
        },
        {
            'id': 3,
            'name': "kgf",
        },
           ]

    let i = parseInt(req.params.id);
    let name = box.filter(x => x.id === i);
    
    //let movie = name[0]['name']
    res.send('My last api! gert movie by id = ' + name[0]['name'])
});

module.exports = router;
// adding this comment for no reason