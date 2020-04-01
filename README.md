# UCD ECS 162 Assignment 1 2020

https://web.cs.ucdavis.edu/~amenta/s20/museumAssn.html

The Manetti Shrem museum is closed as part of the campus shut-down, but we can build a Web site that shows something from its current main exhibit, on the work of the artist Stephan Kaltenbach, so people can still get an idea of what is inside.

A Web server, in Node and Express, that servers a single static Web page

## Directory structure

On the front-end:

- `public/index.html` is the html 
- `public/client.js` is the javacript
- `public/style.css` is the css styles

On the back-end:

- the app starts at `server.js`
- `package.json` includes the modules the the app uses
- safely store app secrets in `.env` (nobody can see this but you and people you invite)