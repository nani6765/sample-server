import express from "express";
import cors from "cors";

const PORT = 5000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
