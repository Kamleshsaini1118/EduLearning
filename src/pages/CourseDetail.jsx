import { useParams } from "react-router-dom";
import CourseCard from "../components/CourseCard";

const courses = [
  { id: 17, 
    title: "Reactjs Full Course", 
    img: "https://minipro.pythonanywhere.com/media/course_imgs/React.jpeg", 
    description: "Edu Learning Reactjs Training will train you to build efficient React applications by mastering the concepts of React, Redux, and React Native. In this React Course, you will learn how to build simple components & integrate them into more complex design components. After completing this React online training, you will be able to build the applications using React concepts such as JSX, Redux, Asynchronous Programming using Redux-Saga middleware, Fetch data using GraphQL, perform Testing using Jest, successively Deploy applications using Nginx and Docker, plus build Mobile applications using React Native.", 
    teacher: "Mrs Jake Weary", 
    teacherId: 16, 
    techs: "Reactjs , React Native , Redux toolkit , JSX , Fetch API html css", 
    enrolled: 9, 
    rating: 5, 
    views: 0 
  },
  { id: 18, title: "Bootstrap5 Full Course", img: "https://minipro.pythonanywhere.com/media/course_imgs/Bootstrap.png", description: "Bootstrap ka complete guide.", teacher: "Mr John Doe", teacherId: 22, techs: "Bootstrap5, CSS", enrolled: 12, rating: 4.8, views: 5 }
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  return (
    <div className="container mx-auto p-4">
      <CourseCard course={course} />
    </div>
  );
};

export default CourseDetail;
