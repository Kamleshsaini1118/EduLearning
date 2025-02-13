import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdArrowDropright, IoMdArrowDropleft  } from "react-icons/io";

const testimonials = [
  {
    img: "https://minipro.pythonanywhere.com/media/student_profile_imgs/me.jpg",
    name: "Meet Dodiya",
    title: "Node.js Course for Beginners",
    review: "Nice course!",
  },
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    title: "React Advanced Concepts",
    review: "Very informative and well explained!",
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Lee",
    title: "JavaScript Mastery",
    review: "Helped me improve my skills drastically!",
  },
  {
    img: "https://minipro.pythonanywhere.com/media/student_profile_imgs/me.jpg",
    name: "Meet Dodiya",
    title: "Node.js Course for Beginners",
    review: "Nice course!",
  },
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    title: "React Advanced Concepts",
    review: "Very informative and well explained!",
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Lee",
    title: "JavaScript Mastery",
    review: "Helped me improve my skills drastically!",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-10  flex flex-col items-center justify-center">
      {/* first Section */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex flex-col items-end">
            <div className="w-10 h-[1px] my-2 bg-[#06BBCC] self-end"></div>
            <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
          </div>
          <h2 className="text-[#06BBCC] text-base font-semibold">
            WHAT OUR STUDENT SAY!
          </h2>
          <div className="flex-col">
            <div className="w-10 h-[1px] my-2 bg-[#06BBCC]"></div>
            <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
          </div>
        </div>

        <h2 className="text-4xl font-medium text-gray-800">
          Student Testimonial
        </h2>
      </div>

      {/* second Section */}
      <div className="relative w-full max-w-3xl overflow-hidden flex justify-center items-center">
        <div className="relative flex w-full transition-transform duration-700 ease-in-out"
             style={{ transform: `translateX(-${index * 100}%)` }}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="w-full flex-shrink-0 p-6 bg-white rounded-lg shadow-lg text-center">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-36 h-36 rounded-full border-[6px] border-white mx-auto z-10  relative"
              />
              <div className="relative p-8 bg-[#06bbcc4e] shadow-lg text-center w-[60%] mx-auto mt-[-40px] z-auto">
              <h3 className="mt-4 text-2xl font-semibold">{testimonial.title}</h3>
              <p className="mt-2 text-gray-700 italic">"{testimonial.review}"</p>
              <p className="mt-3 text-sm text-gray-600">--{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 px-[1px] py-4 bg-[#06bbcc4e]">
          <IoMdArrowDropleft
            className="cursor-pointer text-white"
            size={36}
            onClick={() =>
              setIndex((prevIndex) =>
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
              )
            }
          />
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 px-[1px] py-4 bg-[#06bbcc4e]">
          <IoMdArrowDropright
            className="cursor-pointer text-white"
            size={36}
            onClick={() => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
