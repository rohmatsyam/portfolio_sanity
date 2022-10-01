import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL
      : "http://localhost:3000";
  const res = await fetch(`${baseURL}/api/getPageInfo`);

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
