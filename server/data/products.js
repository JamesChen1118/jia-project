const products = [
  {
    name: "productsItem1",
    category: "sashimi",
    price: 580,
    image:
      "https://images.unsplash.com/photo-1730325558234-1e5089cd96f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "精選新鮮生魚片拼盤，搭配山葵與醬油",
  },
  {
    name: "productsItem2",
    category: "sashimi",
    price: 320,
    image:
      "https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "挪威空運鮭魚，入口即化的細緻口感",
  },
  {
    name: "productsItem3",
    category: "sashimi",
    price: 300,
    image:
      "https://images.pexels.com/photos/18916409/pexels-photo-18916409/free-photo-of-raw-decorated-seafood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮鯛魚片，清甜鮮美",
  },
  {
    name: "productsItem4",
    category: "sashimi",
    price: 280,
    image:
      "https://images.pexels.com/photos/8954172/pexels-photo-8954172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "油脂豐富的竹筴魚，入口即化",
  },
  {
    name: "productsItem5",
    category: "sashimi",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1676319892440-9b7dd05dfdeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "北海道空運干貝，鮮甜可口",
  },
  {
    name: "productsItem6",
    category: "sushi",
    price: 240,
    image:
      "https://images.pexels.com/photos/28559528/pexels-photo-28559528/free-photo-of-close-up-of-sushi-nigiri-on-wooden-platter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮鮪魚搭配道地醋飯",
  },
  {
    name: "productsItem7",
    category: "sushi",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1473269712320-f24ce5aa6e5d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "新鮮雞蛋與醋飯的完美結合",
  },
  {
    name: "productsItem8",
    category: "sushi",
    price: 200,
    image:
      "https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "挪威鮭魚與醋飯的絕妙搭配",
  },
  {
    name: "productsItem9",
    category: "sushi",
    price: 180,
    image:
      "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "清爽黃瓜與醋飯的絕妙組合",
  },
  {
    name: "productsItem10",
    category: "sushi",
    price: 160,
    image:
      "https://images.pexels.com/photos/28559490/pexels-photo-28559490/free-photo-of-delicious-shrimp-nigiri-served-on-leaf-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮蝦與醋飯的完美結合",
  },
  {
    name: "productsItem11",
    category: "seafood",
    price: 140,
    image:
      "https://images.pexels.com/photos/10432859/pexels-photo-10432859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "新鮮蛤蜊與蒜香醬油的絕妙搭配",
  },
  {
    name: "productsItem12",
    category: "seafood",
    price: 120,
    image:
      "https://images.pexels.com/photos/19193029/pexels-photo-19193029/free-photo-of-woman-preparing-seafood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "北海道空運海膽，鮮美可口",
  },
  {
    name: "productsItem13",
    category: "seafood",
    price: 100,
    image:
      "https://images.pexels.com/photos/4846502/pexels-photo-4846502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮牡蠣與檸檬汁的絕妙搭配",
  },
  {
    name: "productsItem14",
    category: "seafood",
    price: 80,
    image:
      "https://images.pexels.com/photos/29143177/pexels-photo-29143177/free-photo-of-fresh-oysters-on-ice-with-sushi-selection.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮生蠔與檸檬汁的絕妙搭配",
  },
  {
    name: "productsItem15",
    category: "seafood",
    price: 60,
    image:
      "https://images.pexels.com/photos/5038753/pexels-photo-5038753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "北海道空運干貝，鮮甜可口",
  },
  {
    name: "productsItem16",
    category: "tempura",
    price: 150,
    image:
      "https://images.pexels.com/photos/20891777/pexels-photo-20891777/free-photo-of-seafood-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "天婦羅外酥內嫩，seafood與麵衣的絕妙搭配",
  },
  {
    name: "productsItem17",
    category: "tempura",
    price: 140,
    image:
      "https://images.pexels.com/photos/8953714/pexels-photo-8953714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮蝦與麵衣的絕妙搭配",
  },
  {
    name: "productsItem18",
    category: "tempura",
    price: 30,
    image:
      "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮雞肉與麵衣的絕妙搭配",
  },
  {
    name: "productsItem19",
    category: "tempura",
    price: 20,
    image:
      "https://images.pexels.com/photos/3967347/pexels-photo-3967347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮豆腐與麵衣的絕妙搭配",
  },
  {
    name: "productsItem20",
    category: "yakimono",
    price: 10,
    image:
      "https://images.pexels.com/photos/8112397/pexels-photo-8112397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮雞肉與醬油的絕妙搭配",
  },
  {
    name: "productsItem21",
    category: "yakimono",
    price: 10,
    image:
      "https://images.pexels.com/photos/2233730/pexels-photo-2233730.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮牛肉與醬油的絕妙搭配",
  },
  {
    name: "productsItem22",
    category: "setMeal",
    price: 210,
    image:
      "https://images.pexels.com/photos/20802556/pexels-photo-20802556/free-photo-of-a-gourmet-fish-dish-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮鯖魚與醬油的絕妙搭配",
  },
  {
    name: "productsItem23",
    category: "setMeal",
    price: 220,
    image:
      "https://images.pexels.com/photos/5305438/pexels-photo-5305438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮豬排與醬油的絕妙搭配",
  },
  {
    name: "productsItem24",
    category: "setMeal",
    price: 250,
    image:
      "https://images.pexels.com/photos/14867374/pexels-photo-14867374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮蝦與醬油的絕妙搭配",
  },
  {
    name: "productsItem25",
    category: "setMeal",
    price: 300,
    image:
      "https://images.pexels.com/photos/17248079/pexels-photo-17248079/free-photo-of-sushi-meat-and-rice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮牛肉與醬油的絕妙搭配",
  },
  {
    name: "productsItem26",
    category: "setMeal",
    price: 10,
    image:
      "https://images.pexels.com/photos/19376507/pexels-photo-19376507/free-photo-of-a-bowl-with-rice-and-chicken-sprinkles-with-sesame-seeds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮雞肉與醬油的絕妙搭配",
  },
  {
    name: "productsItem27",
    category: "dessert",
    price: 80,
    image:
      "https://images.pexels.com/photos/2156698/pexels-photo-2156698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "京都抹茶粉製成，香甜可口",
  },
  {
    name: "productsItem28",
    category: "dessert",
    price: 60,
    image:
      "https://images.pexels.com/photos/10676682/pexels-photo-10676682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "新鮮紅豆與糯米皮的絕妙搭配",
  },
  {
    name: "productsItem29",
    category: "dessert",
    price: 50,
    image:
      "https://images.pexels.com/photos/18089587/pexels-photo-18089587/free-photo-of-spanish-flan-dessert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "京都抹茶粉製成，奶香濃郁",
  },
  {
    name: "productsItem30",
    category: "dessert",
    price: 40,
    image:
      "https://images.pexels.com/photos/3737692/pexels-photo-3737692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "紅豆與水的絕妙搭配，甜而不膩",
  },
  {
    name: "productsItem31",
    category: "dessert",
    price: 30,
    image:
      "https://images.pexels.com/photos/1543800/pexels-photo-1543800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "京都抹茶粉製成，蛋糕鬆軟",
  },
  {
    name: "productsItem32",
    category: "drinks",
    price: 20,
    image:
      "https://images.pexels.com/photos/11009223/pexels-photo-11009223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "京都抹茶粉製成，香醇濃郁",
  },
  {
    name: "productsItem33",
    category: "drinks",
    price: 10,
    image:
      "https://images.pexels.com/photos/7113858/pexels-photo-7113858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "靜岡產地直送，清香回甘",
  },
  {
    name: "productsItem34",
    category: "drinks",
    price: 10,
    image:
      "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "玄米焙香與綠茶完美結合",
  },
  {
    name: "productsItem35",
    category: "drinks",
    price: 50,
    image:
      "https://images.pexels.com/photos/18510255/pexels-photo-18510255/free-photo-of-a-drink-in-a-glass-bottle-and-small-cups-on-the-bar-counter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "獨特香回甘持久",
  },
];

export default products;
