import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker, Stack } from "rsuite";
import {
  setDegree,
  setDescribe,
  setEndDate,
  setKnowledge,
  setUni,
} from "../../store/knowledge/knowledge.actions";
import { selectKnowledges } from "../../store/knowledge/knowledge.select";
import "./styles/knowledge.style.css";
import "rsuite/dist/rsuite.min.css";
import { ValidationIcons } from "../alerts/validationIcons";
import axios from "axios";

export const Knowledge = ({ index, isSubmit }) => {
  const knowledges = useSelector(selectKnowledges);
  const dispatch = useDispatch();
  const currentKnowledge = knowledges[index];
  const [degrees, setDegrees] = useState(null)

  const fetchDegrees = async () => {
    const {data} = await axios.get('https://resume.redberryinternship.ge/api/degrees')

    setDegrees(data);   
  }

  useEffect(() => {
    fetchDegrees()
  }, [])

  const handleSetKnowledge = (event) => {
    const { name, value } = event.target;
  
    switch (name) {
      case "uni":
        dispatch(setUni({ index, value }));
        break;
      case "degree":
        dispatch(setDegree({ index, value }));
        break;
      case "description":
        dispatch(setDescribe({ index, value }));
        break;
      default:
        return;
    }
  };

  return (
    <div className="grid-rows-3 space-y-5 mt-8 h-full">
      <div>
        <label id="uniLabel">სასწავლებელი</label>
        <div id="uni">
          <input
            onChange={handleSetKnowledge}
            name="uni"
            id="uniInput"
            placeholder="სასწავლებელი"
            value={currentKnowledge.uni}
          />
          <ValidationIcons
            isSubmit={isSubmit}
            option="uni"
            val={currentKnowledge.uni}
          />
        </div>
        <label id="uniHint">მინიმუმ 2 სიმბოლო</label>
      </div>
      <div className="flex justify-between mt-12">
        <div id="degree-container">
          <label id="degreeLabel">ხარისხი</label>
          <div id="degree">
            <select
              onChange={handleSetKnowledge}
              name="degree"
              id="degreeInput"
              value={currentKnowledge.degree}
              placeholder="აარჩიეთ ხარისხი"
            >
              <option id="options">
                <span id="options-text" disabled selected value="">
                  აარჩიეთ ხარისხი
                </span>
              </option>
              {
                degrees ? (
                  degrees.map(({id, title} )=> (
                    <option id="options">
                      <span id="options-text">{title}</span>
                    </option>
                  ))
                ) : null
              }
              
            </select>
            <ValidationIcons
              option="degree"
              val={currentKnowledge.degree}
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
                placeholder="Select Date"
                dateFormat="dd/mm/yyyy"
                value={
                  currentKnowledge.endDate !== ""
                    ? new Date(
                        currentKnowledge.endDate.split("/").reverse().join("-")
                      )
                    : null
                }
                // value={currentKnowledge.endDate !== '' ? new Date(currentKnowledge.endDate.split('/').reverse().join('-') ): null }
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
                val={currentKnowledge.endDate}
                isSubmit={isSubmit}
              />
          </div>
        </div>
      </div>
      <div>
        <label id="description-label">აღწერა</label>
        <div id="description">
          <textarea
            onChange={handleSetKnowledge}
            id="description-text"
            name="description"
            value={currentKnowledge.description}
          />
          <ValidationIcons
            option="description"
            val={currentKnowledge.description}
            isSubmit={isSubmit}
          />
        </div>
      </div>
    </div>
  );
};
