import { Skill } from "../typings";

export const fetchSkills = async () => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL
      : "http://localhost:3000";
  const res = await fetch(`${baseURL}/api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
