import Foot from "@/components/Foot";
import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import payment from "@/assets/payment.png";
import Navbar2 from "@/components/navbar/Navbar2";

const registration = () => {
  return (
    <>
      <Head>
        <title>Registration </title>
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
      <div className="mx-[2rem]  rounded-lg justify-center flex flex-col border-primary shadow-2xl mt-[5rem] sm:mt-[2rem] sm:mx-[0rem] sm:p-4 sm:h-auto">
        <div className="flex justify-between">
          <h2 className="text-primary font-bold p-4 py-4 sm:p-2 flex text-4xl sm:text-xl">
            Registration Guidelines
          </h2>
          <button className="m-2 sm:w-32">
            <a
              className="bg-red text-primary-light hover:shadow-md rounded-md active:-translate-y-1 delay-100 font-bold p-4 sm:p-2 text-sm sm:text-xs"
              href="https://forms.gle/G2CFpZwCqKG9rZZ99"
            >
              Register Now
            </a>
          </button>
        </div>
        <div className="p-4 mt-2 ml-[2rem] sm:ml-[1rem] text-sm sm:text-xs">
          <li>
            Please note that at least one registration among the authors of EACH
            accepted paper is compulsory for the paper presentation and its
            inclusion in the Conference proceeding.
          </li>
          <li>
            To motivate the student authors, multiple author(s) registration
            from a paper is allowed by paying the respective registration fee,
            separately as per their applicable category
          </li>
          <li>
            Registration fee is non-refundable and non-transferable.in all
            circumstances, unless paid (a) multiple times or (b) more than the
            defined amount.
          </li>
          <li>
            All the delegates/authors must carry at least one original & valid
            ID card with them at the Online platform used for the Conference
          </li>

          <li>
            If multiple authors of a paper wish to attend the conference,
            separate registration will be mandatory for each author.
          </li>
          <li>
            If an author has got more than one accepted papers, each paper has
            to be registered separately.
          </li>
          <li>
            It is mandatory to present the paper during conference for
            submission to Springer.
          </li>
          <li>
            Only registered authors can participate in conference and present
            their papers.
          </li>
          <li>
            Certificate of Presentation will be issued to the registered author
            only.
          </li>
          <li>
            In case the registered author is unable to present the paper,
            another co-author can present (With prior intimation). In such cases
            certificate and registration kit will be provided to the presenter
            only.
          </li>
          <li>
            Organizing Committee reserves the right at all times to make any
            changes to the BITCON-2024 Conference Program/Schedule in its sole
            discretion.
          </li>
          <li>
            Organizing Committee will not assume any responsibility whatsoever
            for any damage or injury to persons or property during the
            Conference.
          </li>
          <li>
            For student/research scholars registration, only full time research
            scholars and students will be considered. Students should send the
            scanned copy of the Identity Card along with the registration form.
          </li>
          <li>
            Accepted, registered, and presented papers will be submitted to IEEE
            for publication in IEEEXplore indexed in SCOPUS. IEEE will conduct
            quality checks on the accepted papers and only papers that pass
            these checks will be published.
          </li>
        </div>

        {/* <li></li> */}
        <div className="flex flex-col sm:overflow-scroll  justify-center">
          <div className="flex ">
            <p className="text-primary ml-[3.5rem] text-center text-lg font-bold p-4 flex  sm:text-sm">
              The authors are requested to pay the registration fee according to
              their applicable category as mentioned below:
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4 items-center text-center">
              registration Fees
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full border-collapse sm:text-xs">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Indian Authors</th>
                    <th className="border px-4 py-2">IEEE Members</th>
                    <th className="border px-4 py-2">Non-IEEE Members</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      Researcher (UG, PG, PhD)
                    </td>
                    <td className="border px-4 py-2">₹ 4,000/-</td>
                    <td className="border px-4 py-2">₹ 5,000/-</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Academicians</td>
                    <td className="border px-4 py-2">₹ 5,000/-</td>
                    <td className="border px-4 py-2">₹ 6,000/-</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Industry</td>
                    <td className="border px-4 py-2">₹ 9,000/-</td>
                    <td className="border px-4 py-2">₹ 10,000/-</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Non-Authors</td>
                    <td className="border px-4 py-2">₹ 3,000/-</td>
                    <td className="border px-4 py-2">₹ 3,500/-</td>
                  </tr>
                </tbody>
              </table>
              <table className="table-auto min-w-full mt-[2rem] border-collapse  sm:text-xs">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Foreign Authors</th>
                    <th className="border px-4 py-2">IEEE Members</th>
                    <th className="border px-4 py-2">Non-IEEE Members</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      Researcher / Academicians / Industry
                    </td>
                    <td className="border px-4 py-2">$ 130</td>
                    <td className="border px-4 py-2">$ 150</td>
                  </tr>
                </tbody>
              </table>
              <table className="border-collapse w-full mt-8  sm:text-xs">
          <tbody>
            <tr>
              <td
                colSpan="4"
                className="text-primary text-center text-xl sm:text-sm font-bold p-4"
              >
                Account Details for Payment of the Registration Fee:
              </td>
            </tr>
            <tr>
              <td className="border-2 border-primary p-2">Bank</td>
              <td className="border-2 border-primary p-2">
                State Bank of India
              </td>
              <td className="border-2 border-primary p-2">Account no:</td>
              <td className="border-2 border-primary p-2 ">42663611130</td>
            </tr>
            <tr>
              <td className="border-2 border-primary p-2">Account Name</td>
              <td className="border-2 border-primary p-2 ">BITCON 2024</td>
              <td className="border-2 border-primary p-2">IFSC Code</td>
              <td className="border-2 border-primary p-2">SBIN0011812</td>
            </tr>
            <tr>
              <td className="border-2 border-primary p-2">Account Type</td>
              <td className="border-2 border-primary p-2">Current Account</td>
              <td className="border-2 border-primary p-2">MICR Code</td>
              <td className="border-2 border-primary p-2 invisible">
                Account no:
              </td>
            </tr>
          </tbody>
        </table>
            </div>
          </div>
        </div>
  
        <div className="p-4 mt-5 text-center flex gap-3 flex-wrap items-center">
          <Image src={payment} className="h-[3rem] w-[auto] sm:h-[1.5rem]" />
          <h1 className="font-bold text-xl items-center">
            Payment Instructions
          </h1>
        </div>
        <div className="p-4 mt-5 sm:mt-3 text-start flex gap-3 flex-wrap items-start">
          <ul className="text-sm sm:text-xs flex-col gap-4">
            <li>
              <span className="font-bold">Step 1: </span>
              Open{" "}
              <a
                href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
                className="text-blue text-wrap"
              >
                {" "}
                Click Here to Pay
              </a>
            </li>
            <li>
              <span className="font-bold">Step 2:</span>
              Select Education instutions
            </li>
            <li>
              <span className="font-bold">Step 3:</span>
              Filter by state: Select Jharkhand
            </li>
            <li>
              <span className="font-bold">Step 4:</span>
              From educational institutions select{" "}
              <span className="font-bold"> "Director BIT Sindri"</span>
            </li>
            <li>
              <span className="font-bold">Step 5:</span>
              Payment category - <span className="font-bold"> BITCON-2024</span>
            </li>
            <li>
              <span className="font-bold">Step 6:</span>
              Fill details and proceed for payment
            </li>
          </ul>
        </div>

        <div className="mt-8 mb-4 sm:mt-4 ml-5">
          <p className="text-sm sm:text-xs">
            Authors are required to mention their Easy Chair “Paper ID” without
            error in remark section, while paying the registration fee. Please
            fill the registration form at{" "}
            <span className="text-blue"><a href="#">Google Form Link</a></span> and upload all the relevant
            documents as asked in the google form, e.g., fee payment receipt,
            student’s (1st author’s) ID card, IEEE membership card (if
            applicable), etc
          </p>
          <ul className="list-disc ml-5 mt-2 text-sm sm:text-xs">
            <li>Registration deadline is 31.08.2024.</li>
            <li>Late registration is not allowed.</li>
          </ul>
        </div>
      </div>
      <Foot />
      
    </>
  );
};

export default registration;
