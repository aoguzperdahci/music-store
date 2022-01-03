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

export const electricGuitars = new SubCatogory("electric guitars", electricGuitarImage);
export const acousticGuitars = new SubCatogory("acoustic guitars", acousticGuitarImage);

export const clarinets = new SubCatogory("clarinets", clarinetImage);
export const saxophones = new SubCatogory("saxophones", saxaphoneImage);



