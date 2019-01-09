const express = require('express');
const userController = require('../controllers/user');


const router = express.Router();

router.route('/create_user').post(userController.create);
router.route('/update_user/:id').post(userController.update);
router.route('/delete_user/:id').post(userController.delete);
router.route('/show_user/:id').get(userController.show);
router.route('/userAuthentication').post(userController.userAuthentication);


module.exports = router;