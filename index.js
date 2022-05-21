const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let products = [
  {
    id: 1,
    name: "MotherBorad Asus",
    price:  799.99,
    image: "images/product-1.png",
    stock: 3,
  },
  {
    id: 2,
    name: "Mouse Logitech",
    price: 269.99,
    image: "images/mouse.png",
    stock: 3,
  },
  {
    id: 3,
    name: "Monitor hp",
    price: 1999.99,
    image: "images/monitor.jfif",
    stock: 3,
  },
  {
    id: 4,
    name: "Teclado Logitech",
    price: 749.99,
    image: "images/teclado.jpg",
    stock: 3,
  },
  {
    id: 5,
    name: "Memoria de 16 Ram Tridentz RGB",
    price: 899.99,
    image: "images/memoriasRam.jpg",
    stock: 3,
  },
  {
    id: 6,
    name: "Audifonos Logitech",
    price: 434.99,
    image: "images/audifonosLogitech.jfif",
    stock: 3,
  },
  {
    id: 7,
    name: "Case Gamer Drank",
    price: 1499.99,
    image: "images/casegamer.jpg",
    stock: 3,
  },
  {
    id: 8,
    name: "MousePad",
    price: 379.99,
    image: "images/mousepad.jpg",
    stock: 3,
  },
  {
    id: 9,
    name: "MousePad Logitech",
    price: 199.99,
    image: "images/MousepadLogitech.jpg",
    stock: 3,
  },{
    id: 10,
    name: "Ventilador RGB",
    price: 49.99,
    image: "images/ventiladorOcelot.jpg",
    stock: 3,
  },
  {
    id: 11,
    name: "Memoria USB HP",
    price: 59.99,
    image: "images/usbHp.jpg",
    stock: 3,
  },{
    id: 12,
    name: "Tarjeta Gráfica GTX 1650 super",
    price: 2049.99,
    image: "images/tarjetaGraficaGtx1650Super.jpg",
    stock: 3,
  },{
    id: 13,
    name: "Impresora Epson",
    price: 1349.99,
    image: "images/impresoraEpson.png",
    stock: 3,
  },{
    id: 14,
    name: "Bocinas Logitech",
    price: 789.99,
    image: "images/bocinasLogi.jfif",
    stock: 3,
  },{
    id: 15,
    name: "Disipador Cooler Master",
    price: 499.99,
    image: "images/disipadorCooler.jfif",
    stock: 3,
  },
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