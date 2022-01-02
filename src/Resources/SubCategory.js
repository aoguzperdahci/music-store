import electricGuitarImage from "./images/electicGuitar.png";
import acousticGuitarImage from "./images/acousticGuitar.jpg";
import clarinetImage from "./images/clarinet.jpg";
import saxaphoneImage from "./images/saxophone.jpg";


class SubCatogory {
    constructor(name, image){
        this.name = name;
        this.image = image;
    }
}

export const electricGuitars = new SubCatogory("Electric Guitars", electricGuitarImage);
export const acousticGuitars = new SubCatogory("Acoustic Guitars", acousticGuitarImage);

export const clarinets = new SubCatogory("Clarinets", clarinetImage);
export const saxophones = new SubCatogory("Saxophones", saxaphoneImage);



