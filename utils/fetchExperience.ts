import { Experience } from "../typings";

export const fetchExperience = async () => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL
      : "http://localhost:3000";
  const res = await fetch(`${baseURL}/api/getExperience`);

  const data = await res.json();
  const experience: Experience[] = data.experience;

  return experience;
};
