const express = require("express");
require("./config");
const Product = require("./Product");
const multer = require("multer");
const app = express();
app.use(express.json());

const upload = multer({
  storage:multer.diskStorage({
    destination: function(req,file,cb){
      cb(null,"uploads")
    },
    filename:function(req,file,cb){
      cb(null, file.originalname.split('.')[0] + '-' + Date.now() + '.jpg');
    }
  })
}).single("user_file")

app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(req.body);
  res.send(result);
});

app.get("/list", async (req, res) => {
  let result = await Product.find();
  res.send(result);
});

app.delete("/delete/:_id", async (req, res) => {
  let result = await Product.deleteOne({ _id: req.params._id });
  res.send(result);
});

app.put("/update/:_id", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params._id },
    { $set: req.body }
  );
  res.send(result);
});
app.get("/search/:key", async (req, res) => {
  try {
    let data = await Product.find({
      $or: [{ name: { $regex: req.params.key, $options: "i" } }],
    });
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: "An error occurred while searching for products." });
  }
});

app.post("/upload",upload,(req,res)=>{
  res.send("file upload")
})

app.listen(5000);
