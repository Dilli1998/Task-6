// 1)

//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// class movie{
//     constructor(title,studio,rating){
//         this.title=title
//         this.studio=studio
//         this.rating=rating
//     }
// }

// let movies=new movie("shutter island","Phoenix Pictures","PG-18")
// console.log(movies)

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// class movie{
//     constructor(title,studio,rating){
//         this.title=title
//         this.studio=studio
//         if(rating===" ")
//         rating="PG";
//         this.rating=rating
//         return(rating)
//     }
// }

// let movies=new movie("spider-man","Columbia Pictures"," ")
// console.log(movies)

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// class Movies{
//    constructor(Movies){
//         this.movies=Movies
//    }
//         getPG() {
//             const filteredMovies = [];
//             this.movies.forEach(mov => {
//                 if(mov[1]==="PG")
//                     filteredMovies.push(mov[0])
//             })
//             return filteredMovies
//         }
//    }


// let movObj=new Movies([["constantine","PG"],["spider-man","PG"]]);
// console.log(movObj.getPG())



// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

// class Movie{
//     constructor(title,studio){
//         this.title=title
//         this.studio=studio
//     }
//     addRating(rating){
//         if(rating===" ")
//         rating="PG";
//         this.rating=rating
//         return(rating)
//     }
// }

// let Movies=new Movie("Casino Royale","Eon Productions")
// Movies.addRating(" ")
// console.log(Movies)



//3

// Write a “person” class to hold all the details

// class person{
//     constructor(name,age,address,mobile,dob){
//         this.name=name
//         this.age=age
//         this.address=address
//         this.mobile=mobile
//         this.dob=dob
// }
// }

// let Person = new person("Dilli",24,"11/5 Kanchipuram munu swamy street",8807478835,"21-08-1998")
// console.log(Person)

//4

// write a class to calculate the uber price.

// class Uber{
//     constructor(costPerKilometer,distance)
//     {
//         this.kilometerCost=costPerKilometer
//         this.distance=distance;
//     }
//         getPrice(){
//             const price=this.kilometerCost*this.distance
//             return price
//         }
// }

// let uberPrice = new Uber(45,27)
// console.log("price="+ uberPrice.getPrice()+"Rs") 


