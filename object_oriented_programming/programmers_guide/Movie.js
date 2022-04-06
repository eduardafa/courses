//  to define the attributes in pure js, the definition must be done inside the constructor
class Movie {
    // the constructor is a function that is responsible for generate an instance (object) in the memory
    constructor() {
        // attributes
        this.title = '';
        this.year = 0;
        this.genre = '';
        this.director = '';
        this.actors = [];
        this.duration = 0;
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
}

// 'new' makes a copy of the class in the memory (in this case, the class is Movie)
// the copy is stored in the variable avengers and all the variables are objects
let avengers = new Movie();
// console.log('The title of the movie is ' + avengers.title);
avengers.title = 'The avengers 2';
avengers.year = '2014';
avengers.genre = 'action';

console.log(avengers);

let batman = new Movie();
batman.title = 'The dark knight';
batman.year = '2010';
batman.genre = 'action';
console.log(batman);

// avengers.Play();

// let hulk = new Movie();
// hulk.Pause();

// let starWars = new Movie();
// starWars.Pause();
// starWars.Forward();
// starWars.Play();
