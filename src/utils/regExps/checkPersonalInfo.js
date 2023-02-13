import { che, checkByRegExps} from "./regExps";

export const validatesPersonalInfo = {
  name: true,
  lastName: true,
  image: true,
  email: true,
  number: true
}

export const checkPersonalInfo = ({ name, lastName, image, number, email }) => {
    validatesPersonalInfo.name = checkByRegExps("name", name)
    validatesPersonalInfo.email = checkByRegExps("email", email)
    validatesPersonalInfo.number = checkByRegExps("phone", number)
    validatesPersonalInfo.lastName = checkByRegExps("name", lastName)
    validatesPersonalInfo.image = (!!image)
    return validatesPersonalInfo;
};
