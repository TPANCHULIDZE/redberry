import "./styles/resume.style.css";
import { ShowResume } from "../../components/showResume/showResume";
import { useSelector } from "react-redux";
import { selectExperiences } from "../../store/experiences/experiences.select";
import { selectPersonalInfo } from "../../store/personalInfo/personalInfo.select";
import { selectKnowledges } from "../../store/knowledge/knowledge.select";
import { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
// import { toFormData } from 'axios';

const Resume = () => {
  const experiences = useSelector(selectExperiences);
  const { name, lastName, email, number, aboutInfo, image } =
    useSelector(selectPersonalInfo);
  const knowledges = useSelector(selectKnowledges);
  const [isAccepted, setIsAccepted] = useState(false);
  const [showMessage,setShowMessage] = useState(true)

  const handleSetShowMessage = () => {
    setShowMessage(false)
  }

  const checkInformation = async () => {
    const degrees = (
      await axios.get("https://resume.redberryinternship.ge/api/degrees")
    ).data;

    const filterExperiences = Object.values(experiences).map((val) => ({
      description: val.expDescription,
      position: val.position,
      employer: val.employer,
      start_date: val.startDate.split("/").reverse().join("/"),
      due_date: val.endDate.split("/").reverse().join("/"),
    }));

    const filterKnowledges = Object.values(knowledges).map((val) => ({
      institute: val.uni,
      due_date: val.endDate.split("/").reverse().join("/"),
      description: val.description,
      degree_id: degrees.filter((value) => value.title === val.degree)[0].id,
    }));

    const blobRes = await fetch(image.image);

    const blob = await blobRes.blob();

    const info = {
      name,
      surname: lastName,
      email,
      image: blob,
      phone_number: number.split(" ").join(""),
      about_me: aboutInfo,
      experiences: filterExperiences,
      educations: filterKnowledges,
    };

    axios({
      method: "post",
      url: "https://resume.redberryinternship.ge/api/cvs",
      data: info,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        setIsAccepted(true);
      })
      .catch((error) => {
        console.log("er", error);
      });
  };

  useEffect(() => {
    checkInformation();
  }, []);

  return (
    <div id="main-show-resume">
      {
        showMessage ? (
          <div
        id="alert-additional-content-5"
        className=" flex justify-between p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800"
        role="alert"
      >
        <div className="flex items-center">
            <span className="sr-only">Info</span>
            <h3 className="text-sm font-small text-gray-500 dark:text-gray-500">
            {isAccepted ? 'რეზიუმე წარმატებით გაიგზავნა' : 'რომელიმე ინფორმაცია არასწორია'}
            </h3>
          </div>
          <button onClick={handleSetShowMessage} type="button" className="mt-3 w-5 h-5 mr-0 -mx-1.5 -my-1.5 bg-blue-50 text-white-500 rounded-sm" data-dismiss-target="#alert-border-1" aria-label="Close">
            <svg aria-hidden="true" className="mt-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
      </div>
        ) : null
      }
      
      <div id="main-content" className="w-2/3 h-full">
        <ShowResume />
      </div>
    </div>
  );
};

export default Resume;
