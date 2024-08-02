import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";
import Nav3 from "@/components/home/Nav3";
import Image from "next/image";
import about from "@/assets/Electrical.jpg";
import vision from "@/assets/vision.jpg";
import Foot from "@/components/Foot";

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
      <Navbar />
      <Nav3 />
      <div className="flex justify-center">
        <div className="flex flex-row sm:flex-col mt-[3rem] sm:mt-0 w-[90%] sm:w-[100%]  p-4 sm:gap-0 justify-center">
          <div className=" sm:w-[100%]  w-[50%]">
            <div className="flex">
              {/* <Image src={engineers} className=" h-[3rem] w-[3rem]" /> */}
              <h1 className="font-bold text-4xl mr-8  sm:text-2xl text-[#002256]">
                About Electrical Engineering Department
              </h1>
            </div>
            <p className="text-left text-sm sm:text-xs overflow-auto  mt-[2rem]   sm:mt-5">
              The Department of Electrical Engineering is one of the major
              Departments of BIT Sindri since its inception in 1949. The
              department offers four years B.Tech. degree course and two years
              postgraduate program is also offered leading to M.Tech. degree
              with specialization in Control System and Power System.
            </p>
            <p className="text-left overflow-auto text-sm sm:text-xs   mt-[2rem]  sm:mt-3">
              {" "}
              The Department has continuously evolved along with the needs of
              industry and academia without compromising on its core principles
              reflected in the Vision and Mission of the Department. Outcome
              based teaching learning process has been successfully adopted by
              the Department. The Department has a healthy blend of young and
              experienced faculty members, all of whom display high levels of
              enthusiasm and dedication. Apart from teaching and research, the
              faculties are actively engaged in upgrading their technical and
              pedagogical skills by attending relevant training programs as and
              when needed.
              {/* BIT Sindri is a premier technical institution offering undergraduate{" "}
            <br />
            and postgraduate courses in various disciplines of engineering{" "}
            <br />
            approved by AICTE, New Delhi. It is wholly owned and administered by{" "}
            <br />
            the Department of Science and Technology, Govt of Jharkhand, Ranchi.{" "}
            <br /> <br />
            BIT Sindri aims to provide valuable human resources for industry and{" "}
            <br />
            society through excellence in technical education and research for{" "}
            <br />
            sustainable development. */}
            </p>
          </div>
          <Image src={about} className=" w-[50%] sm:w-[100%] sm:mt-5" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-auto rounded-lg justify-center flex flex-col  shadow-2xl mt-[5rem] sm:mt-8 p-4 ">
          <h1 className="text-4xl sm:text-2xl text-center font-bold text-[#002256]">
            Vision & Mission
          </h1>

          <p className=" text-sm sm:text-xs mx-8 mt-[2rem] p-2 font-thin sm:mt-4">
            To emerge as a globally recognized centre in the field of Electrical
            Engineering to provide valuable human resource and ambience for
            innovative research for sustainable development of industry and
            society.
          </p>
          <h2 className="text-2xl sm:text-lg mt-[3rem] text-center font-bold text-[#002256] sm:mt-2 ">
            The BIT Sindri functions with the following missions:
          </h2>

          <ul className="text-left ml-[4rem] mt-5 mx-8 font-thin  text-sm sm:text-xs  sm:ml-[1rem] text-justify">
            <li>
              1. To offer state-of-the-art undergraduate, post graduate and
              doctorate programmes by providing a conducive environment towards
              outcome-based teaching learning process with knowledge and skill
              creation, suitable for contemporary and future needs of industry.
            </li>
            <li>
              2. To promote creative ambience in order to generate new knowledge
              by conducting quality research in collaboration with Electrical,
              Electronics and allied industries.
            </li>
            <li>
              3. To bridge the gap between industry and academia by framing
              curriculum and syllabi based on industrial and societal needs so
              that competency of the students matches the upcoming challenges in
              education, profession and life.
            </li>
            <li>
              4. To instil moral and ethical values among the students through
              holistic personality development so as to ensure human
              intellectual capacity to its full potential.
            </li>
            <li>
              5. To provide consultancy services to industries and organizations
            </li>
          </ul>
        </div>
      </div>

      <Foot />
    </>
  );
};

export default institute;
