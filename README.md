## 1. Description of Application

This application is essentially a Node.js web server. The server utilizes the “express-rate-limiter” package. The “express-rate-limiter” package is middleware designed for Express.js and is used to limit the number of requests users can make within a specified time frame in Express applications. The server enforces time-based request limits on its two routes. The middleware configurations for the “express-rate-limiter” package are written in the “middlewares” folder. These configurations are added as middleware to the routes. Additionally, the “ipRateLimiter” middleware, which is also located in the same folder, provides global request limiting based on IP addresses.

One of the main purposes of rate limiting is to prevent a type of attack known as a DDoS (Distributed Denial of Service) attack, which is a form of brute force attack. In this type of attack, attackers send a high volume of systematic HTTP/HTTPS requests to a target resource in an attempt to disrupt its normal operation. The target's system and network resources start to deplete under this attack. DDoS attacks are often carried out from many different computers, which makes the attack more effective. By defining specific request limits within a certain time frame using rate limiters, attempts are made to mitigate the impact of DDoS attacks.

## 2. Run

After downloading this project, open the terminal and, ensuring you are in the project's root directory, execute the following commands in sequence:

1. ```npm install``` -> Node packages will be installed.
2. ```npm run dev``` -> The application will be up and running at the address http://localhost:8080/.




