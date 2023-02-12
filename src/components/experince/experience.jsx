import { useDispatch, useSelector } from "react-redux"
import { setEmployer, setExpDescription, setEndDate, setStartDate, setPosition } from "../../store/experiences/experiences.actions";
import { selectExperiences } from "../../store/experiences/experiences.select"
import './styles/experience.style.css'
import { ValidationIcons } from "../alerts/validationIcons";
import { DatePicker } from "rsuite";

export const Experience = ({isSubmit, index}) => {
  const experiences = useSelector(selectExperiences);
  const currentExperience = experiences[index];
  const dispatch = useDispatch()

  const handelSetExperiences = (event) => {
    const { name, value } = event.target;
  
    switch (name) {
      case "position":
        dispatch(setPosition({ index, value }));
        break;
      case "employer":
        dispatch(setEmployer({ index, value }));
        break;
      case "expDescription":
        dispatch(setExpDescription({ index, value }));
        break;
      default:
        return;
    }
  }

  return (
    <div className="grid-rows-4 space-y-3 mt-4 h-full">
      <div>
        <label id="positionLabel">თანამდებობა</label>
        <div id="position">
          <input
            onChange={handelSetExperiences}
            name="position"
            id="positionInput"
            placeholder="თანამდებობა"
            value={currentExperience.position}
          />
          <ValidationIcons
            isSubmit={isSubmit}
            option="position"
            val={currentExperience.position}
          />
        </div>
        <label id="positionHint">მინიმუმ 2 სიმბოლო</label>
      </div>
      <div>
        <label id="employerLabel">დამსაქმებელი</label>
        <div id="employer">
          <input
            onChange={handelSetExperiences}
            name="employer"
            id="employerInput"
            placeholder="დამსაქმებელი"
            value={currentExperience.employer}
          />
          <ValidationIcons
            isSubmit={isSubmit}
            option="employer"
            val={currentExperience.employer}
          />
        </div>
        <label id="employerHint">მინიმუმ 2 სიმბოლო</label>
      </div>
      <div className="flex justify-between mt-12">
      <div id="startDate-container">
          <label id="startDateLabel">დამთავრების რიცხვი</label>
          <div id="startDate">
              <DatePicker
                onChange={(date) => {
                  const value = date
                    ? new Date(date).toLocaleDateString("fr-FR")
                    : "";

                  dispatch(setStartDate({ index, value }));
                }}
                name="startDate"
                placeholder="dd/mm/yyyy"
                value={
                  currentExperience.startDate !== ""
                    ? new Date(
                        currentExperience.startDate.split("/").reverse().join("-")
                      )
                    : null
                }
                // value={currentExperience.startDate !== '' ? new Date(currentExperience.startDate.split('/').reverse().join('-') ): null }
                style={{
                  width: "100%",
                  height: "40px",
                  marginTop: "3px",
                  background: "#FFFFFF",
                  // border: "1px solid hsl(105, 5%, 71%)",
                  // borderRadius: "4px",
                  outline: "none",
                }} />
              <ValidationIcons
                option="startDate"
                val={currentExperience.startDate}
                endDate={currentExperience.endDate}
                isSubmit={isSubmit}
              />
          </div>
        </div>
        <div id="endDate-container">
          <label id="endDateLabel">დამთავრების რიცხვი</label>
          <div id="endDate">
              <DatePicker
                onChange={(date) => {
                  const value = date
                    ? new Date(date).toLocaleDateString("fr-FR")
                    : "";

                  dispatch(setEndDate({ index, value }));
                }}
                name="endDate"
                placeholder="dd/mm/yyyy"
                value={
                  currentExperience.endDate !== ""
                    ? new Date(
                        currentExperience.endDate.split("/").reverse().join("-")
                      )
                    : null
                }
                // value={currentExperience.endDate !== '' ? new Date(currentExperience.endDate.split('/').reverse().join('-') ): null }
                style={{
                  width: "100%",
                  height: "40px",
                  marginTop: "3px",
                  background: "#FFFFFF",
                  // border: "1px solid hsl(105, 5%, 71%)",
                  // borderRadius: "4px",
                  outline: "none",
                }} />
              <ValidationIcons
                option="endDate"
                val={currentExperience.endDate}
                isSubmit={isSubmit}
              />
          </div>
        </div>
      </div>
      <div>
        <label id="expDescription-label">აღწერა</label>
        <div id="expDescription">
          <textarea
            onChange={handelSetExperiences}
            id="expDescription-text"
            name="expDescription"
            value={currentExperience.expDescription}
          />
          <ValidationIcons
            option="expDescription"
            val={currentExperience.expDescription}
            isSubmit={isSubmit}
          />
        </div>
      </div>
    </div>
  );
}