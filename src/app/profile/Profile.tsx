"use client";
import React from "react";
import { useState } from "react";
import { Paper } from "@mui/material";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MaleIcon from "@mui/icons-material/Male";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceIcon from "@mui/icons-material/Place";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ImageProfile from "./profile.jpg";

const BasicTab = () => {
  const data = {
    avatar: ImageProfile,
    name: "Nguyễn Đức Việt",
    headline: "Vô địch quốc gia môn bóng chuyền",
    phone: "0868650928",
    email: "viet.ngd.2002@gmail.com",
    address: "Phù Lưu - Trung Nghĩa - Yên Phong - Bắc Ninh",
    male: "Male",
    dateOfBirth: "October 08, 2002",
    interests: "My hobbies are soccer, listening to music and traveling...",
    skill: "Good communication, presentation and teamwork skills.",
    gifted: "Public speaking, teamwork.",
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <main>
      <Paper>
        <div className='grid grid-cols-5'>
          <div className='col-span-2 bg-[#ECF3FF] h-[900px]'>
            <div>
              <div className='text-[36px] text-[#059341] font-medium text-center pt-6'>
                Nguyen Duc Viet
              </div>
              <div className='text-[16px] text-[#B0B0B0] text-center pl-3'>Programmer</div>
              <div
                className='flex justify-center items-center pt-4'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Avatar
                  src={data?.avatar.src}
                  sx={{
                    width: 180,
                    height: 180,
                    // transition: "all 0.3s ease-in-out",
                  }}
                  className='uppercase rounded-full object-cover w-[200px] h-[200px] aspect-[1/1] ml-3 mb-2 border-[2px] border-[#059341] transition-all duration-300 ease-in-out hover:transform-gpu hover:translate-y-[-25%] hover:shadow-[rgba(226,196,63,0.25)_0px_13px_47px_-5px,rgba(180,71,71,0.3)_0px_8px_16px_-8px]'
                />
              </div>
              <div className='px-6'>
                <div>
                  <div className='text-[#059341] text-[18px] font-bold pb-4'>
                    Contact information
                  </div>
                  <div className='text-[14px] flex'>
                    <div>
                      <DateRangeIcon
                        sx={{
                          color: "#059341",
                        }}
                      />
                    </div>
                    <div className='text-[14px] px-1 pt-1'>{data?.dateOfBirth}</div>
                  </div>
                </div>
                <div>
                  <div className='text-[14px] flex'>
                    <div>
                      <MaleIcon
                        sx={{
                          color: "#059341",
                        }}
                      />
                    </div>
                    <div className='text-[14px] px-1 pt-1'> {data?.male}</div>
                  </div>
                </div>
                <div>
                  <div className='text-[14px] flex'>
                    <div>
                      <PhoneAndroidIcon
                        sx={{
                          color: "#059341",
                        }}
                      />
                    </div>
                    <div className='text-[14px] px-1 pt-1'> {data?.phone}</div>
                  </div>
                </div>
                <div>
                  <div className='text-[14px] flex'>
                    <div>
                      <MailOutlineIcon
                        sx={{
                          color: "#059341",
                        }}
                      />
                    </div>
                    <div className='text-[14px] px-1 pt-1'> {data?.email}</div>
                  </div>
                </div>
                <div className='border-b-[1px] border-[#FB9F21] pb-4'>
                  <div className='text-[14px] flex'>
                    <div>
                      <PlaceIcon
                        sx={{
                          color: "#059341",
                        }}
                      />
                    </div>
                    <div className='text-[14px] px-1 pt-1'> {data?.address}</div>
                  </div>
                </div>
              </div>
              <div className='px-6'>
                <div className='border-b-[1px] border-[#FB9F21] pb-4'>
                  <div className='text-[#059341] text-[18px] font-bold py-4'>Interests</div>
                  <div className='text-[14px] flex'>
                    <div className='text-[14px]'>{data?.interests}</div>
                  </div>
                </div>
              </div>
              <div className='px-6 '>
                <div className='text-[#059341] text-[18px] font-bold py-4'>Skills</div>
                <div className='text-[14px] border-b-[1px] border-[#FB9F21] pb-4'>
                  <div className='font-bold'>{data?.skill}</div>
                  <div className=''>{data?.gifted}</div>
                </div>
              </div>
              <div>
                <div className='px-6'>
                  <p className='text-[18px] text-[#059341] py-4'>
                    <b>Languages</b>
                  </p>
                  <div className='flex flex-col gap-2'>
                    <p className='text-[14px]'>English</p>
                    <div className='w-full h-3 bg-gray-300 rounded-xl'>
                      <div className='h-full bg-teal-500 rounded-xl' style={{ width: "75%" }} />
                    </div>
                    <p className='text-[14px]'>Spanish</p>
                    <div className='w-full h-3 bg-gray-300 rounded-xl'>
                      <div className='h-full bg-teal-500 rounded-xl' style={{ width: "55%" }} />
                    </div>
                    <p className='text-[14px]'>German</p>
                    <div className='w-full h-3 bg-gray-300 rounded-xl'>
                      <div className='h-full bg-teal-500 rounded-xl' style={{ width: "25%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 col-span-3'>
            <div>
              <div className='text-[#059341] font-bold py-4'>Objective</div>
              <div className='border-b-[1px] border-[#FB9F21] pb-4'>
                <p>Apply the knowledge learned to become a professional programming engineer.</p>
                <p>
                  Make products that help the company and generate income for the company as well as
                  yourself.
                </p>{" "}
                <p>Long-term association with the company.</p>
              </div>
            </div>

            <div>
              <div className='text-[#059341] font-bold py-4'>Education</div>
              <div className='border-b-[1px] border-[#FB9F21] pb-4'>
                <div className='flex justify-between'>
                  <p className='font-bold'>Post and Telecomunications Institute of Technology</p>
                  <p className='text-gray-500'>2020-now</p>
                </div>
                <div className='pt-3 flex flex-col gap-1'>
                  <p>Electronics and Telecommunication.</p>
                  <p className='text-gray-500'>CPA: 2.81/4.0</p>
                </div>
              </div>
            </div>

            <div>
              <div className='text-[#059341] font-bold py-4'>Activities</div>
              <div className='border-b-[1px] border-[#FB9F21] pb-10'>
                <div className='flex justify-between'>
                  <p className='font-bold'>Join the school's volunteer club</p>
                  <p className='text-gray-500'>2020-2022</p>
                </div>
                <div className='pt-3'>
                  <p>Night distribution for the homeless.</p>
                </div>
              </div>
            </div>

            <div>
              <div className='text-[#059341] font-bold py-4'>Work experience</div>
              <div className='border-b-[1px] border-[#FB9F21] pb-10'>
                <div>
                  <p className='font-bold'>Front End Developer</p>
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-gray-500'>PTIT</p>
                  <p>Having good ability on implement algorithms, for implementation new feature</p>
                  <p>
                    Experienced with React Hook, Next js, html, css, scss, JavaScript. Have
                    experience tools: Microsoft Office Word, Excel, PowerPoint, Visual Studio
                    CodeSpecial Tools: Jira, Git.
                  </p>
                  <p>Experienced implement responsive web app support for multiples devices.</p>
                  <p>
                    Used to run an associated book and author list API using Express, MongoDB,
                    Postman.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className='text-[#059341] font-bold py-4'>Honors & Awards</div>
              <div className='border-b-[1px] border-[#FB9F21] pb-10'>
                <div>
                  <p className='font-bold'>None</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </main>
  );
};
export default BasicTab;
