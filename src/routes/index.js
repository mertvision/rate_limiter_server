/**
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */  

// Express Router
const express = require("express");
const router = express.Router();

// Router functions
const {loginRateLimiter, registerRateLimiter} = require("../middlewares/rate_limit/rateLimiters");

// Server login route and route functions -> http://localhost:8080/api/login
router.get('/login', loginRateLimiter, async(req,res)=> {
    try{
      res.write("Login Page");
      res.end();
    }
    catch(err){}
});

// Server register route and route functions -> http://localhost:8080/api/register
router.get('/register', registerRateLimiter, async (req,res)=>{
    try{
        res.write("Register Page");
        res.end();
    }
    catch(err){}
});

module.exports = router;