//  to define the attributes in pure js, the definition must be done inside the constructor
class Movie {
    // the constructor is a function that is responsible for generate an instance (object) in the memory
    constructor(title, year, genre, director, duration) {
        // attributes
        // 'this' is used just to define the variable that is also an attribute
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.director = director;
        this.duration = duration;
        this.actors = [];
    }

    // methods
    Play() {
        console.log('Playing...');
    }

    Pause() {
        console.log('Paused.');
    }

    Forward() {
        console.log('Forwarding...');
    }

    Close() {
        console.log('Closed.');
    }

    Registry(movie) {
        console.log(movie);
    }
}

// 'new' makes a copy of the class in the memory (in this case, the class is Movie)
// the copy is stored in the variable avengers and all the variables are objects
let avengers = new Movie(
    'The avengers 2',
    2014,
    'action',
    'Fulano Director',
    '2h'
);

let batman = new Movie(
    'The dark knight',
    2010,
    'action',
    'Fulano Director 2',
    '2h30'
);

avengers.Registry(avengers);
// console.log(batman);
