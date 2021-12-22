const products = [
  {
    id: 30,
    name: "Remera de mujer River Plate",
    stock: 50,
    cost: 140,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 1500,
    image: [
      "http://http2.mlstatic.com/D_769934-MLA43697186445_102020-O.jpg"
     
    ],
    
    
    categoryId: 9,
   
    category: {
      name: "MUJERES",
      id: 9
    },
    brand: {
      id: 95,
      name: "Eco de los Andes"
    },
    
  },
  {
    id: 29,
    name: "Camiseta Estudiantes de La Plata Hombres",
    stock: 100,
    cost: 140,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 1500,
    image: [
      "http://http2.mlstatic.com/D_619397-MLA46981400029_082021-O.jpg"
    ],
    
    brandId: 95,
    
    category: {
      name: "HOMBRES",
      id: 9
    },
    brand: {
      id: 95,
      name: "Eco de los Andes"
    },
   
  },
  {
    id: 76,
    name: "Racing Club Avellaneda Hombre",
    stock: 92,
    cost: 575,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 750,
    image: [
      "http://http2.mlstatic.com/D_718393-MLA31130419870_062019-O.jpg"
    ],
    
    categoryId: 1,
    brandId: 10,
    
    category: {
      name: " HOMBRES",
      id: 1
    },
    brand: {
      id: 10,
      name: "Alambrado"
    },
   
  },
  {
    id: 170,
    name: "Boca Juniors Hombre",
    stock: 100,
    cost: 575,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 750,
    image: [
      "http://http2.mlstatic.com/D_921701-MLA42188444027_062020-O.jpg"
    ],
    
    categoryId: 1,
    brandId: 10,
   
    category: {
      name: "HOMBRES",
      id: 1
    },
    brand: {
      id: 10,
      name: "Alambrado"
    },
    
  },
  {
    id: 233,
    name: "Club Gimnasia Y Esgrima de la Plata Hombres",
    stock: 100,
    cost: 765,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 750,
    image: [
      "http://http2.mlstatic.com/D_928578-MLA46995644132_082021-O.jpg"
    ],
    
    categoryId: 1,
    brandId: 10,
   
    category: {
      name: "HOMBRES",
      id: 1
    },
    brand: {
      id: 10,
      name: "Alambrado"
    },
    
  },
  {
    id: 139,
    name: "Club San Lorenzo Hombre",
    stock: 100,
    cost: 490,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 750,
    image: [
      "http://http2.mlstatic.com/D_657964-MLA48009013077_102021-O.jpg"
    ],
    
    categoryId: 1,
    brandId: 16,
    
    category: {
      name: "HOMBRES",
      id: 1
    },
    brand: {
      id: 16,
      name: "Altos del Plata"
    },
   
  },
  {
    id: 68,
    name: "River Plate Hombre",
    stock: 89,
    cost: 490,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 750,
    image: [
      "http://http2.mlstatic.com/D_653466-MLA43697189869_102020-O.jpg"
    ],
    
    categoryId: 1,
    brandId: 16,
    
    category: {
      name: "HOMBRES",
      id: 1
    },
    brand: {
      id: 16,
      name: "Altos del Plata"
    },
    
  },
  {
    id: 222,
    name: "Club Atletico Nueva Chicago Hombre",
    stock: 100,
    cost: 300,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 375,
    image: [
      "http://http2.mlstatic.com/D_727149-MLA48028266826_102021-O.jpg"
    ],
    
    categoryId: 1,
    brandId: 16,
   
    category: {
      name: "HOMBRES",
      id: 1
    },
    brand: {
      id: 16,
      name: "Altos del Plata"
    },
    
  },
  {
    id: 135,
    name: "Seleccion Nacional Argentina Hombre",
    stock: 100,
    cost: 490,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 750,
    image: [
      "http://http2.mlstatic.com/D_836338-MLA41873746734_052020-O.jpg"
    ],
    
    categoryId: 1,
    brandId: 16,
    
    category: {
      name: "HOMBRES",
      id: 1
    },
    brand: {
      id: 16,
      name: "Altos del Plata"
    },
   
  },
  {
    id: 31,
    name: "Seleccion Argentina Niño",
    stock: 100,
    cost: 3150,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
    capacity: 700,
    image: [
      "http://http2.mlstatic.com/D_835532-MLA48506715862_122021-O.jpg"
    ],
    
    categoryId: 5,
    brandId: 17,
   
    category: {
      name: "NIÑOS",
      id: 5
    },
    brand: {
      id: 17,
      name: "Amareto Disaronno"
    },
    
  }
];

module.exports = {
  products,
}