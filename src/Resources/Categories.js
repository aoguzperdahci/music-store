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
    new Category("guitars", [electricGuitars, acousticGuitars]),
    new Category("wind instruments", [clarinets, saxophones])
];

export default Categories;