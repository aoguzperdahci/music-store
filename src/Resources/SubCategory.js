import electricGuitarImage from "./images/electicGuitar.png";
import acousticGuitarImage from "./images/acousticGuitar.jpg";
import clarinetImage from "./images/clarinet.jpg";
import saxaphoneImage from "./images/saxophone.jpg";
import classicalPianoImage from "./images/classicalPiano.jpg";
import wallPianoImage from "./images/wallPiano.jpeg";
import digitalPianoImage from "./images/digitalPiano.jpg";
import violinImage from "./images/violin.jpg";
import celloImage from "./images/cello.jpg";
import ukuleleImage from "./images/ukulele.jpg";
import acousticDrumImage from "./images/acousticDrum.png";
import electronicDrumImage from "./images/electronicDrum.png";

class SubCatogory {
    constructor(name, image, popular){
        this.name = name;
        this.image = image;
        this.popular = popular
    }
}

export const electricGuitars = new SubCatogory("electric guitars", electricGuitarImage, true);
export const acousticGuitars = new SubCatogory("acoustic guitars", acousticGuitarImage);

export const clarinets = new SubCatogory("clarinets", clarinetImage);
export const saxophones = new SubCatogory("saxophones", saxaphoneImage);

export const classicalPiano = new SubCatogory("classical Piano", classicalPianoImage);
export const wallPiano = new SubCatogory("wall Piano", wallPianoImage,true);
export const digitalPiano = new SubCatogory("digital Piano",digitalPianoImage);

export const violin = new SubCatogory("violin",violinImage);
export const cello = new SubCatogory("cello",celloImage);
export const ukulele = new SubCatogory("ukulele",ukuleleImage);

export const electronicDrums = new SubCatogory("electronic drums", electronicDrumImage, true);
export const acousticDrums = new SubCatogory("acoustic drums", acousticDrumImage);

