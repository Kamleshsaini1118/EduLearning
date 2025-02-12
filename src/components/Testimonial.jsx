import React from "react";

const Testimonial = () => {
  return (
    <div>
      {/* {first section} */}
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
    </div>
  );
};

export default Testimonial;
