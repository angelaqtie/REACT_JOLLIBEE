import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const SideNav = () => {
  const menus = [
    {
      img: "nav-chickenjoy.webp",
      title: "Chicken Joy",
    },
    {
      img: "nav-value-meal.webp",
      title: "Value Meals",
    },
    {
      img: "nav-burger.webp",
      title: "Burger",
    },
    {
      img: "nav-spaghetti.webp",
      title: "Spaghetti",
    },
    {
      img: "nav-burger-steak.webp",
      title: "Burger Steak",
    },
    {
      img: "nav-palabok.webp",
      title: "Palabok",
    },
    {
      img: "nav-sides.webp",
      title: "Fries & Sides",
    },
    {
      img: "nav-desserts.webp",
      title: "Desserts",
    },
  ];
  return (
    <>
      <h5 className="mb-0 text-center pt-2">Menu</h5>
      <ul className="text-center">
        {menus.map((item, key) => (
          <li className="mb-3">
            <button>
              <img src={`${imgPath}/${item.img}`} />
            </button>
            <small className="text-xs">{item.title}</small>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideNav;
