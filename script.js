const movies = [
    "2001: A Space Odyssey",
    "8 Mile",
    "A Beautiful Mind",
    "Alien",
    "Armageddon",
    "Amelie",
    "Apocalypse Now (Redux version)",
    "As Good as It Gets",
    "Avatar",
    "Back to the Future",
    "Big Hero 6",
    "Birdcage",
    "Birdman",
    "Boys Don’t Cry",
    "Braveheart",
    "Breakfast at Tiffany’s",
    "Casablanca",
    "Castaway",
    "Citizen Kane",
    "Django Unchained",
    "Dogma",
    "Donnie Darko",
    "Easy A",
    "Edward Scissorhands",
    "Eternal Sunshine of the Spotless Mind",
    "ET",
    "Erin Brokovich",
    "Fargo",
    "Fight Club",
    "Forrest Gump",
    "Four Weddings and a Funeral",
    "Ghost",
    "Ghostbusters",
    "Gladiator",
    "Good Will Hunting",
    "Groundhog Day",
    "Hacksaw Ridge",
    "Inglourious Basterds",
    "Interstellar",
    "Into The Wild",
    "Jaws",
    "Jumanji",
    "Jurassic Park",
    "Labyrinth",
    "Lost in Translation",
    "Mamma Mia!",
    "Memento",
    "Monty Python and the Holy Grail",
    "No Country for Old Men",
    "One Flew Over the Cuckoo’s Nest",
    "Pan's Labyrinth",
    "Psycho",
    "Pulp Fiction",
    "Requiem for a Dream",
    "Saving Private Ryan",
    "Snatch",
    "Spirited Away",
    "Stand By Me",
    "Terminator",
    "The Breakfast Club",
    "The Butterfly Effect",
    "The Life of Brian",
    "The Godfather",
    "The Grand Budapest Hotel",
    "The Green Mile",
    "The Life of Pi",
    "The King's Speech",
    "The Matrix",
    "The Princess Bride",
    "The Revenant",
    "The Shape of Water",
    "The Shining",
    "The Terminal",
    "The Truman Show",
    "The Martian",
    "The Wolf of Wall Street",
    "Trainspotting",
    "WALL-E",
    "When Harry Met Sally"
];

let remainingVetoes = 10;
let vetoedMovies = [];
let watchedMovies = [];

function pickRandomMovie() {
    const availableMovies = movies.filter(movie => !vetoedMovies.includes(movie));

    if (availableMovies.length === 0) {
        return "No movies left to pick!";
    }

    const randomIndex = Math.floor(Math.random() * availableMovies.length);
    const selectedMovie = availableMovies[randomIndex];

    return selectedMovie;
}

function watchThisMovie() {
    const randomMovie = resultElement.textContent.replace("You should watch: ", "");

    if (randomMovie === "No movies left to pick!") {
        return;
    }

    // Remove the movie from the original list
    movies.splice(movies.indexOf(randomMovie), 1);

    // Add the movie to the watched list
    watchedMovies.push(randomMovie);

    // Update the watched movies list in the HTML
    updateWatchedMoviesList();

    resultElement.textContent = "You should watch: " + pickRandomMovie();
}

function vetoMovie() {
    const randomMovie = pickRandomMovie();

    if (randomMovie === "No movies left to pick!") {
        return;
    }

    // Remove the movie from the original list
    movies.splice(movies.indexOf(randomMovie), 1);

    // Reduce the number of vetoes left
    remainingVetoes--;

    // Update the veto count and watched movies list in the HTML
    updateVetoCount();
    updateWatchedMoviesList();

    resultElement.textContent = "You should watch: " + pickRandomMovie();
}

function updateVetoCount() {
    const vetoCountElement = document.getElementById("remainingVetoes");
    vetoCountElement.textContent = remainingVetoes;
}

function updateWatchedMoviesList() {
    const watchedMoviesList = document.getElementById("watchedMoviesList");
    watchedMoviesList.value = watchedMovies.join('\n');
}

const pickButton = document.getElementById("pickButton");
const watchThisButton = document.getElementById("watchThisButton");
const vetoButton = document.getElementById("vetoButton");
const resultElement = document.getElementById("result");
const resetVetoesButton = document.getElementById("resetVetoesButton");

pickButton.addEventListener("click", function () {
    resultElement.textContent = "You should watch: " + pickRandomMovie();
});

watchThisButton.addEventListener("click", function () {
    watchThisMovie();
});

vetoButton.addEventListener("click", function () {
    vetoMovie();
});

resetVetoesButton.addEventListener("click", function () {
    remainingVetoes = 10;
    vetoedMovies = [];
    updateVetoCount();
});

// Initialize the watched movies list
updateWatchedMoviesList();