# Web Programming

Computer programs operate in many environments. They run on mainframe computers, personal computers, servers, smartphones,
tablets, watches, automobiles, refrigerators, thermostats, airplanes, cruise missles, toys, and much more.

Web programs are split into two parts, a front-end displaying data to the user, running in a web browser or mobile app, and
a backend moving data to and from permanent storage and applying business rules, running on a remote server.

The backend is composed of several parts that may run on one server or be spread across multiple servers. Individuals parts
may be replicated across several servers to provide redundancy in case of failure or to handle thousands of concurrent users.

There are two general approaches to implementing the front-end. The older approach is called multi-page applications (MPA) where
each page the user sees is generated on the backend. That is, as the user navigates through the application, data is sent
to the server and the server generates a new page for the user to interact with. The pages are almost always implemented in
HTML and presented in a web browser running on the user's computer or mobile device. 

The more modern approach is called single-page applications (SPA). It's not that there is a single page in the application, but
that the backend transfers at most one page, actually an entire application, to the front-end to be presented to the user. The
application running in the browser generates all of the pages that the user sees. The application requests data from and 
transfers data to the backend through an application program interface (API).

