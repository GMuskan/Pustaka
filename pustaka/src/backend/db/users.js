import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Muskan",
    lastName: "Gupta",
    email: "muskaang710@gmail.com",
    password: "muskanGupta",
    address: [
      {
        _id: uuid(),
        name: "Muskan Gupta",
        street: "H. No. 40 , Iradat Nagar",
        city: "Agra",
        state: "UttarPradesh ",
        country: "India",
        zipCode: "530069",
        mobile: "9829124452",
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    password: "john",
    address: [
      {
        _id: uuid(),
        name: "John Doe",
        street: "H. No. 21/5 , 100ft Ring Road, Kharadi",
        city: "Pune",
        state: "Maharashtra ",
        country: "India",
        zipCode: "530079",
        mobile: "9829124433",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshBalika",
    address: [
      {
        _id: uuid(),
        name: "Adarsh Balika",
        street: "H. No. 21/4 , 100ft Ring Road, Vaishali Nagar",
        city: "Bangalore",
        state: "Karnataka ",
        country: "India",
        zipCode: "530068",
        mobile: "9829124431",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];