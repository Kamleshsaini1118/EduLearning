import React from "react";
import { useParams } from "react-router-dom";

const instructors = [
  {
    id: 52,
    name: "Mr. Adams",
    skills: "Full Stack",
    image: "https://minipro.pythonanywhere.com/media/teacher_profile_imgs/Screenshot_2023-05-04_102625_0u33kaw.png",
    email: "meet.211724101@vcet.edu.in",
    qualification: "Harvard University",
    courses: ["Python Experiments", "OS", "Maths 4", "COA"],
  },
];

const InstructorDetail = () => {
  const { id } = useParams();
  const instructor = instructors.find((inst) => inst.id === parseInt(id));

  if (!instructor) return <h2 className="text-center">Instructor Not Found</h2>;

  return (
    <div className="container mx-auto py-24">
      <div className="">
        <img className="w-48 h-48 mx-auto" src={instructor.image} alt={instructor.name} />
        <h3 className="text-2xl font-bold text-center mt-4">{instructor.name}</h3>
        <p className="text-center font-semibold">Skills: {instructor.skills}</p>
        <p className="text-center">Email: {instructor.email}</p>
        <p className="text-center">Qualification: {instructor.qualification}</p>

        <div className="mt-6">
          <h4 className="text-xl font-bold">Courses:</h4>
          <ul className="list-disc ml-6">
            {instructor.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetail;
