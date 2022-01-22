class Media {
    constructor(title, type) {
        this._title = title;
        this._type = type;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get type() {
        return this._type;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let rating = this._ratings.reduce((total, rating) => total + rating) / this._ratings.length;
        return rating.toFixed(2);
    }
    addRating(value) {
        if (value >= 1 && value <= 10) {
            this._ratings.push(value);
        }

    }
}

let mediaOne = new Media("test media", "deneme");
//mediaOne.isCheckedOut(true);
mediaOne.addRating(5);
mediaOne.addRating(3.6);


//console.log(mediaOne.getAverageRating());
mediaOne.toggleCheckOutStatus();
//console.log(mediaOne);

// Create Book class

class Book extends Media {
    constructor(title, type, author, pages) {
        super(title, type);
        this._author = author;
        this._page = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

}

// Create Movie class

class Movie extends Media {
    constructor(title, type, director, runTime) {
        super(title, type);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }

}

// Create CD class

class CD extends Media {
    constructor(title, type, artist, duration) {
        super(title, type);
        this._artist = artist;
        this._songs = [];
        this._duration = duration;
    }

    get artist() {
        return this.artist;
    }

    get songs() {
        return this.songs;
    }
    addSongs(song) {
        this._songs.push(song);
    }

    shuffle() {
        return this._songs.sort(() => Math.random() - 0.5);
    }


}

const cd = new CD("abc", "xxx", "Ali", 4);

//console.log(cd.shuffle());
//console.log(cd);

class Catalog {
    constructor() {
        this._myCatalog = [];
    }

    get myCatalog() {
        return this._myCatalog;
    }

    set myCatalog(newMedia) {
        this._myCatalog.push(newMedia);
    }

    addMedia(media) {
        this._myCatalog.push(media);
    }
}

const historyOfViolence = new Book(
    "History Of Violence",
    "Crime",
    "Eduoard Louise",
    224);

historyOfViolence.toggleCheckOutStatus();
//console.log(historyOfViolence.isCheckedOut);
historyOfViolence.isCheckedOut = false;
//console.log(historyOfViolence.isCheckedOut);

historyOfViolence._isCheckedOut = false;
//console.log(historyOfViolence._isCheckedOut);

// historyOfViolence.addRating(4);
// historyOfViolence.addRating(5);
// historyOfViolence.addRating(5);

// console.log(historyOfViolence);
// console.log(historyOfViolence.getAverageRating());


const bloodSpot = new Movie('Blood Sport', 'Jean-Claude Van Damme', 122);

const bondJovi = new CD("MusicJon", "Rock", "Jon Bon Jovi", 11);

bondJovi.addSongs("Rocn Roll");
bondJovi.addSongs("Break");
bondJovi.addSongs("RunTime");

//console.log(bondJovi);

const catologLibrary = new Catalog();
catologLibrary.addMedia(historyOfViolence);

//console.log(catologLibrary);
catologLibrary.myCatalog = bondJovi;
console.log(catologLibrary);

// CHALLENGE PART
let submitBtn = document.getElementById("submit_btn");
let mediaSelect = document.getElementById("mediaTypeSelect");
let titleMedia = document.getElementById("titleOfMedia");
let typeMedia = document.getElementById("typeOfMedia");
let creatorMedia = document.getElementById("creatorOfMedia");
let durationMedia = document.getElementById("durationOfMedia");
let ratings = document.getElementsByClassName("ratingsOfMedia");

let catologLib = document.getElementById("catalogLibrary");

submitBtn.onclick = () => {
    let constructor = mediaSelect.value === "Book"
        ? Book
        : mediaSelect.value === "Movie"
            ? Movie
            : mediaSelect.value === "CD"
                ? CD
                : "";

    let newMedia = new constructor(titleMedia.value, typeMedia.value, creatorMedia.value, durationMedia.value);

    newMedia.addRating(ratings[0].value);
    newMedia.addRating(ratings[1].value);
    newMedia.addRating(ratings[2].value);
    newMedia.addRating(ratings[3].value);

    catologLibrary.addMedia(newMedia);
    console.log(catologLibrary);
    let result = [];

    catologLibrary.myCatalog.forEach(item => result.push(item.title));
catologLib.innerHTML=result.join("<>")

}



