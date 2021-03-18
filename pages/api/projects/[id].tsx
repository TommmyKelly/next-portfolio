// import type { NextApiRequest, NextApiResponse } from "next";
// import { projects } from "../../../projects";

// // export default (req: NextApiRequest, res: NextApiResponse) => {
// //   res.status(200).json(projects);
// // };

// export default function handler(
//   { query: { id } }: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const project = projects.filter((art) => art.id === id);

//   if (project.length > 0) {
//     res.status(200).json(project[0]);
//   } else
//     res.status(404).json({
//       message: `Project with the id of ${id} not found`,
//     });
// }
export {};
