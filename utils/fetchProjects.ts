import { Project } from "../typings";

export const fetchProjects = async () => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL
      : "http://localhost:3000";
  const res = await fetch(`${baseURL}/api/getProjects`);

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
