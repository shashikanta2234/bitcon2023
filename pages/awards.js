import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Navbar2 from "@/components/navbar/Navbar2";
import Foot from "@/components/Foot";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import StickyBar from "@/components/StickyBar";
const awards = () => {
  return (
    <>
      {" "}
      <Head>
        <title>Awards</title>
        <meta
          name="description"
          content="Birla Institute of Technology Sindri (BIT Sindri) is a renowned engineering college located in Sindri, Jharkhand, India. Established in 1949, the institute offers undergraduate and postgraduate programs in various fields of engineering and technology. BIT Sindri is known for its quality education, highly qualified faculty, and strong alumni network. Its graduates have made significant contributions to various sectors around the world. Overall, BIT Sindri is a premier institution that has been at the forefront of technical education in India for over seven decades."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <div className=" flex flex-col ">
        <Navbar2 />
        <Nav3 />
        <section className="mt-8 sm:mt-4 mb-12 container-70">
          <div className="w-full text-center">
            <h1 className="text-4xl sm:text-2xl text-[#002E73] font-bold">
              Awards ✨
            </h1>
          </div>
          <div className="mx-[2rem]  rounded-lg justify-center flex flex-col border-primary shadow-2xl sm:mt-0 mt-[0.5rem] sm:mx-[0rem] sm:p-4 sm:h-auto">
            <div className="p-4 flex flex-col gap-2 flex-wrap items-start">
              <h1 className="font-bold text-xl sm:text-lg items-center">
                Best Paper Awards:
              </h1>
              <div className=" mb-4 sm:mb-0 ml-2">
                <p className="text-sm sm:text-xs text-justify">
                  The Best Conference Paper will be chosen by a committee based
                  on its originality and contribution to the field. A Best Paper
                  Award will be presented for each conference track. Award
                  recipients will be notified via their registered email
                  addresses one month after the conference, and an electronic
                  certificate will be issued accordingly.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0 flex flex-col gap-2 flex-wrap items-start">
              <h1 className="font-bold text-xl items-center sm:text-lg ">
                Thesis Awards:
              </h1>
              <div className="mb-4 ml-2">
                <p className="text-sm sm:text-xs text-justify">
                  At BITCON-24, we are providing awards for MTech and PhD theses
                  awarded between January 1, 2023 to October 31, 2024. A
                  committee constituted for the same will evaluate the thesis
                  for its originality, contribution to the field and quality of
                  publications emanating from the thesis. Candidates wishing to
                  submit the thesis for awards should register for the
                  conference and ensure that the thesis in pdf format, first
                  pages of publications resulting from thesis work (merged into
                  a single file), scanned copy of PC/Degree certificate and
                  proof of registration are available before submitting the
                  thesis through the google form.
                </p>
                <p className="text-sm sm:text-xs text-justify mt-2">
                  <span className="font-semibold">Important Note:</span> The
                  Conference Committee hereby declares that the submitted thesis
                  will be utilized solely for the evaluation purposes related to
                  the "Best Thesis Award." During the evaluation process, the
                  thesis will not be uploaded in any kind of online repository.
                  Upon conclusion of the conference, the thesis will be
                  permanently deleted from our database.
                </p>
                <p className="text-sm sm:text-xs mt-1">
                  Google form for submitting the thesis for Awards:{" "}
                  <a
                    href="https://forms.gle/EZ1jBXaDcgU5MeUf6"
                    target="_blank"
                    className="text-blue-600"
                  >
                    {" "}
                    Google Form Link
                  </a>
                </p>
                <p className="text-sm sm:text-xs mt-4 font-semibold">
                  The following points are to be noted before registration for
                  awards:
                </p>
                <ul className="list-decimal ml-5 mt-2 text-sm sm:text-xs text-justify">
                  <li>
                    MTech/PhD Thesis awarded during January 1, 2023 to October
                    31, 2024 are only considered.
                  </li>
                  <li>Thesis submitted cases are not considered.</li>
                  <li>
                    The candidates who submit their thesis should register for
                    conference by paying the registration fee.
                  </li>
                  <li>
                    For registration please visit:{" "}
                    <a
                      href="https://bitcon2024.bitsindri.ac.in/registration"
                      target="_blank"
                      className="text-blue-600"
                    >
                      {" "}
                      Click Here
                    </a>
                  </li>
                  <li>
                    Registration fee once paid cannot be refunded under any
                    circumstances. Hence, the candidates submitting the thesis
                    should ensure that the degree (MTech/PhD) got awarded is
                    within the prescribed duration.
                  </li>
                  <li>
                    Authors who have registered for the conference for paper
                    presentation should register separately for the thesis
                    awards, if they wish to submit their thesis for award
                    scrutiny.
                  </li>
                  <li>
                    Candidates who have registered for thesis awards should
                    register separately for the conference for paper
                    presentation, if they wish to present a paper in the
                    conference.
                  </li>
                  <li>
                    It is not mandatory for the candidates registering for
                    thesis awards to present a paper in the conference and
                    vice-versa.
                  </li>
                  <li>
                    Only published papers which are available online will be
                    considered for grading the thesis.
                  </li>
                  <li>
                    The published research papers submitted should be related to
                    the thesis. The methods/results shown in the paper should
                    reflect in the thesis
                  </li>
                  <li>
                    Papers communicated/published based on the thesis along with
                    the supervisors name, during the tenure of the MTech/PhD
                    program will be considered for grading the thesis.
                  </li>

                  <li>
                    Papers communicated during the tenure of the program,
                    published after the awarded of the degree shall be
                    considered, however, methods/results shown in the paper
                    should reflect in the thesis and such papers should also
                    bear the name of the thesis supervisor.
                  </li>
                  <li>
                    MTech and PhD theses will be scrutinized separately by the
                    committee members.
                  </li>
                  <li>
                    The thesis shall be deemed to be disqualified if at any
                    stage it is found that the candidate has provided wrong or
                    false information.
                  </li>
                  <li>
                    In case of any dispute, the decision of the conference
                    committee members will be considered final.
                  </li>
                  <li>
                    For any further clarifications, candidates can contact us as
                    per the contact details shared on our webpage and brochure.
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="p-4 pt-0 flex flex-col gap-2 flex-wrap items-center"
              id="ac"
            >
              <h1 className="font-bold text-xl items-center sm:text-lg ">
                Criterion for Best Paper Award in Each Track
              </h1>
              <div className="mb-4 ml-2">
                <p className="sm:text-sm text-base mt-4 font-semibold text-center">
                  Marking scheme for Best Paper Award in Each Track
                </p>
                <table className="" id="">
                  <thead>
                    <tr className="text-sm sm:text-xs ">
                      <th className="w-max">Sr. No.</th>
                      <th>Criteria</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-sm sm:text-xs ">
                      <td>1</td>
                      <td>Appropriateness to the Conference</td>
                    </tr>
                    <tr className="text-sm sm:text-xs ">
                      <td>2</td>
                      <td>Originality / Novelty</td>
                    </tr>
                    <tr className="text-sm sm:text-xs ">
                      <td>3</td>
                      <td>
                        Title and Abstract clearly communicate scope and
                        outcomes
                      </td>
                    </tr>
                    <tr className="text-sm sm:text-xs ">
                      <td>4</td>
                      <td>
                        Crucial previous work is described and referenced, with
                        clear research scope and objectives
                      </td>
                    </tr>
                    <tr className="text-sm sm:text-xs ">
                      <td>5</td>
                      <td>Description of Concepts and Technical Details</td>
                    </tr>
                    <tr className="text-sm sm:text-xs ">
                      <td>6</td>
                      <td>
                        Methodology and data are appropriate for research scope
                        and related to findings
                      </td>
                    </tr>
                    <tr className="text-sm sm:text-xs ">
                      <td>7</td>
                      <td>
                        Results are properly described, visualized, and
                        discussede
                      </td>
                    </tr>
                    <tr className="text-sm sm:text-xs ">
                      <td>8</td>
                      <td>
                        Easiness of reading, including language, with sufficient
                        length for the topic studiede
                      </td>
                    </tr>
                    <tr className="text-sm sm:text-xs ">
                      <td>9</td>
                      <td>Presentation / Editorial Quality</td>
                    </tr>
                    <tr className="text-sm sm:text-xs ">
                      <td>10</td>
                      <td>Overall</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <Foot />
      </div>
      <StickyBar />
    </>
  );
};

export default awards;
