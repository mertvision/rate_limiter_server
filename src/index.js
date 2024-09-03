/**
 * Main file an application that limits the number of requests to an address over time using rate limiting.
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
*/

// Import Statement of Third-Party Modules
const express = require("express"); // Express framework
// Import Statement of Our Modules 
const initServerConfig = require("./config/server_config"); // Server configuration
const {ipRateLimiter} = require("./middlewares/rate_limit/rateLimiters"); // Global ip rate limiter
// Import Statement of Server API Routes
const routes = require("./routes/index"); // Server routes

// Invoke initServerConfig function and make ready server for environment variables
initServerConfig(); // Invoke initServerConfig function

// Server port value variable declaration and value assigment
const PORT = process.env.PORT || 8090; // Server port value declaration and value assigment

// Server variable
const server = express(); // Server variable declaration and value assigment

// Server middlewares
server.use(express.json()); // Server uses Express json body parser as a middleware 
server.use(ipRateLimiter); // Server uses global ip rate limiter as a middleware
server.use('/api', routes); // Server uses routes for /api endpoint as a middleware

// Server initialization function
async function init(){
    try{
        server.listen(PORT, async()=> {
            console.log(`Server is running on localhost:${PORT}`);
        });
    }
    catch(err){};
};

// Invoke init() function
init();