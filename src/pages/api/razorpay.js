// backend: api/razorpay.js
const Razorpay = require("razorpay");
const shortid = require("shortid");

async function GetProducts(cartData) {
  const products = await fetch("http://server.udayps.com:5000/api/products/all");
  const ids = cartData.map((id) => id._id);
  const data = await products.json();

  //compare productIds with data.data array inside it and return the products which has same id as productIds
  const filteredProducts = data.data.filter((product) =>
    ids.includes(product._id)
  );

  // console.log("thelength is " + filteredProducts.length);
  return filteredProducts;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { data , total } = req.body;
    const products = await GetProducts(data.cart);

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    // const amount = 100;
    // now we will calculate the amount based on the products which arein the products variable here
    // const prices = products.map((product) => product.price);
    // const amount = prices.reduce((a, b) => a + b, 0);
    
    const payment_capture = 1;
    const currency = "INR";
    const options = {
      amount: (total * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: "Failed to create order" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}