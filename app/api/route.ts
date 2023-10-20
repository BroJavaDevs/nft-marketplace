import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { NextResponse } from "next/server";

export async function GET() {
  const sdk = new ThirdwebSDK("sepolia", {
    clientId: process.env.THIRDWEB_CLIENT_ID,
    secretKey: process.env.THIRDWEB_API_KEY,
  });
  const contract = await sdk.getContract(
    "0x8720dbc6C5722f15b059F814366889b0cE8a9816"
  );
  const nfts = await contract.erc721.getAll();
  return NextResponse.json(nfts);
}
