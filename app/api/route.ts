import { sdk } from "@/@thesis-nft/sdk/sdkInitialize";
import { NextResponse } from "next/server";

export async function GET() {
  const contract = await sdk.getContract(
    "0x982fC72D6EDBE0D9BEA5A8Da81f0d1bC4ee4f6bc"
  );

  const nfts = await contract.erc721.getAll();
  return NextResponse.json(nfts);
}
