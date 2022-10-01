import { assetPrefix } from "../next.config";
import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const res = await fetch(`${assetPrefix}/api/getPageInfo`);

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
