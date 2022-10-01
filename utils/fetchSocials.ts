import { Social } from "../typings";

export const fetchSocials = async () => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL
      : "http://localhost:3000";
  const res = await fetch(`${baseURL}/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
