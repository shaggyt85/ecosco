import building from "../assets/building.svg";
import home from "../assets/home.svg";
export const products = [
  {
    id: 1,
    category: "duarte",
    name: "Calle Mayorazgo Duarte",
    streets: [
      {
        id: 1,
        portal: "283",
        apto: "bajo_A",
        dni: "12345678",
        citibox: "no",
      },
      {
        id: 2,
        portal: "283",
        apto: "bajo_b",
        dni: "873456s",
        citibox: "si",
      },
    ],
    href: "people",
    iconSrc: "<BuildingOffice2Icon />",
    imageAlt: "Front of men's Basic Tee in black.",
    imageSrc: building,
  },
  {
    id: 2,
    category: "cerro campo",
    name: "Cerro Campo",
    href: "#",
    imageSrc: home,
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];
