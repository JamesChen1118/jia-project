const products = [
  {
    id: 1,
    name: "刺身拼盤",
    category: "生食",
    price: 300,
    image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 2,
    name: "鮭魚刺身",
    category: "生食",
    price: 120,
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 3,
    name: "鯛魚刺身",
    category: "生食",
    price: 150,
    image: "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 4,
    name: "竹筴魚刺身",
    category: "生食",
    price: 140,
    image: "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 5,
    name: "干貝刺身",
    category: "生食",
    price: 160,
    image: "https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 6,
    name: "鮪魚壽司",
    category: "壽司",
    price: 80,
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 7,
    name: "蛋壽司",
    category: "壽司",
    price: 50,
    image: "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 8,
    name: "鮭魚壽司",
    category: "壽司",
    price: 70,
    image: "https://images.pexels.com/photos/2323391/pexels-photo-2323391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 9,
    name: "黃瓜捲壽司",
    category: "壽司",
    price: 90,
    image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 10,
    name: "蝦壽司",
    category: "壽司",
    price: 60,
    image: "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 11,
    name: "烤蛤蜊",
    category: "海鮮",
    price: 130,
    image: "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 12,
    name: "海膽",
    category: "海鮮",
    price: 200,
    image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 13,
    name: "牡蠣",
    category: "海鮮",
    price: 150,
    image: "https://images.pexels.com/photos/8969231/pexels-photo-8969231.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 14,
    name: "生蠔",
    category: "海鮮",
    price: 180,
    image: "https://images.pexels.com/photos/8969252/pexels-photo-8969252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 15,
    name: "干貝",
    category: "海鮮",
    price: 170,
    image: "https://images.pexels.com/photos/8969242/pexels-photo-8969242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 16,
    name: "炸天婦羅",
    category: "炸物",
    price: 120,
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 17,
    name: "炸蝦",
    category: "炸物",
    price: 110,
    image: "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 18,
    name: "炸雞",
    category: "炸物",
    price: 100,
    image: "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 19,
    name: "炸豆腐",
    category: "炸物",
    price: 80,
    image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 20,
    name: "烤雞肉串",
    category: "燒烤",
    price: 70,
    image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 21,
    name: "烤牛肉串",
    category: "燒烤",
    price: 90,
    image: "https://images.pexels.com/photos/2233730/pexels-photo-2233730.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },

  // 定食
  {
    id: 22,
    name: "鯖魚定食",
    category: "定食",
    price: 200,
    image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 23,
    name: "豬排定食",
    category: "定食",
    price: 220,
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 24,
    name: "炸蝦定食",
    category: "定食",
    price: 230,
    image: "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 25,
    name: "牛肉定食",
    category: "定食",
    price: 250,
    image: "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 26,
    name: "雞肉定食",
    category: "定食",
    price: 210,
    image: "https://images.pexels.com/photos/2323391/pexels-photod2323391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },

  // 甜點
  {
    id: 27,
    name: "抹茶冰淇淋",
    category: "甜點",
    price: 60,
    image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 28,
    name: "大福",
    category: "甜點",
    price: 40,
    image: "https://images.pexels.com/photos/2233730/pexels-photo-2233730.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 29,
    name: "抹茶奶酪",
    category: "甜點",
    price: 55,
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 30,
    name: "紅豆湯",
    category: "甜點",
    price: 45,
    image: "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 31,
    name: "抹茶蛋糕",
    category: "甜點",
    price: 65,
    image: "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },

  // 飲品
  {
    id: 32,
    name: "抹茶拿鐵",
    category: "飲品",
    price: 70,
    image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 33,
    name: "日式煎茶",
    category: "飲品",
    price: 50,
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 34,
    name: "玄米茶",
    category: "飲品",
    price: 45,
    image: "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
  {
    id: 35,
    name: "梅子蘇打",
    category: "飲品",
    price: 55,
    image: "https://images.pexels.com/photos/2098098/pexels-photo-2098098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
  },
];

export default products;
