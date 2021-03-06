import { electricGuitars,
    acousticGuitars,
    clarinets,
    saxophones,
    classicalPiano,
    wallPiano,
    digitalPiano,
    violin,
    cello,
    ukulele,
    electronicDrums,
    acousticDrums
 } from "./SubCategory";


 class Category {
    constructor(name, subCategories){
        this.name = name;
        this.subCategories = subCategories;
    }
}

const Categories = [
    new Category("guitars", [electricGuitars, acousticGuitars]),
    new Category("wind instruments", [clarinets, saxophones]),
    new Category("piano",[classicalPiano, wallPiano, digitalPiano]),
    new Category("stringed instruments",[violin, cello, ukulele ]),
    new Category("drums",[electronicDrums, acousticDrums])
];

export default Categories;