import { useEffect } from "react";
import { applySeo, SeoConfig } from "./seo";

export function useSeo(config: SeoConfig) {
  useEffect(() => {
    applySeo(config);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.title, config.description, config.path]);
}
