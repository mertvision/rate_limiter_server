/**
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */  

// Import Statement of express-rate-limit
const limiter = require("express-rate-limit");

// IP Based Rate Limiter (IP bazlı hız sınırlayıcı)
const ipRateLimiter = limiter({
    windowMs: process.env?.GLOBAL_IP_MAX_REQUEST_TIME, // 1000 milisecond is 1 second, 1 second x 60 = 60 second, 60x15=15 minute
    max: process.env?.GLOBAL_IP_MAX_REQUEST, // Max 100 request per 15 second
    message: "Too many requests from your IP address. Please try again later.",
    statusCode: 400,
    handler: (req,res)=>{
        console.log(`Too many requests in last 10 minute from ${req?.ip}`);
        res.write("Too many requests from your IP address. Please try again later.");
        res.end();
    },
});

// Login Route Rate Limiter (10 dakikada maksimum 10 istek atılabilir)
const loginRateLimiter = limiter({
    windowMs: process.env?.LOGIN_MAX_REQUEST_TIME, // 5000 milisecond is 5 second, 1000*60*10=10 minute
    max: process.env?.LOGIN_MAX_REQUEST, // Max login request limit is 10 per 10 minute
    message: "Too many login request from your IP address. Please try again later.", // Rate Limit Message
    statusCode: 400, // Status Code
    handler: (req,res)=>{ // Handler Function
        console.log(`Too many requests in last 10 minute from ${req?.ip}`);
        res.write("Too many login requests from your IP address. Please try again later.");
        res.end();
    },
});

// Register Route Rate Limiter
const registerRateLimiter = limiter({
    windowMs: process.env?.REGISTER_MAX_REQUEST_TIME, // 5000 milisecond is 5 second, 1000*60*10=10 minute
    max: process.env?.REGISTER_MAX_REQUEST, // Max register request limit is 5 per 10 minute
    message: "Too many login request from your IP address. Please try again later.", // Rate Limit Message
    statusCode: 400, // Status Code
    handler: (req,res)=>{ // Handler Function
        console.log(`Too many requests in last 10 minute from ${req?.ip}`);
        res.write("Too many register requests from your IP address. Please try again later.");
        res.end();
    },
});

module.exports = {
    ipRateLimiter,
    loginRateLimiter,
    registerRateLimiter
};