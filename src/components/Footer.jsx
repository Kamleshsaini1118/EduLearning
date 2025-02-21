import React from 'react';
import { MdMail, MdArrowForwardIos } from "react-icons/md";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { FaLinkedinIn, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  // return (
  //   <footer className="bg-[#181D38] text-white pt-11 mt-5">
  //     {/* First Section (Centered Content) */}
  //     <div className="container py-16 flex justify-center items-center">
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pl-0 sm:pl-[100px] md:pl-[200px] lg:pl-[300px] xl:pl-[450px] text-center md:text-left">
  //         {/* Quick Links */}
  //         <div>
  //           <h4 className="text-white mb-3 text-2xl font-bold">Quick Link</h4>
  //           <Link className="block text-gray-300 font-semibold hover:text-white mb-2" to="/about-us">
  //             <span className="flex gap-2 justify-center md:justify-start">
  //               <MdArrowForwardIos className="mt-1" /> About Us
  //             </span>
  //           </Link>
  //           <Link className="block text-gray-300 font-semibold hover:text-white mb-2" to="/privacy">
  //             <span className="flex gap-2 justify-center md:justify-start">
  //               <MdArrowForwardIos className="mt-1" /> Privacy Policy
  //             </span>
  //           </Link>
  //           <Link className="block text-gray-300 font-semibold hover:text-white mb-2" to="/privacy">
  //             <span className="flex gap-2 justify-center md:justify-start">
  //               <MdArrowForwardIos className="mt-1" /> Terms & Condition
  //             </span>
  //           </Link>
  //           <Link className="block text-gray-300 font-semibold hover:text-white mb-2" to="/faq">
  //             <span className="flex gap-2 justify-center md:justify-start">
  //               <MdArrowForwardIos className="mt-1" /> FAQs & Help
  //             </span>
  //           </Link>
  //         </div>

  //         {/* Contact Info */}
  //         <div>
  //           <h4 className="text-white mb-3 text-2xl font-bold">Contact</h4>
  //           <p className="mb-2 flex gap-2 justify-center md:justify-start"><IoLocationSharp size={22} /> Dadi Ka Phatak, Binjari Marg, Jaipur, India</p>
  //           <p className="mb-2 flex gap-2 justify-center md:justify-start"><IoCallSharp size={22} /> +91 1234567890</p>
  //           <p className="mb-2 flex gap-2 justify-center md:justify-start"><MdMail size={22} /> abc@gmail.com</p>
            
  //           {/* Social Media Links */}
  //           <div className="flex justify-center md:justify-start space-x-3 pt-2">
  //             {[
  //               { icon: <FaTwitter size={16} />, link: "https://twitter.com/home?lang=en" },
  //               { icon: <FaFacebookF size={16} />, link: "https://www.facebook.com/" },
  //               { icon: <FaYoutube size={16} />, link: "https://www.youtube.com/" },
  //               { icon: <FaLinkedinIn size={16} />, link: "https://www.linkedin.com/feed/" },
  //             ].map((social, index) => (
  //               <a key={index} className="text-gray-300 hover:text-white" target="__blank" href={social.link}>
  //                 <div className="rounded-full border-2 border-white p-2 hover:bg-white hover:text-[#06bbcc]">
  //                   {social.icon}
  //                 </div>
  //               </a>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Copyright Section */}
  //     <div className="container py-8 border-t border-gray-600 px-6 md:px-16">
  //       <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
  //         {/* Left Side */}
  //         <div className="leading-relaxed md:leading-loose"> {/* 2px Vertical Gap */}
  //           ©2025 <a className="border-b hover:text-white" href="/">DFW Learning</a><br />
  //           All Rights Reserved
  //         </div>
          
  //         {/* Right Side (Menu) */}
  //         <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
  //           <a className="hover:text-white" href="/">Home</a>
  //           <a className="hover:text-white" href="/faq">FAQs</a>
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );

  return (
    <footer className="bg-[#181D38] text-white pt-11 mt-5">
      {/* First Section (Mobile: Left Aligned with p-3) */}
      <div className="container py-16 flex justify-center md:justify-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pl-3 md:pl-[100px] lg:pl-[200px] xl:pl-[450px] text-left">
          {/* Quick Links */}
          
          <div>
            <h4 className="text-white mb-3 text-2xl font-bold">Quick Link</h4>
            <Link className="block text-gray-300 font-semibold hover:text-white mb-2" to="/about-us">
              <span className="flex gap-2">
                <MdArrowForwardIos className="mt-1" /> About Us
              </span>
            </Link>
            <Link className="block text-gray-300 font-semibold hover:text-white mb-2" to="/privacy">
              <span className="flex gap-2">
                <MdArrowForwardIos className="mt-1" /> Privacy Policy
              </span>
            </Link>
            <Link className="block text-gray-300 font-semibold hover:text-white mb-2" to="/privacy">
              <span className="flex gap-2">
                <MdArrowForwardIos className="mt-1" /> Terms & Condition
              </span>
            </Link>
            <Link className="block text-gray-300 font-semibold hover:text-white mb-2" to="/faq">
              <span className="flex gap-2">
                <MdArrowForwardIos className="mt-1" /> FAQs & Help
              </span>
            </Link>
          </div>
  
          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-3 text-2xl font-bold">Contact</h4>
            <p className="mb-2 flex gap-2"><IoLocationSharp size={22} /> Dadi Ka Phatak, Binjari Marg, Jaipur, India</p>
            <p className="mb-2 flex gap-2"><IoCallSharp size={22} /> +91 1234567890</p>
            <p className="mb-2 flex gap-2"><MdMail size={22} /> abc@gmail.com</p>
  
            {/* Social Media Links */}
            <div className="flex space-x-3 pt-2">
              {[
                { icon: <FaTwitter size={16} />, link: "https://twitter.com/home?lang=en" },
                { icon: <FaFacebookF size={16} />, link: "https://www.facebook.com/" },
                { icon: <FaYoutube size={16} />, link: "https://www.youtube.com/" },
                { icon: <FaLinkedinIn size={16} />, link: "https://www.linkedin.com/feed/" },
              ].map((social, index) => (
                <a key={index} className="text-gray-300 hover:text-white" target="__blank" href={social.link}>
                  <div className="rounded-full border-2 border-white p-2 hover:bg-white hover:text-[#06bbcc]">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
  
      {/* Copyright Section */}
      <div className="container py-8 px-6 md:px-16">
        {/* Gray Line Centered and Shorter */}
        <div className="w-4/5 mx-auto border-t border-gray-600 mb-6"></div>
  
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left leading-relaxed md:leading-loose">
          {/* Left Side */}
          <div>
            ©2025 <a className="border-b hover:text-white" href="/">DFW Learning</a><br />
            All Rights Reserved
          </div>
  
          {/* Right Side (Menu) */}
          <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
            <a className="hover:text-white" href="/">Home</a>
            <a className="hover:text-white" href="/faq">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
  

};

export default Footer;
