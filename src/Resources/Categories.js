import { electricGuitars,
    acousticGuitars,
    clarinets,
    saxophones,
 } from "./SubCategory";


 class Category {
    constructor(name, subCategories){
        this.name = name;
        this.subCategories = subCategories;
    }
}

const Categories = [
    new Category("Guitars", [electricGuitars, acousticGuitars]),
    new Category("Wind instruments", [clarinets, saxophones])
];

export default Categories;