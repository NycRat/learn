import { getDB } from "./ConnectionDB";

export const verifyToken = (req: any, res: any, next: (user: any) => void) => {
  const token = req.headers.authorization;
  console.log(token);
  if (token) {
    const db = getDB("userDB");
    const collection = db.collection("logins");
    collection.findOne({ token: token }, (err, result) => {
      console.log(result);
      if (err) {
        res.status(500).json({ message: err });
      } else if (result) {
        next(result);
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
