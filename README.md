# Third-Party Cookies

## Overview
This project explores the concept of third-party cookies and their implications in the context of online advertising. The goal is to understand how cookies work and gain insights into internet policies and client/server requests. The project aims to implement third-party cookies using Express.js and Node.js.

## Project Description
As Google plans to phase out third-party cookies, it is essential to explore their functionality and alternatives. The project involves creating two websites, one hosted on a local IP address and the other on a Kali virtual machine. Initially, third-party cookies were implemented using the Express CORS middleware to allow cross-origin requests. However, certain limitations were encountered:

1. HTTPS Requirement: To prepare for the phase-out of third-party cookies, Google now requires third-party cookies to be set only through HTTPS servers. This necessitates hosting the server on an HTTPS server.
2. SSL Certificate Challenges: Implementing HTTPS servers requires SSL certificates. Despite attempts to use self-signed SSL certificates, Chrome rejected the certificates, preventing successful implementation.

## Solution
To replicate the behavior of third-party cookies, the project shifted focus to implementing same root domain cookies. The process involves:

1. When a user visits Website A, the server sets a cookie on the root domain shared by Website A and Website B (localhost in this case).
2. The cookie becomes accessible to Website B when the user visits it.
3. Website B can then display ads from Website A, leveraging the shared root domain cookie.

Please note that this project provides insights into the implementation of third-party cookies and their alternatives. It highlights the challenges posed by recent changes in internet policies and provides an opportunity to explore related concepts and technologies.

For detailed implementation and code samples, refer to the project's repository and documentation on GitHub.
