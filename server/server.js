const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");

const DB = "mongodb://localhost:27017/employeeDB";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected.."));

var empSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

var empData = mongoose.model("empData", empSchema);

app.post("/add-empDetail", async (req, res) => {
  const empDetail = new empData(req.body);
  await empDetail.save();
});

app.get("/get-empDetail", async (req, res) => {
  const getEmpdatas = await empData.find({});
  res.send(getEmpdatas);
});

app.patch("/update-empDetail/:id", async (req, res) => {
  const updatedDetail = await empData.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.send("Data updated successfully..");
});

app.delete("/delete-empDetail/:id", async (req, res) => {
  await empData.findByIdAndDelete(req.params.id);
  res.send("Data deleted successfully..");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`API is running on ${PORT}`);
});
