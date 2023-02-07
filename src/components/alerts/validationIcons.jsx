import alertImage from "../../files/logos/alert.svg";
import isGoodImage from "../../files/logos/isgood.svg";
import { PersonalInfoRegExps } from "../../utils/personalInfo/regExps";

export const ValidationIcons = ({ option, val, validate }) => {
  return !validate ? (
    <div>
      <img src={alertImage} />
    </div>
  ) : val === "" ? null : PersonalInfoRegExps(option, val) ? (
    <div>
      <img src={isGoodImage} />
    </div>
  ) : (
    <div>
      <img src={alertImage} />
    </div>
  );
};
