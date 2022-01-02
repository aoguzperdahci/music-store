import Categories from "./Categories";
import jacksonJS11Image from "./images/JacksonJS11Dinky2-Point.png"


class Product{
    constructor(name, mainCategoryNo, subCategoryNo, price, description, images){
        this.name = name;
        this.mainCategory = Categories[mainCategoryNo].name;
        this.subCategory = Categories[mainCategoryNo].subCategories[subCategoryNo].name;
        this.price = price;
        this.description = description;
        this.images = images;
    }
}

const Products = [
    new Product("Jackson JS11 Dinky 2-Point", 0, 0, 1200, "Electric", ),
];


export default Products;