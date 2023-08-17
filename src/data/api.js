const products = [
  {
    id: 1,
    name: "Fulgor Nocturnus",
    description:
      "Tibaldi made, 945 black diamonds, 123 rubies, 18-carat gold nib",
    price: 8000000.0,
    icon: "/images/pen1.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: " Mystery Masterpiece",
    description:
      "Montblanc made, over 800 diamonds and three variations involving emeralds, sapphires, and rubies along its body",
    price: 730000.0,
    icon: "/images/pen2.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "1010 Diamond Edition",
    description:
      "Caran d’Ache made, diamonds in different cutting styles, 18 carat white gold",
    price: 1280000.0,
    icon: "/images/pen3.jpg",
    quantity: 1,
  },
  {
    id: 4,
    name: "Gothica",
    description:
      "Caran d’Ache made, approximately 900 diamonds, patterns of fleur-de-lis and rosettes, 72 emeralds, and 72 rubies",
    price: 487000.0,
    icon: "/images/pen4.jpg",
    quantity: 1,
  },
  {
    id: 5,
    name: "Boheme Royal",
    description:
      "Montblanc made, over 1,400 high-grade coloured diamonds, 18k white gold",
    price: 1500000.0,
    icon: "/images/pen5.jpg",
    quantity: 1,
  },
  {
    id: 6,
    name: "La Modernista Diamonds",
    description:
      "Caran d’Ache made, natural black stone found in the mountains of Switzerland",
    price: 265000.0,
    icon: "/images/pen6.jpg",
    quantity: 1,
  },
  {
    id: 7,
    name: "Jaali",
    description:
      "Jack Row made, rhodium-plated sterling silver inner barrel and a solid 18 carat yellow gold outer filigree, and is studded with approximately 1.8 carats of petrol-blue diamonds",
    price: 29000.0,
    icon: "/images/pen7.jpg",
    quantity: 1,
  },
  {
    id: 8,
    name: "Taj Mahal Limited Edition",
    description:
      "Montblanc made, encrusted with diamonds, sapphires and malachite that all sit on a champagne-tone gold",
    price: 2000000.0,
    icon: "/images/pen8.jpg",
    quantity: 1,
  },
  {
    id: 9,
    name: "Around the World in 80 Days Solitaire LeGrand ",
    description:
      "Montblanc made, silver and indigo blue ocean waves pattern, 18k rhodium and gold coated nib",
    price: 2065.0,
    icon: "/images/pen9.jpg",
    quantity: 1,
  },
  {
    id: 10,
    name: "Opera Gold",
    description: "Visconti made, red body with 18k yellow gold finish",
    price: 390.0,
    icon: "/images/pen10.jpg",
    quantity: 1,
  },
  {
    id: 11,
    name: "Meteorite",
    description:
      "La Queteur made, high quality black titanium-plated brass components featuring body and cap barrels encrusted with fragments of Campo del Cielo meteorite ",
    price: 1090.0,
    icon: "/images/pen11.jpg",
    quantity: 1,
  },
  {
    id: 12,
    name: "Ripple H.R.H",
    description:
      "Visconti made, 18-carat white gold, tiny diamonds and a luxurious 18-carat two tone gold nib",
    price: 57000.0,
    icon: "/images/pen12.jpg",
    quantity: 1,
  },
  {
    id: 13,
    name: " La Dona Menagerie",
    description:
      "Cartier made, inspired by a gold crocodile necklace from Cartier, who used a similar pattern to create a limited line of expensive pens",
    price: 4000.0,
    icon: "/images/pen13.jpg",
    quantity: 1,
  },
  {
    id: 14,
    name: "Custom Enju Wood",
    description: "Pilot made, precious japanese pagoda wood, 18-carat gold nib",
    price: 864.0,
    icon: "/images/pen14.jpg",
    quantity: 1,
  },
];

export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
