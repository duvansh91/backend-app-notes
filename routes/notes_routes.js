const express = require('express');
const notesController = require('../controllers/note');


const router = express.Router();

router.route('/showAll').get(notesController.showAll);
router.route('/create').post(notesController.create);
router.route('/update/:id').post(notesController.update);
router.route('/delete/:id').post(notesController.delete);

module.exports = router;