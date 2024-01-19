const express = require('express'); 
const router = express.Router(); 
const authController = require('../controllers/authController')


router.post('/api/auth/login',authController.login)
router.post('/api/auth/register',authController.register)
router.post('/api/auth/resetPass',authController.resetPassword)


module.exports = router; 