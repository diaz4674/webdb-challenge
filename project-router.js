const knex = require('knex');
const router = require('express').Router();

const dbConfig = require('./knexfile.js')
const db = knex(dbConfig.development);

router.get('/', (req, res) => {
    res.send(" Let's do some sprint!")
})

//GET all projects
router.get('/api/projects', (req, res) => {
    db('projects')
        .then( results => res.json(results))
        .catch(err => res.json(err))
})

//GET projects by ID
router.get("/api/projects/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const project = await db('projects').where({id}).first();
      const actions = await db('actions').where({projects_id: id});

      if (project) {
        res.status(200).json({ ...project, actions });
      } else {
        res.status(404).json({ message: "Error 404: Project could not be found." });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });

//PUT actions
router.put('/api/actions/:id', (req, res) => {
    db('actions').where({id: req.params.id}).update(req.body)
        .then(updates => res.status(200).json(updates))
        .catch(err => res.status(500).json(err))
})

//GET all actions
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