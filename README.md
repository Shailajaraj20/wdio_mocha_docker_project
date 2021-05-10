This repository was created for a sample automation task for Volvo.

Tecnologies used:

WebDriverIO
Docker
Junit Reporter

Steps to run the docker Image
1. docker run -d -p 2222:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome - This is done to attach 4444 port to your machines where chromedriver is running. It is machine agnostic, so you would get correct version of chrome driver for windows
2. docker build . -t [tagName]
3. docker run --network="host" [tagName]  - Runs docker container by sharing host's network so that any calls to container's(VM's) `localhost` goes to host's `localhost`

Scope for future Work
- This repository contains the basic test cases but a wireframe is created to carry it forward for the complex solution
- The integration with kubernetes/Jenkins to execute  the solution
- Image comparison service is yet to be implemented.




