import Link from "next/link";

import React, { useState, useEffect } from 'react'; 
import { FaLifeRing, FaPhoneAlt, FaHeartbeat, FaPiggyBank, FaChartLine } from 'react-icons/fa';
import { PiLineVerticalBold } from "react-icons/pi";
import { MdOutlineHorizontalRule } from "react-icons/md";

import { BiSupport } from "react-icons/bi";
import { LuClock } from "react-icons/lu";

import { CgWebsite } from "react-icons/cg";
import { RiReactjsFill } from "react-icons/ri";
// import { FaRegCheckCircle } from "react-icons/fa";

import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

import { BiNetworkChart } from "react-icons/bi";
import { BsPersonCheck } from "react-icons/bs";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";




import ContactForm from "@/components/contactForm";


import Head from "next/head";

export default function Home() {

  return (
    <main>
      <Head>

        <title>Shreeju Investments - Financial Planning, Insurance & Investments in Naigaon, Vasai, Virar</title>

        <meta name="description" content="Shreeju Investments offers financial planning, life & health insurance, investments & tax services in Naigaon, Vasai, Virar. Grow your wealth, secure your future" />
        <meta name="keywords" content="Investments, Finance, Mutual Funds, Demat Account, Insurance" />

      </Head>
     <section data-aos="fade">
      <div className="min-h-screen relative overflow-hidden flex hero">
        <img
          src="/images/investment1.jpg"
          alt="Shreeju Investments"
           data-aos="fade"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary opacity-90"></div>
        <div className="relative mx-auto md:py-4 py-12 px-4 md:px-8 pt-18 pb-10 flex flex-wrap justify-center items-center">
          <div  data-aos="fade" className="w-full md:w-7/12 px-4 flex flex-wrap justify-content-center">
            <h1 className="text-4xl text-base-100 bg-base-content bg-opacity-80 rounded-xl py-4 px-4 font-bold text-left mb-6">
            Grow Your Wealth Secure Your Future with Shreeju Investments
            </h1>
            <h2 className="text-base-100 bg-base-content bg-opacity-80 rounded-xl py-4 px-4 text-xl mb-6">
            Shreeju Investments is your one-stop solution for all your financial needs in Naigaon, Vasai, and Virar. We offer a comprehensive range of financial products and services to help you achieve your financial goals.
            </h2>
            <div className="flex justify-left">
            <a className="btn" href={"tel:"+process.env.MOBILE_NUMBER}>
                Call Us
            </a>

            <a 
          
            href={"https://wa.me/"+process.env.WA_number}
            className="btn ml-2 "
            target="_blank"
            rel="noopener noreferrer"
          
            
            >
                WhatsApp Us
            </a>
            </div>
          </div>
          <div className="w-full md:w-5/12 px-4 md:py-4 py-12">
          <img
              src="/images/family-hand.jpg"
              className="w-full rounded-xl"
            />
            
          </div>
        </div>
      </div>
    </section>


      <section className="py-12 md:py-24 bg-base-200">
      <div data-aos="fade" className="px-4 lg:px-8 flex flex-col lg:w-3/4 lg:m-auto lg:flex-row items-center">
        <div data-aos="fade-up" className="lg:w-1/2  lg:mb-0 lg:pr-8 flex lg:justify-end">
          <h2 className="text-2xl font-bold text-primary mb-4">WHO WE ARE</h2>
        </div>
        <div className="lg:hidden flex items-center justify-center mb-4">
          <MdOutlineHorizontalRule size={32} className="text-secondary mx-4" />
        </div>
        <div className="hidden lg:flex lg:flex-col md:px-2 items-center lg:justify-center mb-4">
          <PiLineVerticalBold size={48} className="text-secondary mb-4" />
        </div>
        <div data-aos="fade-up" className="md:px-4 lg:w-1/2">
          <p className="text-base-900">
          Shreeju Investments is a leading financial services firm dedicated to empowering individuals and families in Naigaon, Vasai, and Virar to achieve their financial goals. We possess a wealth of experience in the financial industry, and our team of qualified professionals is passionate about providing personalized guidance and comprehensive solutions.
          </p>
        </div>
      </div>
    </section>

      
      <section id="services">
      <div className="bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 md:px-8 md:py-14 mx-auto">
          
          {/* Grid */}
          <div className="mt-5 md:my-8 grid md:grid-cols-3 gap-8 md:gap-12">
            <div data-aos="fade" className="md:col-span-1">
              <h2 className="font-bold text-2xl md:text-4xl text-base-100">
                Our Services
              </h2>
              <p className="mt-2 text-lg md:mt-4 text-base-200">
            {`Secure Your Loved Ones' Future with Life Insurance Plans. Safeguard Your Health with Comprehensive Insurance Solutions. Grow Your Wealth with Smart Investment Strategies`}
              </p>
            </div>
            {/* End Col */}
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8 md:gap-8">
                {/* Icon Block */}
                <div data-aos="flip-right" className="flex bg-base-200 hover:shadow-2xl transition duration-300 rounded-lg p-4 gap-x-5">
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
                          <li>ULIP, Pension & Index Funds</li>
                        </ul>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                
                <div data-aos="flip-right" className="hover:shadow-2xl transition duration-300 flex gap-x-5 bg-base-200 rounded-lg p-4">
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
                                <li>Critical Care - Cancer, Heart etc.</li>
                              </ul>
                
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div data-aos="flip-right" className=" hover:shadow-2xl transition duration-300 flex gap-x-5 bg-base-200 rounded-lg p-4">
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
                                <li>GST Return filing [Individuals & Partnership Firms]</li>
                                <li>Tax Planning</li>
                              </ul>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div data-aos="flip-right" className="hover:shadow-2xl transition duration-300 flex gap-x-5 bg-base-200 rounded-lg p-4">
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
                                <li>Invest in stocks</li>
                                <li>Mutual Funds</li>
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
      
<div className="flex w-full px-4 py-16 md:p-24 flex-col lg:flex-row ">
      <a   
          href={"https://wa.me/"+process.env.WA_number}
          className="hover:scale-110 transition-all duration-500 card text-base-100 bg-secondary rounded-box  py-8 flex-grow place-items-center"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-down"
          >
    <FaWhatsappSquare size={36} />
    Contact us
  </a>
  <div className="divider lg:divider-horizontal">OR</div>

  <a data-aos="fade-down" className="hover:scale-110 transition-all duration-500 text-base-100 card bg-primary rounded-box  py-8 flex-grow place-items-center" href={"tel:"+process.env.MOBILE_NUMBER}>

    <FaPhoneSquareAlt size={36} />
    Contact us 
  </a>
</div>


<section id="whyus" data-aos="fade" className="px-4 bg-base-200 py-16 md:px-8">
  <h2 data-aos="zoom-in-down" className="text-4xl font-bold mb-4 text-center">Why us?</h2>
  <p data-aos="zoom-in-up" className="text-xl text-center opacity-90 mb-8">{`Here's why you should choose Shreeju Investments.`}</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="shadow-md text-center p-6 bg-base-200 hover:bg-base-300 transition duration-300 rounded-lg" data-aos="fade-up">
      <div className="mb-4 flex justify-center" >
        <BsPersonCheck  className="text-primary w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold mb-2">Experienced and Qualified Professionals</h3>
      <p className="opacity-90">Our team holds relevant qualifications and boasts extensive experience in the financial sector.</p>
    </div>
    <div className="shadow-md text-center p-6 bg-base-200 hover:bg-base-300 transition duration-300 rounded-lg" data-aos="fade-up">
      <div className="mb-4 flex justify-center">
        <IoCheckmarkDoneCircleOutline className="text-primary w-12 h-12" />
        
      </div>
      <h3 className="text-2xl font-bold mb-2">Holistic Approach</h3>
      <p className="opacity-90">We go beyond simply selling products; we offer comprehensive financial planning to ensure your long-term success.</p>
    </div>
    <div className="shadow-md text-center p-6 bg-base-200 hover:bg-base-300 transition duration-300 rounded-lg" data-aos="fade-up">
      <div className="mb-4 flex justify-center">
        <CgWebsite className="text-primary w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold mb-2">Personalized Service</h3>
      <p className="opacity-90">{`We take the time to understand your individual circumstances and develop customized solutions.`}</p>
    </div>
    <div className="shadow-md text-center p-6 bg-base-200 hover:bg-base-300 transition duration-300 rounded-lg" data-aos="fade-up">
    <div className="mb-4 flex justify-center">
        <BiNetworkChart className="text-primary w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold mb-2">Strong Partner Network</h3>
      <p className="opacity-90">We collaborate with leading financial institutions to provide you with a wide range of products and services.</p>
    </div>

  </div>
</section>


<section className="p-4 md:p-8 grid gap-4 grid-cols-1 md:grid-cols-2">


<div data-aos="zoom-in" className="bg-base-200 p-4 md:p-8 rounded-2xl">
  

<h1 className="text-2xl bold">Point of Contact</h1>



        <div className="">
              
              <div className="grow">
                <p className="mb-1 font-bold">
                  Support
                </p>
                <p className="">
                  codingchaska.info@gmail.com
                </p>
                <p className="">
                  +91 9518-90-1902, +91 9370-39-4747
                </p>
              </div>
            </div>


          <br />
            <div className="">
              
              <div className="grow">
                <p className="mb-1 font-bold">
                  Address
                </p>
                <p className="">
                  005/3, Jai Vijay Nagar Building
                </p>
                <p className="">
                  Opposite Seven Square School, Naigaon East, Mumbai
                </p>
              </div>
            </div>

            <br />

            <div className="w-full border rounded-xl">
            <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.141237962605!2d72.85877647402981!3d19.36303618190148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7955fc5b6f45d%3A0x9fe0324917bbbc9e!2sCoding%20Chaska%20(Computer%20Classes)!5e0!3m2!1sen!2sin!4v1696424627632!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <br />


            </div>



        <div data-aos="zoom-in" className="bg-base-200 p-8 rounded-2xl">
            <h2 className="text-4xl font-bold text-center ">Contact us now</h2>
            <ContactForm />
        </div>
</section>









    </main>
  );
}
