// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { projects } from "../../projects";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(projects);
};
