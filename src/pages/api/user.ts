import type { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../Data/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(Data);
  }
}
