const phone = /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/;
const email =  /^[\w\.]+@redberry.ge$/;
const name = /^[ა-ჰ]{2,100}$/;
const aboutMe =/^/;
const image = /\w+/;
const uni = /^.{2,}$/;
const degree = /^[ა-ჰ]/;
const endDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const description = /\w+/;

const RegExps = {name, email, phone, uni, degree, endDate, description}

export const checkByRegExps = (option, val) => RegExps[option].test(val);
