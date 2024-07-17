import Link from "next/link";
// import ImageWithBlurhash from "@/components/ImageWithBlurhash";
import React, { useState, useEffect } from 'react'; 
import { FaLifeRing, FaPhoneAlt, FaHeartbeat, FaPiggyBank, FaChartLine } from 'react-icons/fa';
import { PiLineVerticalBold } from "react-icons/pi";
import { MdOutlineHorizontalRule } from "react-icons/md";


// import data from '@/data.json'


export default function Home() {
  // const [services, setServices] = useState([]);


  // useEffect(() => {
  //   setServices(data);
  // }, []);






  return (
    <main>
     <section data-aos="fade">
      <div className="min-h-screen relative overflow-hidden flex hero">
        <img
          src="https://maxliving.com/wp-content/uploads/2020/07/Healthyfamily.jpg"
          alt="Healthy Family"
           data-aos="fade-left"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 opacity-75"></div>
        <div className="relative mx-auto md:py-4 py-12 px-4 md:px-8 pt-18 pb-10 flex flex-wrap justify-center items-center">
          <div  data-aos="fade-right" className="w-full md:w-7/12 px-4 flex flex-wrap justify-content-center">
            <h1 className="text-4xl text-base-100 bg-base-content bg-opacity-60 py-2 px-4 font-bold text-left mb-8">
              Empowering your Healthy Lifestyle
            </h1>
            <h2 className="text-base-100 bg-base-content bg-opacity-50 py-2 px-4 text-xl mb-8">
              We are a team of health and wellness professionals who are passionate about helping you achieve your health goals
            </h2>
            <div className="flex justify-left">
              <Link data-aos="flip-right" href="/contact">
                <button className="btn btn-primary">
                  <FaPhoneAlt /> Contact us
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-5/12 px-4 md:py-4 py-12">
            {/* <div className="bg-base-300 rounded-lg p-8">
              <ContactForm />
            </div> */}
          </div>
        </div>
      </div>
    </section>

      {/* <section className="py-4 px-4 sm:px-6 lg:px-8 bg-base-200">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="py-6" data-aos="fade">
            <h1 className="block text-3xl font-bold sm:text-4xl md:text-4xl lg:text-4xl ">
              Rohit Maurya [Developer & Trainer]
            </h1>
            <p data-aos="flip-left" className="my-3 text-lg">
              I am a passionate developer with a strong zeal to work with
              emerging startups. I love to work with the latest technologies and
              build modern and blazing fast websites.
            </p>

            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <Link
                href={
                  "/thoughts/" +
                  "why-did-i-choose-to-become-an-educator-than-an-employee"
                }
              >
                <button data-aos="flip-left" className="btn btn-primary">
                  Know More
                </button>
              </Link>
            </div>

          </div>
         

          <div className="my-10" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section> */}

      <section className="py-12">
      <div data-aos="fade" className="container px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div data-aos="fade-down-right" className="lg:w-1/2  lg:mb-0 lg:pr-8 flex lg:justify-end">
          <h2 className="text-2xl font-bold text-primary mb-4">WHO WE ARE</h2>
        </div>
        <div className="lg:hidden flex items-center justify-center mb-4">
          <MdOutlineHorizontalRule size={32} className="text-secondary mx-4" />
        </div>
        <div className="hidden lg:flex lg:flex-col md:px-2 items-center lg:justify-center mb-4">
          <PiLineVerticalBold size={48} className="text-secondary mb-4" />
        </div>
        <div data-aos="fade-down-left" className="md:px-4 lg:w-1/2">
          <p className="text-base-900">
            UK Nair & Associates is an insurance agency focused on providing financial services to the general public. Our mission is to be the best at what we do by providing unconditional support and services to small NGOs in the field of fundraising, health, and life insurance. We're just getting started, but we have big things planned for the future!
          </p>
        </div>
      </div>
    </section>

      {/* <section className="my-10">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="group perspective">
              <div className="relative w-full h-64 bg-base-100 max-w-xs mx-auto shadow-lg rounded-lg [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                <div className="absolute w-full h-full backface-hidden">
                  <div className="py-4 px-6">
                    <h2 className="flex items-center text-2xl font-bold sm:text-3xl lg:text-4xl lg:leading-tight text-transparent bg-gradient-to-r bg-clip-text from-primary to-secondary animate-text">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-lg text-gray-300">
                      {service.backDetails}
                    </p>
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-base-200">
                  <div className="py-4 px-6 flex items-center justify-center h-full">
                    <ul className="mt-2 text-sm text-gray-200">
                      {service.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      {/* <section>
        <div
  data-aos="fade"
  className="bg-gradient-to-r from-primary to-secondary overflow-hidden"
>
  <div className="max-w-[95rem] px-4 py-10 sm:px-6 md:px-8 md:py-14 mx-auto">
   
    <div className="mt-5 md:my-8 grid md:grid-cols-3 gap-8 md:gap-12">
      <div className="md:col-span-1">
        <h2 className="font-bold text-2xl md:text-7xl text-base-100">
          Our Services
        </h2>
        <p className="mt-2 md:mt-4 text-base-200">
          {`We offer different services for different requirements.`}
        </p>
      </div>
    
      <div className="md:col-span-2">
        <div className="grid sm:grid-cols-2 gap-8 md:gap-8">
          
          <div className="group perspective">
            <div
              data-aos="flip-right"
              className="flex bg-base-200 rounded-lg p-6 gap-x-5 relative max-w-lg mx-auto shadow-lg [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
            >
              <div className="w-full h-full backface-hidden">
                <svg
                  className="flex-shrink-0 mt-1 size-6 text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width={18} height={10} x={3} y={11} rx={2} />
                  <circle cx={12} cy={5} r={2} />
                  <path d="M12 7v4" />
                  <line x1={8} x2={8} y1={16} y2={16} />
                  <line x1={16} x2={16} y1={16} y2={16} />
                </svg>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-primary">
                    Life Insurance
                  </h3>
                  <p className="mt-2 text-base-200">
                    Frontside content for Life Insurance
                  </p>
                </div>
              </div>
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-base-200">
                <div className="py-4 px-6 flex items-center justify-center h-full">
                  <ul className="mt-2 text-sm text-gray-200">
                    <li>Term Insurance</li>
                    <li>Endowment Insurance</li>
                    <li>Money Back Plans</li>
                    <li>Single Premium Plans</li>
                    <li>ULIP</li>
                    <li>Pension</li>
                    <li>Index Funds</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
                
                <div className="group perspective">
                  <div
                    data-aos="flip-right"
                    className="flex bg-base-200 rounded-lg p-6 gap-x-5 relative max-w-lg mx-auto shadow-lg [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
                  >
                    <div className="w-full h-full backface-hidden">
                      <svg
                        className="flex-shrink-0 mt-1 size-6 text-secondary"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 3h-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2H3v18h18V3z" />
                        <circle cx={12} cy={8} r={3} />
                        <path d="M16 21v-4a4 4 0 0 0-8 0v4" />
                      </svg>
                      <div className="grow">
                        <h3 className="text-lg font-semibold text-primary">
                          Health Insurance
                        </h3>
                        <p className="mt-1">
                          Frontside content for Health Insurance
                        </p>
                      </div>
                    </div>
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-base-200">
                      <div className="py-4 px-6 flex items-center justify-center h-full">
                        <ul className="mt-2 text-sm text-gray-200">
                          <li>Health policy</li>
                          <li>Travel Policy</li>
                          <li>Enhance Top Up</li>
                          <li>Maternity Insurance</li>
                          <li>
                            Exclusive Policy which Covers PED from 30 Days
                          </li>
                          <li>Critical Care - Cancer, Heart etc.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group perspective">
                  <div
                    data-aos="flip-right"
                    className="flex bg-base-200 rounded-lg p-6 gap-x-5 relative max-w-lg mx-auto shadow-lg [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
                  >
                    <div className="w-full h-full backface-hidden">
                      <svg
                        className="flex-shrink-0 mt-1 size-6 text-secondary"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 3h-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2H3v18h18V3z" />
                        <circle cx={12} cy={8} r={3} />
                        <path d="M16 21v-4a4 4 0 0 0-8 0v4" />
                      </svg>
                      <div className="grow">
                        <h3 className="text-lg font-semibold text-primary">
                        Financial Consultancy
                        </h3>
                        <p className="mt-1">
                          Frontside content for Health Insurance
                        </p>
                      </div>
                    </div>
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-base-200">
                      <div className="py-4 px-6 flex items-center justify-center h-full">
                        <ul className="mt-2 text-sm text-gray-200">
                          <li>Income Tax Return</li>
                          <li>GST Return filing of Individuals & Partnership Firms</li>
                          <li>Tax Planning</li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group perspective">
                  <div
                    data-aos="flip-right"
                    className="flex bg-base-200 rounded-lg p-6 gap-x-5 relative max-w-lg mx-auto shadow-lg [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
                  >
                    <div className="w-full h-full backface-hidden">
                      <svg
                        className="flex-shrink-0 mt-1 size-6 text-secondary"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 3h-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2H3v18h18V3z" />
                        <circle cx={12} cy={8} r={3} />
                        <path d="M16 21v-4a4 4 0 0 0-8 0v4" />
                      </svg>
                      <div className="grow">
                        <h3 className="text-lg font-semibold text-primary">
                        Demat Account
                        </h3>
                        <p className="mt-1">
                          Frontside content for Health Insurance
                        </p>
                      </div>
                    </div>
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-base-200">
                      <div className="py-4 px-6 flex items-center justify-center h-full">
                        <ul className="mt-2 text-sm text-gray-200">
                          <li>Open a Free Demat A/c Of Angel One with us</li>
                          <li>Invest In stocks</li>
                          <li>MF</li>
                          <li>Sovereign Gold Bonds</li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section> */}
      <section>
      <div className="bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 md:px-8 md:py-14 mx-auto">
          
          {/* Grid */}
          <div className="mt-5 md:my-8 grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <h2 className="font-bold text-2xl md:text-7xl text-base-100">
                Our Services
              </h2>
              <p className="mt-2 md:mt-4 text-base-200">
            {`In addition to collaborating with emerging businesses to drive digital transformation, we've developed enterprise-grade solutions to address common challenges encountered across diverse products and projects.`}
              </p>
            </div>
            {/* End Col */}
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8 md:gap-8">
                {/* Icon Block */}
                <div data-aos="flip-right" className="flex bg-base-200 rounded-lg p-4 gap-x-5">
                  {/* <svg
                    className="flex-shrink-0 mt-1 size-6 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width={18} height={10} x={3} y={11} rx={2} />
                    <circle cx={12} cy={5} r={2} />
                    <path d="M12 7v4" />
                    <line x1={8} x2={8} y1={16} y2={16} />
                    <line x1={16} x2={16} y1={16} y2={16} />
                  </svg> */}
                  <FaLifeRing className="text-secondary" size={32} />
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-primary">
                    Life Insurance
                    </h3>
                    <ul className="mt-1 text-sm text-base-900">
                          <li>Term Insurance</li>
                          <li>Endowment Insurance</li>
                          <li>Money Back Plans</li>
                          <li>Single Premium Plans</li>
                          <li>ULIP</li>
                          <li>Pension</li>
                          <li>Index Funds</li>
                        </ul>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div data-aos="flip-right" className="flex gap-x-5 bg-base-200 rounded-lg p-4">
                  {/* <svg
                    className="flex-shrink-0 mt-1 size-6 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg> */}
                  <FaHeartbeat className="text-secondary" size={32} />
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-primary">
                    Health Insurance
                    </h3>
                    <ul className="mt-1 text-sm text-base-900">
                                <li>Health policy</li>
                                <li>Travel Policy</li>
                                <li>Enhance Top Up</li>
                                <li>Maternity Insurance</li>
                                <li>Exclusive Policy which Covers PED from 30 Days</li>
                                <li>Critical Care - Cancer, Heart etc.</li>
                              </ul>
                
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div data-aos="flip-right" className="flex gap-x-5 bg-base-200 rounded-lg p-4">
                  {/* <svg
                    className="flex-shrink-0 mt-1 size-6 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg> */}
                  <FaPiggyBank className="text-secondary" size={32} />
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-primary">
                    Financial Consultancy
                    </h3>
                    <ul className="mt-2 text-sm text-base-900">
                                <li>Income Tax Return</li>
                                <li>GST Return filing of Individuals & Partnership Firms</li>
                                <li>Tax Planning</li>
                              </ul>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div data-aos="flip-right" className="flex gap-x-5 bg-base-200  rounded-lg p-4">
                  {/* <svg
                    className="flex-shrink-0 mt-1 size-6 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg> */}
                  <FaChartLine className="text-secondary" size={32} />
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-primary">
                    Demat Account
                    </h3>
                    <ul className="mt-2 text-sm text-base-900">
                                <li>Open a Free Demat A/c Of Angel One with us</li>
                                <li>Invest In stocks</li>
                                <li>MF</li>
                                <li>Sovereign Gold Bonds</li>
                                
                              </ul>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>

      </div>
      </section>
      
      <section id="services" className="py-8 md:px-4">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="lg:text-center">
          <h2 className="text-primary font-bold md:text-3xl tracking-wide uppercase">
            Why us ?
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Simply the best in our field
          </p>
          <p className="mt-4 max-w-7xl text-xl opacity-80 mx-auto">
            We help our customers to protect what's important to them and help them look to the future with confidence. We provide our customers with a wide range of insurance products to prepare for life's challenges and opportunities today, tomorrow and for many years to come.
          </p>
        </div>
      </div>
      </section>
    </main>
  );
}
