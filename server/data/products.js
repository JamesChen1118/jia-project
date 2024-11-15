const products = [
  {
    name: "productsItem1",
    category: "sashimi",
    price: 580,
    image:
      "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "精選新鮮生魚片拼盤，搭配山葵與醬油",
  },
  {
    name: "productsItem2",
    category: "sashimi",
    price: 320,
    image:
      "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "挪威空運鮭魚，入口即化的細緻口感",
  },
  {
    name: "productsItem3",
    category: "sashimi",
    price: 300,
    image:
      "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮鯛魚片，清甜鮮美",
  },
  {
    name: "productsItem4",
    category: "sashimi",
    price: 280,
    image:
      "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "油脂豐富的竹筴魚，入口即化",
  },
  {
    name: "productsItem5",
    category: "sashimi",
    price: 260,
    image:
      "https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "北海道空運干貝，鮮甜可口",
  },
  {
    name: "productsItem6",
    category: "sushi",
    price: 240,
    image:
      "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮鮪魚搭配道地醋飯",
  },
  {
    name: "productsItem7",
    category: "sushi",
    price: 220,
    image:
      "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮雞蛋與醋飯的完美結合",
  },
  {
    name: "productsItem8",
    category: "sushi",
    price: 200,
    image:
      "https://images.pexels.com/photos/2323391/pexels-photo-2323391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "挪威鮭魚與醋飯的絕妙搭配",
  },
  {
    name: "productsItem9",
    category: "sushi",
    price: 180,
    image:
      "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "清爽黃瓜與醋飯的絕妙組合",
  },
  {
    name: "productsItem10",
    category: "sushi",
    price: 160,
    image:
      "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮蝦與醋飯的完美結合",
  },
  {
    name: "productsItem11",
    category: "seafood",
    price: 140,
    image:
      "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮蛤蜊與蒜香醬油的絕妙搭配",
  },
  {
    name: "productsItem12",
    category: "seafood",
    price: 120,
    image:
      "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "北海道空運海膽，鮮美可口",
  },
  {
    name: "productsItem13",
    category: "seafood",
    price: 100,
    image:
      "https://images.pexels.com/photos/8969231/pexels-photo-8969231.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮牡蠣與檸檬汁的絕妙搭配",
  },
  {
    name: "productsItem14",
    category: "seafood",
    price: 80,
    image:
      "https://images.pexels.com/photos/8969252/pexels-photo-8969252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮生蠔與檸檬汁的絕妙搭配",
  },
  {
    name: "productsItem15",
    category: "seafood",
    price: 60,
    image:
      "https://images.pexels.com/photos/8969242/pexels-photo-8969242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "北海道空運干貝，鮮甜可口",
  },
  {
    name: "productsItem16",
    category: "tempura",
    price: 50,
    image:
      "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "天婦羅外酥內嫩，seafood與麵衣的絕妙搭配",
  },
  {
    name: "productsItem17",
    category: "tempura",
    price: 40,
    image:
      "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮蝦與麵衣的絕妙搭配",
  },
  {
    name: "productsItem18",
    category: "tempura",
    price: 30,
    image:
      "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮雞肉與麵衣的絕妙搭配",
  },
  {
    name: "productsItem19",
    category: "tempura",
    price: 20,
    image:
      "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮豆腐與麵衣的絕妙搭配",
  },
  {
    name: "productsItem20",
    category: "yakimono",
    price: 10,
    image:
      "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
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
    price: 10,
    image:
      "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮鯖魚與醬油的絕妙搭配",
  },
  {
    name: "productsItem23",
    category: "setMeal",
    price: 10,
    image:
      "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮豬排與醬油的絕妙搭配",
  },
  {
    name: "productsItem24",
    category: "setMeal",
    price: 10,
    image:
      "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮蝦與醬油的絕妙搭配",
  },
  {
    name: "productsItem25",
    category: "setMeal",
    price: 10,
    image:
      "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮牛肉與醬油的絕妙搭配",
  },
  {
    name: "productsItem26",
    category: "setMeal",
    price: 10,
    image:
      "https://images.pexels.com/photos/2323391/pexels-photo-2323391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮雞肉與醬油的絕妙搭配",
  },
  {
    name: "productsItem27",
    category: "dessert",
    price: 80,
    image:
      "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "京都抹茶粉製成，香甜可口",
  },
  {
    name: "productsItem28",
    category: "dessert",
    price: 60,
    image:
      "https://images.pexels.com/photos/2233730/pexels-photo-2233730.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "新鮮紅豆與糯米皮的絕妙搭配",
  },
  {
    name: "productsItem29",
    category: "dessert",
    price: 50,
    image:
      "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "京都抹茶粉製成，奶香濃郁",
  },
  {
    name: "productsItem30",
    category: "dessert",
    price: 40,
    image:
      "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "紅豆與水的絕妙搭配，甜而不膩",
  },
  {
    name: "productsItem31",
    category: "dessert",
    price: 30,
    image:
      "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "京都抹茶粉製成，蛋糕鬆軟",
  },
  {
    name: "productsItem32",
    category: "drinks",
    price: 20,
    image:
      "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "京都抹茶粉製成，香醇濃郁",
  },
  {
    name: "productsItem33",
    category: "drinks",
    price: 10,
    image:
      "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "靜岡產地直送，清香回甘",
  },
  {
    name: "productsItem34",
    category: "drinks",
    price: 10,
    image:
      "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "玄米焙香與綠茶完美結合",
  },
  {
    name: "productsItem35",
    category: "drinks",
    price: 50,
    image:
      "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    description: "獨特香回甘持久",
  },
];

export default products;
