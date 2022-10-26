const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let products = [
  {
    id: 1,
    name: "100 SNCS",
    price:  4.99,
    image: "images/COINS.jpg",
    stock: 3,
  },
  {
    id: 2,
    name: "300 SNCS",
    price: 6.99,
    image: "images/COINS.jpg",
    stock: 3,
  },
  {
    id: 3,
    name: "600 SNCS",
    price: 9.99,
    image: "images/COINS.jpg",
    stock: 3,
  },
  {
    id: 4,
    name: "1000 SNCS",
    price: 11.99,
    image: "images/COINS.jpg",
    stock: 3,
  },
  {
    id: 5,
    name: "2500 SNCS",
    price: 16.99,
    image: "images/COINS.jpg",
    stock: 3,
  },
  {
    id: 6,
    name: "3000 SNCS",
    price: 19.99,
    image: "images/COINS.jpg",
    stock: 3,
  },
  {
    id: 7,
    name: "6500 SNCS",
    price: 29.99,
    image: "images/COINS.jpg",
    stock: 3,
  },
  {
    id: 8,
    name: "9000 SNCS",
    price: 49.99,
    image: "images/COINS.jpg",
    stock: 3,
  },
  {
    id: 9,
    name: "14000 SNCS",
    price: 64.99,
    image: "images/COINS.jpg",
    stock: 3,
  },{
    id: 10,
    name: "20000 SNCS",
    price: 84.99,
    image: "images/COINS.jpg",
    stock: 3,
  },/*
  {
    id: 11,
    name: "Memoria USB HP",
    price: 59.99,
    image: "images/COINS.jpg",
    stock: 3,
  },{
    id: 12,
    name: "Tarjeta Gráfica GTX 1650 super",
    price: 2049.99,
    image: "images/COINS.jpg",
    stock: 3,
  },{
    id: 13,
    name: "Impresora Epson",
    price: 1349.99,
    image: "images/COINS.jpg",
    stock: 3,
  },{
    id: 14,
    name: "Monideas",
    price: 789.99,
    image: "images/COINS.jpg",
    stock: 3,
  },{
    id: 15,
    name: "Disipador Cooler Master",
    price: 499.99,
    image: "images/COINS.jpg",
    stock: 3,
  },*/
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.post("/api/pay", (req, res) => {
  const ids = req.body;
  const procutsCopy = products.map((p) => ({ ...p })); ///copia de los productos
  ids.forEach((id) => {
    const product = procutsCopy.find((p) => p.id === id);
    if (product.stock > 0) {
      product.stock--;
    } else {
      throw "Sin stock";
    }
  });
  products = procutsCopy;
  res.send(products);
});

app.use("/", express.static("fe"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});