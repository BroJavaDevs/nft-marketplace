import { NetworkInput, SDKOptions } from "@thirdweb-dev/sdk";
import { ThesisSDK } from ".";

const network: NetworkInput = "sepolia";
const options: SDKOptions = {
  clientId: process.env.THIRDWEB_CLIENT_ID,
  secretKey: process.env.THIRDWEB_API_KEY,
};

export const sdk = new ThesisSDK(network, options);
