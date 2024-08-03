class CinemaTicketSystem {
    constructor() {
        this.movies = {};
        this.users = {};
        this.tickets = {};
        this.movieCounter = 1;
        this.userCounter = 1;
        this.ticketCounter = 1;
    }

    addMovie(movieName) {
        let movieId = this.movieCounter++;
        this.movies[movieId] = movieName;
        return movieId;
    }

    showAllMovies() {
        return this.movies;
    }

    addUser(userName) {
        let userId = this.userCounter++;
        this.users[userId] = userName;
        return userId;
    }

    buyTicket(userId, movieId) {
        if (this.users[userId] && this.movies[movieId]) {
            let ticketId = this.ticketCounter++;
            this.tickets[ticketId] = { userId, movieId };
            return ticketId;
        } else {
            return null;
        }
    }

    cancelTicket(ticketId) {
        if (this.tickets[ticketId]) {
            delete this.tickets[ticketId];
            return true;
        } else {
            return false;
        }
    }
}

const cinemaSystem = new CinemaTicketSystem();

function addMovie() {
    let movieName = prompt("Enter movie name:");
    if (movieName) {
        let movieId = cinemaSystem.addMovie(movieName);
        alert(`Movie added with ID: ${movieId}`);
    }
}

function showAllMovies() {
    let movies = cinemaSystem.showAllMovies();
    let contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "<h2>Available Movies</h2>";
    if (Object.keys(movies).length === 0) {
        contentDiv.innerHTML += "<p>No movies available.</p>";
    } else {
        let movieList = "<ul>";
        for (let id in movies) {
            movieList += `<li>${id}. ${movies[id]}</li>`;
        }
        movieList += "</ul>";
        contentDiv.innerHTML += movieList;
    }
}

function addUser() {
    let userName = prompt("Enter user name:");
    if (userName) {
        let userId = cinemaSystem.addUser(userName);
        alert(`User added with ID: ${userId}`);
    }
}

function buyTicket() {
    let userId = prompt("Enter user ID:");
    let movieId = prompt("Enter movie ID:");
    userId = parseInt(userId);
    movieId = parseInt(movieId);
    if (!isNaN(userId) && !isNaN(movieId)) {
        let ticketId = cinemaSystem.buyTicket(userId, movieId);
        if (ticketId) {
            alert(`Ticket bought with ID: ${ticketId}`);
        } else {
            alert("Error: Invalid user ID or movie ID.");
        }
    } else {
        alert("Error: IDs must be numbers.");
    }
}

function cancelTicket() {
    let ticketId = prompt("Enter ticket ID:");
    ticketId = parseInt(ticketId);
    if (!isNaN(ticketId)) {
        if (cinemaSystem.cancelTicket(ticketId)) {
            alert("Ticket successfully canceled.");
        } else {
            alert("Error: Ticket not found.");
        }
    } else {
        alert("Error: ID must be a number.");
    }
}
