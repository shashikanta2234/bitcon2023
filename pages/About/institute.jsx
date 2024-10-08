import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";
import Nav3 from "@/components/home/Nav3";
import Image from "next/image";
import about from "@/assets/about.jpg";
import college from "@/assets/institute.png";
import mission from "@/assets/mission.jpg";
import classroom from "@/assets/classroom.png";
import seo from "@/assets/seo.png";
import knowledge from "@/assets/knowledge.png";
import factory from "@/assets/factory.png";
import conversation from "@/assets/conversation.png";
import Link from "next/link";

import Foot from "@/components/Foot";
import Navbar2 from "@/components/navbar/Navbar2";
import StickyBar from "@/components/StickyBar";

const institute = () => {
  return (
    <>
      <Head>
        <title>About || Institute</title>
        <meta
          name="description"
          content="Birla Institute of Technology Sindri (BIT Sindri) is a renowned engineering college located in Sindri, Jharkhand, India. Established in 1949, the institute offers undergraduate and postgraduate programs in various fields of engineering and technology. BIT Sindri is known for its quality education, highly qualified faculty, and strong alumni network. Its graduates have made significant contributions to various sectors around the world. Overall, BIT Sindri is a premier institution that has been at the forefront of technical education in India for over seven decades."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <Navbar2 />
      <Nav3 />
      <div className="flex flex-row sm:flex-col  gap-[10rem] sm:gap-0 justify-center ">
        <div className="flex justify-center items-center">
          <div className="flex flex-row  mx-4  sm:mx-4 sm:flex-col mt-[1.5rem] gap-4 sm:gap-2 justify-center rounded-lg">
            <div className="text-center flex flex-col  w-[50%] sm:w-full p-4 shadow-md rounded-lg">
              <div className="flex items-center  justify-center gap-5">
                <Image
                  src={college}
                  alt="institute"
                  className="h-[3rem] w-[auto] sm:h-[2rem]"
                />
                <h1 className="font-bold text-4xl sm:text-2xl text-[#002256]">
                  About BIT Sindri
                </h1>
              </div>
              <p className="text-justify overflow-auto mt-[0.5rem] sm:mt-0 bg-primary-light bg-opacity-20 text-sm sm:text-xs">
                BIT Sindri, also known as Birsa Institute of Technology Sindri,
                is a premier engineering college located in Sindri, Jharkhand,
                India. Established in 1949, the college has a long and rich
                history of providing high-quality engineering education to
                students from across the country. BIT Sindri offers
                undergraduate and postgraduate programs in various branches of
                engineering, including chemical, mechanical, electrical, civil,
                metallurgy, and more. The college has state-of-the-art
                facilities, including well-equipped laboratories, a modern
                library, and a large campus with facilities for sports and
                extracurricular activities. Over the years, BIT Sindri has
                produced several notable alumni who have made significant
                contributions to various fields of science, technology, and
                industry, both in India and abroad. With its commitment to
                academic excellence and emphasis on practical learning, BIT
                Sindri continues to be a top choice for engineering aspirants in
                India
              </p>
            </div>
            <div className="w-auto">
            <Image
              src={about}
              className="rounded-xl aspect-video mr-[1rem] sm:rounded-none sm:mr-0 sm:p-0 sm:m-0"
            />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-auto mx-8 sm:mx-4 rounded-lg bg-primary-light justify-center flex flex-col border-primary shadow-2xl mt-[1rem]  items-center sm:h-auto sm:w-[100%] p-4">
          <h1 className="text-4xl sm:text-2xl text-center font-bold text-[#002256]">
            Vision & Mission
          </h1>
          <p className="mt-[0.5rem] text-sm text-justify bg-opacity-20 sm:text-xs p-2 ">
            The vision of BIT Sindri is to nurture talented and skilled human
            resources. Through the best technical education and research, we
            hope to train individuals for professional roles in industry and
            society who will contribute to the nation’s sustainable development.
          </p>
          <Image
            src={mission}
            alt="mission"
            className="w-[32rem] sm:w-[100%] h-[auto]"
          />

          <h2 className="text-lg sm:text-sm mt-[1rem] text-center font-bold text-[#002256] sm:mt-0 ">
            The BIT Sindri functions with the following missions:
          </h2>
          <ul className="text-left text-sm gap-0 sm:text-xs font-thin mt-[0.5rem]">
            <li className="flex gap-3 items-center">
              <Image
                src={classroom}
                alt="classroom"
                className="h-[1rem] w-[auto]"
              />
              <p>
                To provide quality education to students in various disciplines
              </p>
            </li>
            <li className="flex gap-3 mt-[0.4rem] items-center">
              <Image src={seo} alt="classroom" className="h-[1rem] w-[auto]" />
              To promote research and development in science and technology
            </li>
            <li className="flex gap-3 mt-[0.4rem] items-center">
              <Image
                src={knowledge}
                alt="classroom"
                className="h-[1rem] w-[auto]"
              />{" "}
              To provide opportunities for students to develop their
              personalities and leadership skills
            </li>
            <li className="flex gap-3 mt-[0.4rem] items-center">
              <Image
                src={factory}
                alt="classroom"
                className="h-[1rem] w-[auto]"
              />{" "}
              To promote industry-institute interaction and collaboration
            </li>
            <li className="flex gap-3 mt-[0.4rem] items-center">
              <Image
                src={conversation}
                alt="classroom"
                className="h-[1rem] w-[auto]"
              />{" "}
              To provide consultancy services to industries and organizations
            </li>
          </ul>
        </div>
      </div>
      <Foot />
      <StickyBar />
    </>
  );
};

export default institute;
