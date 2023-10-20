import { NetworkInput, SDKOptions, ThirdwebSDK } from "@thirdweb-dev/sdk";
import { IThirdwebStorage } from "@thirdweb-dev/storage";

export class ThesisSDK extends ThirdwebSDK {
  constructor(
    network: NetworkInput,
    options?: SDKOptions,
    storage?: IThirdwebStorage
  ) {
    super(network, options, storage);
  }
}
