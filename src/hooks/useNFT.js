import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const contractAddress = "0x27664449c1c14B39eCBa1715016B76CD1cbd75bC";

export const useNFT = (params) => {
  const { token } = useMoralisWeb3Api();
  const { isInitialized, chainId } = useMoralis();

  const [assets, setAssets] = useState();

  useEffect(() => {
    if (isInitialized) {
      fetchNFT().then((tokens) => setAssets(tokens));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chainId]);

  const fetchNFT = async () => {
    return await token
      .getAllTokenIds({ address: contractAddress, chain: params?.chain || chainId })
      .then((result) => {
        return result
      });
  };

  return { fetchNFT, assets };
};
