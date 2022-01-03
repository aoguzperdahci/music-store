import Categories from "./Categories";
import jacksonJS11Image from "./images/JacksonJS11Dinky2-Point.png"


class Product{
    constructor(id, name, mainCategoryNo, subCategoryNo, price, description, images){
        this.id = id;
        this.name = name;
        this.mainCategory = Categories[mainCategoryNo].name;
        this.subCategory = Categories[mainCategoryNo].subCategories[subCategoryNo].name;
        this.price = price;
        this.description = description;
        this.images = images;
    }
}

const Products = [
    new Product(0, "Jackson JS11 Dinky 2-Point", 0, 0, 1200, ["Bolt-on neck","Body: Basswood","Maple neck with modern C-shape","Maple fretboard","Fretboard radius: 350 mm","Dot-inlays","22 Frets","Scale: 648 mm","Nut width: 42 mm","Dual action truss rod","2x TE-style single coil pickups","Electronics: 1 Volume knob, 1 Tone knob, 3-way switch","Chrome hardware","Die-cast machine heads","09-042 Strings","Finish: Blue metallic high gloss"], [jacksonJS11Image, jacksonJS11Image, jacksonJS11Image]),
];


export default Products;