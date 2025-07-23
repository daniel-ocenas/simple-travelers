import { ConfigProps } from 'lib/domains/config/Config.types';
import { useEffect, useState } from 'react';

export const useGetConfig = () => {
  const [config, setConfig] = useState<ConfigProps | undefined>(undefined);

  useEffect(() => {
    const fetchConfig = async () => {
      const response = await fetch('/api/config').catch(() => {
        return undefined;
      });
      let data = await response?.json();
      setConfig({ instagramToken: data?.instagramToken });
    };

    fetchConfig();
  }, []);

  return { config };
};
