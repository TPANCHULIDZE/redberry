import { PersonalInfoRegExps } from "./regExps";

export const validatesPersonalInfo = {
  name: true,
  lastName: true,
  image: true,
  email: true,
  number: true
}

export const CheckPersonalInfo = ({ name, lastName, image, number, email }) => {
    validatesPersonalInfo.name = PersonalInfoRegExps("name", name)
    validatesPersonalInfo.email = PersonalInfoRegExps("email", email)
    validatesPersonalInfo.number = PersonalInfoRegExps("phone", number)
    validatesPersonalInfo.lastName = PersonalInfoRegExps("name", lastName)
    validatesPersonalInfo.image = !!image
    return validatesPersonalInfo;
};
