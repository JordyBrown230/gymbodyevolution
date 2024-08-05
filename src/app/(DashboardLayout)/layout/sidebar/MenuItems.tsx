import {
  IconHome,
  IconInfoCircle,
  IconMotorbike,
  IconPhoto,
  IconMail,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Inicio",
  },
  {
    id: uniqueId(),
    title: "Home",
    icon: IconHome,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "About Us",
    icon: IconInfoCircle,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "ATV",
    description: "On an ATV you can discover the best routes in Guanacaste that you never thought you'd see. We have a fleet of ATV's HONDA",
    icon: IconMotorbike,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "Gallery",
    icon: IconPhoto,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "Contact Us",
    icon: IconMail,
    href: "#",
  },
];

export default Menuitems;
