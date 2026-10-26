import db from "./database.js";

const products = [
  {
    id: "1",
    image: "/assets/images/women-jackets-and-coats1.webp",
    name: "Womens Row Short Puffer Coat Black",
    brand: "French Connection",
    price: 2999,
    description:
      "French Connection hooded puffer coat, 100% polyester, Grown-on lined hood, High neck collar, Full zip fastening, Two press-stud pockets, Ribbed inner cuffs, Straight hem",
  },
  {
    id: "2",
    image: "/assets/images/women-jackets-and-coats2.webp",
    name: "Womens Lenka 2 Padded Hooded Jacket Black/Black",
    brand: "Trespass",
    price: 2999,
    description:
      "Trespass zip through hooded padded jacket with Coldheat® insulation to help maintain body heat, Rubberised logo, 100% polyamide, Lined adjustable hood, Full zip fastening, Three zip pockets, Elasticated bound cuffs, Bungee toggle adjustable hem, Coldheat® insulation properties",
  },
  {
    id: "3",
    image: "/assets/images/women-trainers1.webp",
    name: "Womens Go Walk Joy Aurelia Trainers Charcoal/White",
    brand: "SKECHERS",
    price: 3499,
    description:
      "SKECHERS low profile lace up trainers with Air-Cooled Goga Mat™ and 5GEN® cushioning for added comfort, Textile upper and lining, Lace fastening,Air Cooled Goga Mat® insole for next generation cushioning and support, 5GEN® midsole technology provides anatomically correct arch support and shock absorption, Synthetic sole, Vegan",
  },
  {
    id: "4",
    image: "/assets/images/women-trainers2.webp",
    name: "Womens Skechers Summits Suited Trainers Grey/Turquoise",
    brand: "SKECHERS",
    price: 2999,
    description:
      "SKECHERS low profile lace up trainers. Find the versatile sporty style and comfort that fits your needs with the SKECHERS Summits - Suited shoe. Smooth action leather and mesh fabric upper in a lace up athletic training sneaker with stitching accents. Memory Foam insole, Coated leather and textile upper, Textile lining, Lace fastening, Mesh fabric panels at front, sides and heel for cooling effect, Memory foam cushioning, Reinforced front and side overlays for added stability, Shock absorbing flexible midsole, Flexible traction outsole.",
  },
  {
    id: "5",
    image: "/assets/images/women-trainers3.webp",
    name: "Womens Lightblaze Trainers Off White/Silver Metallic/Grey One",
    brand: "adidas",
    price: 4999,
    description:
      "adidas Womens Lightblaze Trainers fuse classic street-ready style with lightweight Lightstrike cushioning for all-day comfort. Featuring a breathable mesh upper with premium overlays, these trainers deliver a sleek, casual look perfect for everyday wear, Branding: Printed, Upper: Leather/Textile, Sole: Other, Rubber, Fastening: Laces, Benefits and Technology: Cushioned, lightweight",
  },
  {
    id: "6",
    image: "/assets/images/women-tracksuits-and-sets1.webp",
    name: "Womens Oversized Sweatshirt And Open Hem Joggers Washed Midnight Blue",
    brand: "Board Angels",
    price: 1999,
    description:
      "Board Angels oversized brushback fleece sweatshirt and joggers tracksuit, 60% cotton 40% polyester, Ribbed neck trim, Ribbed cuffs and hem, Straight hem, Elasticated waist with inner drawcord, Two slip pockets, Wide leg, Open trouser hem",
  },
  {
    id: "7",
    image: "/assets/images/women-tracksuits-and-sets2.webp",
    name: "Womens Varsity Open Hem Tracksuit Raspberry",
    brand: "Closure London",
    price: 3499,
    description:
      "Closure London brushback fleece sweatshirt and wide leg joggers tracksuit, Rubberised logo, 65% cotton 35% polyester, Ribbed neck, cuffs and hem, Straight hem, Elasticated waist with inner drawcord, Two slip pockets, Wide leg, Open trouser hem, Brushback fleece",
  },
  {
    id: "8",
    image: "/assets/images/women-jackets-and-coats3.webp",
    name: "Womens Audrey Waterproof Padded Hooded Coat Black",
    brand: "Trespass",
    price: 3999,
    description:
      "Trespass Waterproof Padded Hooded Long Coat with detachable faux fur trim featuring Coldheat insulation properties, Moulded badge branding, 100% polyester, Grown-on adjustable hood with detachable faux fur trim, Two way zip fastening, Two zip pockets, Inner elasticated cuffs, Elasticated cuffs, Waterproof up to 2000mm. Coldheat; insulation properties. Windproof, Products with the TP50 rating provide a basic level of waterproofing and breathability to ensure you stay warm dry and comfortable when you are outdoors",
  },
  {
    id: "9",
    image: "/assets/images/women-jeans1.webp",
    name: "Womens Ribcage Straight Leg Ankle Jeans Dial Up The Music",
    brand: "Levi's",
    price: 4999,
    description:
      "Levi's super high rise slim fit straight leg jeans, Branded waist patch, buttons and rivets, 85% cotton 14% polyester 1% elastane, High rise, Button fly. Classic five pocket design, Belt loops, Slim fit, Machine wash at 30C, The unique appearance of this garment is intended. It may change as a result of washing and wear",
  },
  {
    id: "10",
    image: "/assets/images/women-jeans2.webp",
    name: "Womens Mom Jeans Denim Light",
    brand: "Tommy Jeans",
    price: 3499,
    description:
      "Tommy Jeans tapered leg mom jeans, Fully branded, 81% cotton 18% lyocell 1% elastane, Zip fly with button fastening, Belt loops, Classic five pocket design, Tapered leg",
  },
  {
    id: "11",
    image: "/assets/images/mens-jackets-and-coats1.webp",
    name: "Mens Waterproof Padded Parka Black",
    brand: "Trespass",
    price: 3999,
    description:
      "Trespass waterproof and windproof zip through hooded parka made with Coldheat® insulation to help maintain body heat, Rubberised logo, 100% polyester, Zip off bungee toggle adjustable hood, Detachable faux fur trim, Two way zip fastening with press-stud storm flap, Four press-stud pockets, Velcro cuffs, Bungee toggle adjustable hem, Coldheat® insulation properties",
  },
  {
    id: "12",
    image: "/assets/images/mens-jackets-and-coats2.webp",
    name: "Mens Parka Zip Jacket Black",
    brand: "French Connection",
    price: 3999,
    description:
      "French Connection puffer jacket, 100% polyester lining and padding, Branded zip pulls, Lined hood, Full front zip, Two zipped front pockets, Two press-stud pockets",
  },
  {
    id: "13",
    image: "/assets/images/mens-jackets-and-coats3.webp",
    name: "Mens Dna Collar Puffer Coat Ecru",
    brand: "Tommy Hilfiger",
    price: 9999,
    description:
      "Tommy Hilfiger zip through puffer coat, Printed branding, 100% polyester, Padded collar, Full zip fastening with press-stud storm flap, Two Velcro pockets, Elasticated cuffs and hem, Straight hem",
  },
  {
    id: "14",
    image: "/assets/images/mens-tracksuits-and-sets1.webp",
    name: "Mens Closure Signature Icon Tracksuit Navy",
    brand: "Closure London",
    price: 2999,
    description:
      "Closure London overhead hoodie and joggers two piece tracksuit, Printed branding, 65% cotton 35% polyester, Lined hood, Pouch pocket, Ribbed cuffs and hem, Straight hem, Elasticated waist, Two front slip pockets, Open trouser hem",
  },
  {
    id: "15",
    image: "/assets/images/mens-tracksuits-and-sets2.webp",
    name: "Mens Hemmi Crew Sweatshirt And Open Hem Joggers Tracksuit Black",
    brand: "NICCE",
    price: 2499,
    description:
      "NICCE brushback fleece sweatshirt and joggers tracksuit, Rubberised logo, 60% cotton 40% polyester, Ribbed neck cuffs and hem, Straight hem, Bottoms: Elasticated drawcord waist two slip pockets, One rear pocket, Open trouser hem",
  },
  {
    id: "16",
    image: "/assets/images/mens-boots1.webp",
    name: "Mens Terrex Snowpitch Cold.RDY Hiking Boots Core Black/Core Black/Scarlet",
    brand: "adidas",
    price: 6999,
    description:
      "adidas lace up hiking boots. Getting outside rewards in all seasons. Insulated and weather resistant these adidas Terrex hiking boots extend your range in cold weather. Exploring frozen trails and snowy streets is easy with warm dry feet, Leather and textile upper, Textile lining, Lace fastening, Lightly padded ankle and tongue, Lightly cushioned footbed, Reinforced heel, Grippy Traxion outsole, Insulating moisture-absorbent COLD.RDY",
  },
  {
    id: "17",
    image: "/assets/images/mens-boots2.webp",
    name: "Mens Norway Boots Charcoal Grey",
    brand: "Original Penguin",
    price: 3299,
    description:
      "Original Penguin mid profile lace up boots, Branding to the tongue and side, Synthetic upper, Textile and synthetic lining, Lace fastening, Metal lace eyelets, Lightly cushioned footbed, Rubber sole",
  },
  {
    id: "18",
    image: "/assets/images/mens-jumpers-and-cardigans1.webp",
    name: "Mens 1/4 Zip Neck Fine Cotton Jumper Navy",
    brand: "Crew Clothing",
    price: 2999,
    description:
      "Crew Clothing 1/4 zip neck knitted jumper, Embroidered branding, 100% cotton, 1/4 zip fastening, Ribbed cuffs and hem, Straight hem",
  },
  {
    id: "19",
    image: "/assets/images/mens-jumpers-and-cardigans2.webp",
    name: "Mens Brayco Knit Jumper Black",
    brand: "Bench",
    price: 1499,
    description:
      "Bench crew neck jumper, Metal badge branding, ​52% viscose 29% polyester 19% polyamide, Ribbed neck cuffs and hem, Straight hem",
  },
  {
    id: "20",
    image: "/assets/images/mens-tshirts-and-vests1.webp",
    name: "Mens Grosics Rugby Shirt Cream/Navy",
    brand: "Brave Soul",
    price: 1499,
    description:
      "Brave Soul loopback long sleeve rugby shirt, Embroidered branding, 80% cotton 20% polyester, Plain collar, One button placket with two concealed buttons, Ribbed cuffs and hem, Straight split hem, Loopback",
  },
  {
    id: "21",
    image: "/assets/images/mens-tshirts-and-vests2.webp",
    name: "Mens Three Pack T-Shirts Grey/White/Navy",
    brand: "Hugo Boss",
    price: 3499,
    description:
      "BOSS three pack short sleeve t-shirts, Printed branding, 100% cotton, Crew neck, Straight hem",
  },
  {
    id: "22",
    image: "/assets/images/mens-accessories1.jpeg",
    name: "Mens Rectangular Sunglasses Blue/Red",
    brand: "Tommy Hilfiger",
    price: 4499,
    description:
      "Tommy Hilfiger sunglasses with sun category 3 protection, Printed branding, Injection moulded frame, Plastic lens, Sun category 3 protection, Hard case",
  },
  {
    id: "23",
    image: "/assets/images/mens-accessories2.jpeg",
    name: "Mens Eau De Toilette Multi",
    brand: "NICCE",
    price: 699,
    description:
      "NICCE Original 100ml Eau De Toilette, This item is subject to safety regulations and must be returned in its original packaging. Delivery to certain postcodes is restricted",
  },
  {
    id: "24",
    image: "/assets/images/mens-caps-and-hats1.webp",
    name: "Mens 1963 Baseball Cap Forest Green/Fog/Navy",
    brand: "Ben Sherman",
    price: 999,
    description:
      "Ben Sherman baseball cap, Woven tab branding, 100% cotton, Hard curved peak, Full crown with six panels, Eyelet venting, Adjustable back strap",
  },
];

const insertProduct = db.prepare(
  `INSERT OR IGNORE INTO products (id, image, name, brand, price, description) VALUES (@id, @image, @name, @brand, @price, @description)`,
);

db.exec("BEGIN");

try {
  for (const product of products) {
    insertProduct.run(product);
  }

  db.exec("COMMIT");
} catch (error) {
  db.exec("ROLLBACK");
  throw error;
} finally {
  db.close();
}
