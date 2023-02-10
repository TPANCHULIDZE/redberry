import alertImage from "../../files/logos/alert.svg";
import isGoodImage from "../../files/logos/isgood.svg";
import { checkByRegExps } from "../../utils/regExps/regExps";

export const ValidationIcons = ({ option, val, page, isSubmit }) => {
  const checkValidation = () => {
    if (isSubmit && checkByRegExps(option, val))
      return (
        <div>
          <img src={isGoodImage} />
        </div>
      );
    if (isSubmit && (val === "" || !checkByRegExps(option, val)))
      return (
        <div>
          <img src={alertImage} />
        </div>
      );

    if (!isSubmit && val === "") return null;

    if (!isSubmit && !checkByRegExps(option, val))
      return (
        <div>
          <img src={alertImage} />
        </div>
      );
  };

  return checkValidation();
};
