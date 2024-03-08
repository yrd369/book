import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
const router = express.Router();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
  
};
const schema = [
  {
    name: "book",
    author: "yogha raj dhayal",
    desc: "something",
    id: uuidv4(),
  },
];
router.get("/books", cors(corsOptions), (req, res) => {
  res.json(schema);
});

router.post("/books/create", cors(corsOptions), (req, res) => {
  req.body.id = uuidv4();
  schema.push(req.body);
  res.json(req.body);
});

router.delete("/books/delete/:id", cors(corsOptions), (req, res) => {
  const id = req.params;
  const deletedFile = schema.find((val) => {
    return val.id === id.id;
  });
  schema.pop(deletedFile);
  res.json(deletedFile);
});

router.patch("/books/update/:id", cors(corsOptions), (req, res) => {
  const id = req.params;
  const updateFile = schema.find((val) => {
    return val.id === id.id;
  });
  const { name, author, desc } = req.body;
  (updateFile.name = name), (updateFile.author = author);
  updateFile.desc = desc;
  res.json(updateFile);
});
export default router;
