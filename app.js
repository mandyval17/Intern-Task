const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
const modelData = require("./modelSchema.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hell0");
});
data_final = [];
const fun = async (req, res) => {
  const response = await axios.get("https://api.wazirx.com/api/v2/tickers", {});
  let a = 0;
  for (key in response.data) {
    a++;
    if (a <= 10) {
      data = response.data[key];
      data["key"] = key;
      //   console.log(data);
      data_final.push(data);
    }
  }
  //   console.log(data_final[0].key);
};
// console.log(data_final['name'])
app.get("/save", async (req, res) => {
  let data = [];
  for (i in data_final) {
    data.push(
      await modelData.create({
        Name: data_final[i]["name"],
        last: data_final[i]["last"],
        Buy: data_final[i]["buy"],
        Sell: data_final[i]["sell"],
        Volume: data_final[i]["volume"],
        Base_unit: data_final[i]["base_unit"],
      })
    );
    console.log(data_final[i]["name"]);
  }
  res.json({msg:"successfully set data to mongodb"});
});

app.get("/getdata",async (req,res)=>{
  const data=await modelData.find({});
  console.log(data)
  res.json(data)
})
const start = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/intern", {})
      .then(() => {
        console.log("connected");
      })
      .catch((err) => {
        console.log(err);
      });
    app.listen(3000, () => {
      console.log("Server is listening on port " + 3000);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
fun();
