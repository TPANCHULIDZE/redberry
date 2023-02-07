const phone = /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/;
const email =  /^[\w\.]+@redberry.ge$/;
const name = /^[ა-ჰ]{2,100}$/;
const aboutMe =/^/;
const image = /\w+/;

const RegExps = {name, email, phone}

export const PersonalInfoRegExps = (option, val) => RegExps[option].test(val);