const knex = require('knex');
const router = require('express').Router();

const dbConfig = require('./knexfile.js')
const db = knex(dbConfig.development);

router.get('/', (req, res) => {
    res.send(" Let's do some sprint!")
})

router.get('/api/projects', (req, res) => {
    db('projects')
        .then( results => res.json(results))
        .catch(err => res.json(err))
})

router.get('/api/actions', (req, res) => {
    db('actions')
        .then(actions => res.json(actions))
        .catch(err => res.json(err))
})

//POST a new Project
router.post('/api/projects', (req, res) => {
    if(!req.body.name || !req.body.description){
        res.status(400).json({message: 'please provide a name or description'})
    } else {
        db('projects').insert(req.body)
            .then(newProject => {res.status(200).json(newProject)}) 
            .catch(err => res.status(500).json(err))
    }
})

//POST a new action
router.post('/api/actions', (req, res) => {
    if(!req.body.description){
        res.status(400).json({message: 'please provide a description or project id'})
    } else {
        db('actions').insert(req.body)
            .then(newAction => {res.status(200).json(newAction)})
            .catch(err => res.status(500).json(err))
    }
})

module.exports = router;