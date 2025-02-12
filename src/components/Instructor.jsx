import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const instructors = [
  {
    id: 52,
    name: "ABCD",
    image:
      "https://minipro.pythonanywhere.com/media/teacher_profile_imgs/Screenshot_2023-05-04_102625_0u33kaw.png", // No image source available
    qualification: "DevOps Engineer",
    socialLinks: [
      "https://www.instagram.com/accounts/login/?hl=en",
      "https://www.facebook.com",
      "https://twiter.com",
    ],
  },
  {
    id: 28,
    name: "Mr Adams",
    image:
      "https://minipro.pythonanywhere.com/media/teacher_profile_imgs/Screenshot_2023-05-04_102625_0u33kaw.png",
    qualification: "Harvard University",
    socialLinks: [
      "https://www.instagram.com/accounts/login/?hl=en",
      "https://www.facebook.com",
      "https://twiter.com",
    ],
  },
  {
    id: 12,
    name: "Dr John Doe",
    image:
      "https://minipro.pythonanywhere.com/media/teacher_profile_imgs/team-1.jpg",
    qualification: "Master’s degree CS",
    socialLinks: [
      "https://www.instagram.com/accounts/login/?hl=en",
      "https://www.facebook.com",
      "https://twiter.com",
    ],
  },
  {
    id: 13,
    name: "Dr Zhang San",
    image:
      "https://minipro.pythonanywhere.com/media/teacher_profile_imgs/team-3.jpg",
    qualification: "Full Stack Web Developer",
    socialLinks: [
      "https://www.instagram.com/accounts/login/?hl=en",
      "https://www.facebook.com",
      "https://twiter.com",
    ],
  },
];

const Instructor = () => {
  return (
    <section className="max-w-[1250px] mx-auto p-6">
      {/* {first section} */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex flex-col items-end">
            <div className="w-10 h-[1px] my-2 bg-[#06BBCC] self-end"></div>
            <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
          </div>
          <h2 className="text-[#06BBCC] text-base font-semibold">COURSES</h2>
          <div className="flex-col">
            <div className="w-10 h-[1px] my-2 bg-[#06BBCC]"></div>
            <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
          </div>
        </div>

        <h2 className="text-4xl font-medium text-gray-800">
          Popular Instructors
        </h2>
      </div>

      {/* {second section} */}
      <div className="max-w-[1250px] mx-auto">
        <div className="text-center"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="shadow-lg bg-[#F0FBFC] overflow-hidden transition hover:shadow-2xl group"
            >
              <div className="overflow-hidden">
                {/* <a href={`/teacher-detail/${instructor.id}`}> */}
                <img
                  src={instructor.image || "https://via.placeholder.com/330"}
                  alt={instructor.name}
                  className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                {/* </a> */}
              </div>

              {instructor.socialLinks.length > 0 && (
                <div className="flex justify-center space-x-3 pt-4">
                  {instructor.socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-[#06BBCC] p-2 hover:bg-[#2a747b] transition"
                    >
                      {index === 0 ? (
                        <FaInstagram />
                      ) : index === 1 ? (
                        <FaTwitter />
                      ) : (
                        <FaFacebook />
                      )}
                    </a>
                  ))}
                </div>
              )}

              <div className="p-6 text-center">
                <h5 className="text-xl font-semibold text-[#06BBCC] transition duration-300 ease-in-out hover:text-[#2a747b] cursor-pointer">
                  {/* <a href={`/teacher-detail/${instructor.id}`} className="hover:text-[#2a747b]"> */}
                  {instructor.name}
                  {/* </a> */}
                </h5>
                <p className="text-gray-600">{instructor.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructor;
