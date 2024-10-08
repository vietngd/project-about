"use client";
import React, { useEffect, useState, MouseEvent } from "react";
import Logo from "@/app/components/images/logoheader.png";
import TohaLogo from "@/app/components/images/toha.png";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import Person4Icon from "@mui/icons-material/Person4";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, Menu, MenuItem, Avatar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BannerFooter from "./bannerFooter.jpg";

const LayoutHeader = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("/");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    setActiveTab(path);
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (loggedIn) {
      setUserName(localStorage.getItem("userName"));
    } else {
      setUserName(null);
    }
  }, []);

  const handleTabClick = (path: string) => {
    setActiveTab(path);
    router.push(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("isLoggedIn");
    setUserName(null);
    router.push("/login");
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='grid grid-cols-7 p-2 text-[24px] pl-8 border-b-[1px] bg-gradient-to-r from-[#dfcecc] to-[#cfe6f0]'>
      <div className='flex col-span-2'>
        <div>
          <Image src={Logo} alt='' width={38} height={50} />
        </div>
        <div className='flex justify-center items-center'>
          <Image src={TohaLogo} alt='' width={80} height={90} />
        </div>
      </div>
      <nav className='grid grid-cols-4 gap-4 col-span-3'>
        {/* Các nút điều hướng */}
        <button
          className={`text-[16px] flex justify-center items-center gap-2 pt-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 pb-3 border-[#FFFFFF] after:bg-blue-500 ${
            activeTab === "/" ? "after:opacity-100" : "after:opacity-0"
          } hover:after:opacity-100 transition-all duration-300`}
          onClick={() => handleTabClick("/")}
        >
          <InventoryIcon sx={{ color: "#B0B0B0" }} /> Về chúng tôi
        </button>

        <button
          className={`text-[16px] text-center pt-2 flex justify-center items-center gap-2  relative after:absolute after:bottom-0 after:left-0 after:w-full pb-3 after:h-1 after:bg-blue-500 ${
            activeTab === "/products" ? "after:opacity-100" : "after:opacity-0"
          } hover:after:opacity-100 !transition-all !duration-300`}
          onClick={() => handleTabClick("/products")}
        >
          <HomeIcon sx={{ color: "#B0B0B0" }} />
          Trang chủ
        </button>
        <button
          className={`text-[16px] text-center pt-2 flex justify-center items-center gap-2  relative after:absolute after:bottom-0 after:left-0 after:w-full pb-3 after:h-1 after:bg-blue-500 ${
            activeTab === "/orders" ? "after:opacity-100" : "after:opacity-0"
          } hover:after:opacity-100 !transition-all !duration-300`}
          onClick={() => handleTabClick("/orders")}
        >
          <ProductionQuantityLimitsIcon sx={{ color: "#B0B0B0" }} /> Giỏ hàng
        </button>
      </nav>
      <div className='flex justify-end items-end mb-1 col-span-2'>
        {userName ? (
          <div>
            <Avatar
              alt={userName}
              src='https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/456451033_1691722174996313_1855234219620756694_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IPOkf380fCcQ7kNvgE2dCXF&_nc_ht=scontent.fhan17-1.fna&_nc_gid=AsrexH7MvH-i91TAHJ4Gx1C&oh=00_AYAtsVFemhqSjZ0C3a5t3Q0WXMbJDjbbjUjq923To7-ijA&oe=66E851A2'
              onClick={handleClick}
              sx={{ cursor: "pointer", marginLeft: 2 }}
            />
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
              <MenuItem onClick={() => router?.push("/profile")}>Thông tin cá nhân</MenuItem>
            </Menu>
          </div>
        ) : (
          <Link href={`/login`} target='_blank'>
            <button className="cursor-pointer text-white font-bold relative text-[14px] w-[110px] h-[34px] mx-4 mb-1 text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
              <p className='flex justify-center items-center pb-1 font-semibold text-[14px]'>
                Đăng nhập
              </p>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LayoutHeader;
