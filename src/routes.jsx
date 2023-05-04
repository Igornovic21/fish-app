import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "acceuil",
    path: "/",
    element: <Home />,
  },
  {
    icon: InformationCircleIcon,
    name: "à propos",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: PhoneIcon,
    name: "contactez-nous",
    path: "/sign-in",
    element: <SignIn />,
  },
  // {
  //   icon: UserCircleIcon,
  //   name: "sign in",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   icon: UserPlusIcon,
  //   name: "sign up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
