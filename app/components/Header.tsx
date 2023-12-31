"use client";
import {
  ConnectWallet,
  useLogin,
  useContract,
  useContractMetadata,
  useNFT,
  useLogout,
  useUser,
  useAddress,
} from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { contractAddress } from '../lib/parameters';

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

export default function Header() {
  const { isLoading, login } = useLogin();
  const address = useAddress();
  const { logout } = useLogout();
  const { user, isLoggedIn } = useUser();
  const { contract } = useContract(contractAddress);
  const { data: firstNFT, isLoading: nftLoading } = useNFT(contract, 0);
  const { data: contractMetadata, isLoading: contractLoading } =
    useContractMetadata(contract);


  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src="/opensea.png" height={40} width={40} alt="icon" />
          <div className={style.logoText}>Jars</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <div className={style.headerItems + ` hidden md:flex`}>
        <Link href="/collections">
          <div className={style.headerItem}>Collections</div>
        </Link>
        <div className={style.headerItem}>Stats</div>
        <div className={style.headerItem}>Resources</div>
        <div className={style.headerItem}>Create</div>
        <div className={style.headerIcon}>
          <Link href={`/${address}`}>
            <CgProfile />
          </Link>
        </div>
        <div className={style.headerItem}>
          <ConnectWallet 
            theme="dark" 
            hideTestnetFaucet
            switchToActiveChain
            welcomeScreen={() => <></>}/>
        </div>
      </div>
      
    </div>
  );
}
