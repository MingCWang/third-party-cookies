# third-party-cookies
## What are third-party cookies?
Third-party cookies are cookies that are set by a website other than the one you are currently on. Most third-party cookie technologies are used for online advertising and they can also allow advertisers to track you across multiple websites. 
## Project Description
As Google decided to phase out third-party cookies, I hope to learn more about how cookies work to help me further understand internet policies and client/server requests. The goal is to implement third-party cookie using Express.js and Node.js. 
## Limitations
I start off my project by creating two websites where one website is hosted on my local ip address and the other website hosted on my kali virtual machine. Third-party cookies are set with the Express cors middleware to allow cross-origin requests. But I ran into two problems:
1. As a result of preparing for the phase out of third-party cookies, Google has limited third-party cookies to be set through HTTPS servers only. This means that the server must be hosted on a HTTPS server.
2. HTTPS servers requrie SSL certificates, however, after trying to implment HTTPS servers with my self signed SSL certificate, Chrome refuse to accept my certifcate. 
## Solution
To mimic the effect of third-party cookies, I decided to implement same root domain cookies. 
1. When the user visits website A, the server will set a cookie on the root domain of website A and website B. In this case, the root domain is localhost. 
2. The cookie will then be available to website B when the user visits it. 
3. Website B will then set the ad from website A.

