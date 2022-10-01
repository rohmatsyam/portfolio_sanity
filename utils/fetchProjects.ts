import { Project } from "../typings";
import { assetPrefix } from "../next.config";

export const fetchProjects = async () => {
  const res = await fetch(`${assetPrefix}/api/getProjects`);

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
