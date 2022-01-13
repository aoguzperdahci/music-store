import Categories from "./Categories";
import jacksonJS11Image from "./images/JacksonJS11Dinky2-Point.png"
import ibanezGRG170Image from "./images/IBANEZ GRG170DX-BKN.png"
import harleyBentonCLDImage from "./images/HarleyBentonCustomLineCLD-41SEWN.png"
import harleyBentonCLD_1Image from "./images/HarleyBentonCustomLineCLD-41SEWN_1.png"
import TakamineEF341SCImage from "./images/Takamine EF341SC.png"
import TakamineEF341SC_1Image from "./images/Takamine EF341SC_1.png"
import TakamineEF341SC_2Image from "./images/Takamine EF341SC_2.png"
import TakamineEF341SC_3Image from "./images/Takamine EF341SC_3.png"
import FenderCDSBV3Image from "./images/Fender CD-60 SB V3.png"
import FenderCDSBV3_1Image from "./images/Fender CD-60 SB V3_1.png"
import FenderCDSBV3_2Image from "./images/Fender CD-60 SB V3_2.png"
import KawaiK300WHPSLPianoImage from "./images/Kawai K-300 WHP SL Piano.png"
import YamahaP121MPEPianoImage from "./images/Yamaha P 121 M PE Piano.png"
import Seiler116KonsoleChromImage from "./images/Seiler 116 Konsole Chrom.png"

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
    new Product(1, "Ibanez GRG170DX-BKN",0,0, 5380,["Bolt-on neck","Body: Lime Tree","Maple handle with modern C-shape","Rosewood fretboard","Fretboard radius: 320 mm","Dot-inlays","25 Frets","Scale: 650 mm", "Nut width: 45 mm","Dual action truss rod","2x TE-style single coil pickups","Electronics: 1 Volume knob, 1 Tone knob, 5-way switch","Chrome hardware","Die-cast machine heads","09-042 Strings","Finish: Black metallic high gloss"],[ibanezGRG170Image, ibanezGRG170Image, ibanezGRG170Image]),
    new Product(2, "Harley Benton Custom Line CLD-41SE WN",0,0, 414099, "Dreadnought design","Dovetail construction","Solid sitka spruce top","Scalloped X-bracing","Walnut body","Mahogany neck","Pau Ferro fretboard","Abalone Hexagon fretboard inlays","Abalone body binding","White fretboard and headstock binding","Modified Oval C neck profile","Scale: 643 mm","Nut width: 43 mm","Bone nut","20 Frets","Compensated saddle","Pau Ferro bridge","Gold-plated diecast DLX machine heads","Pickup system: Fishman Presys-II preamp system with built-in tuner","Strings: D'Addario XTAPB1253 Light (Article Nr 471307), .012 - .053","Colour: Natural matte",[harleyBentonCLDImage,harleyBentonCLD_1Image ]),
    new Product(3,"Takamine EF341SC", 0,0,152211,"Bruce Springsteen model","Body shape: Dreadnought with cutaway","Body and sides: Maple","Top: Solid cedar","Bridge and fingerboard: Rosewood (Dalbergia Latifolia)","Fretboard inlays: Mother of pearl snowflake dots","CT4B preamp with pickup and tuner","Ex-factory stringing: Daddario EXP16 .012 - .053 (Article Nr 147540)","Colour: High gloss black","Case included",[TakamineEF341SCImage, TakamineEF341SC_1Image, TakamineEF341SC_2Image, TakamineEF341SC_3Image]),
    new Product(4,"Fender CD-60 SB V3",0,0,190656,"Design: Dreadnought","Top: Laminated spruce","Bottom and sides: Laminated mahogany","Neck: Mahogany","Fretboard and bridge: Walnut","20 Frets","Scale: 643 mm","Nut width: 43 mm (1.69)","Colour: Sunburst","Strings: Fender 880L (Art.254209)",[FenderCDSBV3Image, FenderCDSBV3_1Image, FenderCDSBV3_2Image]),
    new Product(5,"Kawai K-300 WH/P SL Piano",0,0,374876,"Millennium III hammer mechanics with ABS carbon parts of unmatched sturdiness and robustness","Mahogany hammer core","Hammer heads with bottom felt","Extended keyboard","100 cm Sheet music rest","Slowly closing keyboard cover","88 Keys","3 Pedals","Dimensions (H x W x D): 122 x 149 x 61 cm","Weight: 227 kg","Finish: White, polished with chrome fittings","Delivery Germany-wide and first tuning service included",[KawaiK300WHPSLPianoImage]),
    new Product(6,"Yamaha P 121 M PE Piano",0,0,245044,"Designed in Europe to European preferences, the P121 boasts exquisite cabinetry, European spruce soundboard and back posts and the rich, expressive voice of a full-sized upright.","Dimensions: Width: 152 cm, Depth: 60 cm, Height: 121 cm","Weight: 215 kg","Colour: Black, polished","Piano bench, piano light and Germany-wide delivery included",[YamahaP121MPEPianoImage]),
    new Product(7,"Seiler 116 Konsole Chrom",0,0,529941,"From German production","Renner-action","Abel-hammer heads","3 Pedals","Height: 117 cm","Width: 146 cm","Depth: 56 cm","Knee height: 67 cm","Weight: 215 kg","Colour: Black Polished","Transport nationwide included in the price - will be intonated and tuned by our master piano builder before delivery","5 Years warranty",[Seiler116KonsoleChromImage])

];

export default Products;