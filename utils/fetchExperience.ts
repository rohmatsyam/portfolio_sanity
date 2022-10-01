import { assetPrefix } from "../next.config";
import { Experience } from "../typings";

export const fetchExperience = async () => {
  const res = await fetch(`${assetPrefix}/api/getExperience`);

  const data = await res.json();
  const experience: Experience[] = data.experience;

  return experience;
};

export default fetchExperience;
