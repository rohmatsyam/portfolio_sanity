import { assetPrefix } from "../next.config";
import { Social } from "../typings";

export const fetchSocials = async () => {
  const res = await fetch(`${assetPrefix}/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};

export default fetchSocials;
