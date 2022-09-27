var express = require('express');
var router = express.Router();

//require controller that exports skills CRUD functions
const skillsCtrl = require ("../controllers/skills");

//All paths start with /skills

//GET /skills
router.get ("/", skillsCtrl.index)

module.exports = router;
