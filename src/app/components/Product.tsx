"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import ImageSamSung from "./image-profile/samsung.jpg";
import ImagePhone from "./image-profile/product2.jpg";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FilterListIcon from "@mui/icons-material/FilterList";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import Slider from "react-slick";
import banner1 from "./image-profile/banner1.jpg";
import banner2 from "./image-profile/banner2.jpg";
import banner3 from "./image-profile/banner3.jpg";
import banner4 from "./image-profile/banner4.jpg";
import banner6 from "./image-profile/banner6.jpg";
const ListNews = () => {
  const bannersData = [
    {
      id: 1,
      banner: banner2,
    },
    {
      id: 2,

      banner: banner1,
    },
    {
      id: 3,

      banner: banner3,
    },
    {
      id: 4,

      banner: banner4,
    },
    {
      id: 5,

      banner: banner4,
    },
    {
      id: 6,

      banner: banner6,
    },
  ];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  const data = [
    {
      title: "iPhone 15 Pro Max 256GB | Chính hãng VN/A",
      imageUrl: ImagePhone,
      inches: "6.7 inches",
      capacity: "8GB",
      ram: "256GB",
      price: "28.990.000đ",
      salePrice: "29.290.000đ",
      info: "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kì hạn 3-6 tháng",
    },
    {
      title: "Samsung Galaxy S23 Ultra 512GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.8 inches",
      capacity: "12GB",
      ram: "512GB",
      price: "30.990.000đ",
      salePrice: "29.990.000đ",
      info: "Tặng kèm Sạc Super Fast Charging 45W",
    },
    {
      title: "OPPO Find X6 Pro 256GB | Chính hãng",
      imageUrl: ImagePhone,
      inches: "6.55 inches",
      capacity: "8GB",
      ram: "256GB",
      price: "21.990.000đ",
      salePrice: "20.990.000đ",
      info: "Bảo hành chính hãng 12 tháng",
    },
    {
      title: "Xiaomi 13 Pro 256GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.73 inches",
      capacity: "8GB",
      ram: "256GB",
      price: "23.990.000đ",
      salePrice: "22.990.000đ",
      info: "Tặng kèm sạc 120W và cáp USB-C",
    },
    {
      title: "Google Pixel 7 Pro 256GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.7 inches",
      capacity: "12GB",
      ram: "256GB",
      price: "24.990.000đ",
      salePrice: "23.990.000đ",
      info: "Bảo hành chính hãng 12 tháng",
    },
    {
      title: "OnePlus 11 256GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.55 inches",
      capacity: "8GB",
      ram: "256GB",
      price: "19.990.000đ",
      salePrice: "18.990.000đ",
      info: "Tặng kèm sạc siêu nhanh 80W",
    },
    {
      title: "Vivo X90 Pro+ 256GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.78 inches",
      capacity: "12GB",
      ram: "256GB",
      price: "27.990.000đ",
      salePrice: "26.990.000đ",
      info: "Bảo hành chính hãng 12 tháng",
    },
    {
      title: "Realme GT3 256GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.43 inches",
      capacity: "8GB",
      ram: "256GB",
      price: "15.990.000đ",
      salePrice: "14.990.000đ",
      info: "Tặng kèm sạc 240W siêu nhanh",
    },
    {
      title: "Honor Magic5 Pro 256GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.81 inches",
      capacity: "12GB",
      ram: "256GB",
      price: "22.990.000đ",
      salePrice: "21.990.000đ",
      info: "Bảo hành chính hãng 12 tháng",
    },
    {
      title: "IQOO Neo7 5G 256GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.62 inches",
      capacity: "8GB",
      ram: "256GB",
      price: "13.990.000đ",
      salePrice: "12.990.000đ",
      info: "Tặng kèm tai nghe không dây",
    },
    {
      title: "Redmi K60 Ultra 256GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.67 inches",
      capacity: "8GB",
      ram: "256GB",
      price: "14.990.000đ",
      salePrice: "13.990.000đ",
      info: "Bảo hành chính hãng 12 tháng",
    },
    {
      title: "Redmi K60 Ultra 256GB | Chính hãng",
      imageUrl: ImageSamSung,
      inches: "6.67 inches",
      capacity: "8GB",
      ram: "256GB",
      price: "14.990.000đ",
      salePrice: "13.990.000đ",
      info: "Bảo hành chính hãng 12 tháng",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div
      className='grid grid-cols-6 py-6'
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <div></div>
      <div className='col-span-4'>
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <Slider {...settings}>
              {bannersData?.map((el: any, i: number) => (
                <div key={i} className='relative'>
                  <Image
                    src={el?.banner}
                    alt=''
                    width={1000}
                    height={200}
                    className='w-full aspect-[1000/200] object-cover rounded-lg'
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <Slider {...settings}>
              {bannersData?.map((el: any, i: number) => (
                <div key={i} className='relative'>
                  <Image
                    src={el?.banner}
                    alt=''
                    width={1000}
                    height={200}
                    className='w-full aspect-[1000/200] object-cover rounded-lg'
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='text-xl font-bold py-4'> Danh sách sản phẩm</div>
        <div className='font-bold'>Sắp xếp theo</div>
        <div className='flex gap-4 py-2'>
          <div className='bg-slate-200 px-2 text-[14px] flex justify-center items-center gap-1 rounded-md cursor-pointer hover:opacity-80'>
            <FilterListIcon
              sx={{
                color: "#B0B0B0",
              }}
            />
            Giá Cao - Thấp
          </div>
          <div className='bg-slate-200 px-2 text-[14px] flex justify-center items-center gap-1 rounded-md cursor-pointer hover:opacity-80'>
            <FilterListIcon
              sx={{
                color: "#B0B0B0",
              }}
            />
            Giá Thấp - Cao
          </div>
          <div className='bg-slate-200 px-2 text-[14px] flex justify-center items-center gap-1 rounded-md cursor-pointer hover:opacity-80'>
            <LoyaltyIcon
              sx={{
                color: "#B0B0B0",
              }}
            />
            Khuyến mãi hot
          </div>
          <div className='bg-slate-200 px-2 text-[14px] flex justify-center items-center gap-1 rounded-md cursor-pointer hover:opacity-80'>
            <VisibilityIcon
              sx={{
                color: "#B0B0B0",
              }}
            />
            Xem nhiều
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {data?.map((el: any, index: number) => (
            <div className='border-[1px] p-2 border-gray-300 rounded-lg hover:transform hover:translate-y-[-1.75rem] hover:shadow-[0_10px_10px_gray] duration-500'>
              <div className='py-4 transition-transform'>
                <Image
                  src={el?.imageUrl}
                  alt=''
                  width={150}
                  height={150}
                  // className='w-full object-cover aspect-300/100 h-[160px] transition-all duration-300 ease-in-out'
                  className='w-full object-cover aspect-300/100 h-[160px] transition-all duration-300 ease-in-out hover:transform-gpu hover:translate-y-[-25%] hover:shadow-[rgba(226,196,63,0.25)_0px_13px_47px_-5px,rgba(180,71,71,0.3)_0px_8px_16px_-8px]'
                />
              </div>
              <div className='border-[1px] border-gray-200 p-2 rounded-md mt-4'>
                <div className='font-bold pt-4'>
                  <p className='text-[20px]'>{el?.title}</p>
                </div>
                <div className='grid grid-cols-3 gap-1'>
                  <div className='text-[10px] bg-slate-200 rounded-md px-2 my-2'>
                    <p className='text-center'>{el?.inches}</p>
                  </div>
                  <div className='text-[10px] bg-slate-200 rounded-md my-2'>
                    <p className='text-center'>{el?.capacity}</p>
                  </div>
                  <div className='text-[10px] bg-slate-200 rounded-md my-2'>
                    <p className='text-center '>{el?.ram}</p>
                  </div>
                </div>
                <div className='pb-3 pt-2 font-semibold text-red-600 text-[20px]'>{el?.price}</div>
                <div className='text-[14px]'>
                  Smember giảm thêm đến
                  <span className='text-red-600 font-semibold '>{el?.salePrice}</span>
                </div>
              </div>
              <div className='text-[12px] pt-2 h-[46px]'>{el?.info}</div>
              <div className='flex justify-between'>
                <div>
                  <StarIcon
                    sx={{
                      color: "#f1dc1b",
                    }}
                  />
                  <StarIcon
                    sx={{
                      color: "#f1dc1b",
                    }}
                  />{" "}
                  <StarIcon
                    sx={{
                      color: "#f1dc1b",
                    }}
                  />{" "}
                  <StarIcon
                    sx={{
                      color: "#f1dc1b",
                    }}
                  />{" "}
                  <StarIcon
                    sx={{
                      color: "#f1dc1b",
                    }}
                  />
                </div>
                <div
                  className='text-[14px] font-semibold flex justify-between items-center gap-2 cursor-pointer'
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  Yêu thích{" "}
                  {hoveredIndex === index ? (
                    <FavoriteIcon className='text-red-500' />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default ListNews;