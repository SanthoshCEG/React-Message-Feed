import img1 from "./images/rohit-logo.jpg";
// import img2 from "./components/sky-logo.jpg";
// import img3 from "./components/virat-logo.jpg";
import moment from "moment";
import {
  faFileLines,
  faUser,
  faUsers,
  faAddressCard,
  faMemory,
  faBrain,
  faCircleExclamation,
  faFloppyDisk,
  faGear,
  faWallet,
  faMoneyBill,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
export const MENU_OPTIONS = [
  {
    id: 1,
    icon: faFileLines,
    text: "Buzz Home",
    notifications: "2",
    path:'buzz-home'
  },
  {
    id: 2,
    icon: faFileLines,
    text: "My Buzz Posts",
    notifications: 8,
    path:'my-buzz-post'
  },
  {
    id: 3,
    icon: faFileLines,
    text: "Draft Posts",
    notifications: 2,
    path:'draft-post'
  },
  {
    id: 4,
    icon: faUser,
    text: "My Followers",
    notifications: 33,
    path:'my-followers'
  },
  {
    id: 5,
    icon: faUser,
    text: "I am Following",
    notifications: 14,
    path:'i-am-following'
  },
  {
    id: 6,
    icon: faUsers,
    text: "My Teams",
    notifications: 24,
    path:'my-teams'
  },
  {
    id: 7,
    icon: faAddressCard,
    text: "My Reporters",
    notifications: 42,
    path:'my-reporters'
  },
  {
    id: 8,
    icon: faCircleExclamation,
    text: "Spam",
    notifications: 8,
    path:'spam'
  },
  {
    id: 9,
    icon: faGear,
    text: "Settings",
    notifications: 2,
    path:'settings'
  },
  {
    id: 10,
    icon: faFloppyDisk,
    text: "SavedPosts",
    notifications: "",
    path:'saved-posts'
  },
];

export const RECENT_MENU_OPTIONS = [
  {
    id: 1,
    icon: faMemory,
    text: "New Artefacts",
    notifications: 82,
  
  },
  {
    id: 2,
    icon: faAddressCard,
    text: "New Modules",
    notifications: 22,
  },
  {
    id: 3,
    icon: faBrain,
    text: "New Skills",
    notifications: 14,
  },
  {
    id: 4,
    icon: faMoneyBill,
    text: "New Payments",
    notifications: 5,
  },
  {
    id: 5,
    icon: faWallet,
    text: "Wallet",
    notifications: 2,
  },
  {
    id: 6,
    icon: faImage,
    text: "Change Theme",
    notifications: "",
  },
];

export const USER_DATA= [
  {
    key: 1,
    image: img1,
    name: "Rohit",
    designation: "Frontend Developer",
    date: moment().format(),
    content:
      "A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design, technology and programming to code a websites appearance, as well as taking care of debugging.Is front-end developer hard?The practice of front end development is similar to playing the bass: ",
    
    getAttachment: 'null',
    webPhoto: 'null',
    recordAudio:'null',
    fileType:null
  },
//   {
//     key: 2,
//     image: img2,
//     name: "Surya",
//     designation: "Mobile Developer",
//     date: moment().format(),
//     content:
//       "Mobile developers are a type of software developer. They specialise in mobile technology such as building apps for Googles Android, Apples iOS and Microsofts Windows Phone platforms. For this reason job titles for this type of role also include Android developer and iOS developer.",
//   },
//   {
//     key: 3,
//     image: img3,
//     name: "virat",
//     designation: "Backend Developer",
//     date: moment().format(),
//     content:
//       "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website, back-end developers are involved in data storage, security, and other server-side functions that you cannot see",
    
//   },
];
