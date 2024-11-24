Prerequisites:
Install Node.js and npm on your machine.
Have a basic understanding of JavaScript, REST APIs, and web development.

Task 1: Generate an API Key
Visit https://www.themoviedb.org/settings/api.
Register or log in to your account.
Generate an API key for accessing the movie database.
Task 2: Initialize a Node.js Application
Install necessary packages: npm install express node-fetch
Task 3: Build the API
Create an index.js file in the project directory.

Write code to:

Set up a basic Express server.
Create a /movies route.
Fetch popular movies from the TMDB API.
Filter movies with a vote_average above 7.5 based on a query parameter (voteAvg).
Test the /movies endpoint locally using a browser or Postman.

Task 4: Create a Frontend
Create an index.html file in the project directory.

Add the following functionality:

Fetch data from the /movies endpoint.
Dynamically display movie cards with:
Movie title
Movie rating
Poster image
Style the page with basic CSS for a visually appealing layout.

Task 5: Integrate Frontend with Backend
Modify your server to serve the index.html file when the root (/) route is accessed.
Restart the server and test the complete functionality by visiting http://localhost:3000.
Expected Outcome
A web page that displays movie cards, filtered by the vote_average parameter.
Each card should show the movie's title, rating, and poster image.

