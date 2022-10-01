import { assetPrefix } from "../next.config";
import { Skill } from "../typings";

export const fetchSkills = async () => {
  const res = await fetch(`${assetPrefix}/api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};

export default fetchSkills;
