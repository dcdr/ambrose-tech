# Web Programming

Computer programs operate in many environments. They run on mainframe computers, personal computers, servers, smart phones,
tablets, watches, automobiles, refrigerators, thermostats, airplanes, cruise missles, toys, and much more.

Web programs run in at least two environments. The user facing part of the program runs in a web browser or some mobile device,
such as a phone, tablet or watch. The part of the program displays and collects data from the user, but does not store or process
it. The user facing part of the program is often called the front-end. The front-end retrieves data from and sends data to the
backend running on a remote server. 

The backend is generally composed of several parts. All of these parts may run on one server or be spread across multiple
servers or even one part itself may be replicated across many servers. This latter case occurs when there are thousands of
concurrent users. No one computer could handle such a load. So the program is replicated on many servers and a component
called the load balancer distributes (users') requests across the replicated servers.

There are two general approaches to generating the front-end. The older approach is called a multi-page application (MPA) where
each page the user sees is generated on the backend. That is, as the user navigates through the application, data is sent
to the server and the server generates a new page for the user to interact with. The pages are almost always implemented in
HTML and presented in a web browser running on the user's computer or mobile device. 

The more modern approach is called single-page applications (SPA). It's not that there is a single page in the application, but
that the backend transfers at most one page, actually an entire application, to the front-end to be presented to the user. The
application running in the browser generates all of the pages that the user sees. The application requests data from and 
transfers data to the backend through an application program interface (API).

