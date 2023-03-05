import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export enum SocialType {
  GitHub = "GitHub",
  Twitter = "Twitter",
  Facebook = "Facebook",
  Instagram = "Instagram",
  LinkedIn = "LinkedIn",
  YouTube = "YouTube",
  Website = "Website",
  Email = "Email",
  WhatsApp = "WhatsApp",
}

interface Socials {
  [key: string]: {
    icon: any;
    className: string;
    color: string;
  };
}

export const socials: Socials = {
  GitHub: {
    icon: faGithub,
    className:
      "bg-gradient-to-tr from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center",
    color: "text-white",
  },
  Twitter: {
    icon: faTwitter,
    className:
      "bg-gradient-to-tr from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center",
    color: "text-white",
  },
  Facebook: {
    icon: faFacebook,
    className:
      "bg-gradient-to-tr from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center",
    color: "text-white",
  },
  Instagram: {
    icon: faInstagram,
    className:
      "bg-gradient-to-tr from-purple-600 to-yellow-400 hover:from-purple-500 hover:to-yellow-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center",
    color: "text-white",
  },
  LinkedIn: {
    icon: faLinkedin,
    className:
      "bg-gradient-to-tr from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center",
    color: "text-white",
  },
  YouTube: {
    icon: faYoutube,
    className:
      "bg-gradient-to-tr from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center",
    color: "text-white",
  },
  WhatsApp: {
    icon: faWhatsapp,
    className:
      "bg-gradient-to-tr from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center",
    color: "text-white",
  },
  Email: {
    icon: "email",
    className:
      "bg-gradient-to-tr from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center",
    color: "text-white",
  },
};

export function getSocialIcon(type: SocialType) {
  switch (type) {
    case SocialType.GitHub:
      return faGithub;
    case SocialType.Twitter:
      return faTwitter;
    case SocialType.Facebook:
      return faFacebook;
    case SocialType.Instagram:
      return faInstagram;
    case SocialType.LinkedIn:
      return faLinkedin;
    case SocialType.YouTube:
      return faYoutube;
    case SocialType.WhatsApp:
      return faWhatsapp;
    default:
      return null;
  }
}

export function getSocialCustomClass(type: SocialType) {
  switch (type) {
    case SocialType.GitHub:
      return "bg-gradient-to-tr from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center";
    case SocialType.Twitter:
      return "bg-gradient-to-tr from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center";
    case SocialType.Facebook:
      return "bg-gradient-to-tr from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center";
    case SocialType.Instagram:
      return "bg-gradient-to-tr from-pink-500 to-red-500 hover:from-pink-400 hover:to-red-400 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center";
    case SocialType.LinkedIn:
      return "bg-gradient-to-tr from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center";
    case SocialType.YouTube:
      return "bg-gradient-to-tr from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center";
    case SocialType.WhatsApp:
      return "bg-gradient-to-tr from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center";
    default:
      return null;
  }
}
