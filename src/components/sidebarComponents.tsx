import React from "react";
import {
  IoTextOutline,
  IoSquareOutline,
  IoImageOutline,
} from "react-icons/io5";
import Text from "./DraggablesComponents/DraggableText";
import Button from "./DraggablesComponents/DraggableButton";
import Image from "./DraggablesComponents/DraggableImage";

export const sidebarComponents = [
  { name: "Text", component: Text, icon: <IoTextOutline /> },
  { name: "Button", component: Button, icon: <IoSquareOutline /> },
  { name: "Image", component: Image, icon: <IoImageOutline /> },
];
