import {
  IconHome,
  IconTag, // para promociones
  IconCurrencyDollar, // para precios
  IconUser, // para instructores
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
    title: "Inicio",
    icon: IconHome,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Promociones",
    icon: IconTag,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "Precios",
    icon: IconCurrencyDollar,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "Instructores",
    icon: IconUser,
    href: "#",
  },
  {
    id: uniqueId(),
    title: "Contáctanos",
    icon: IconMail,
    href: "#",
  },
];

export default Menuitems;
