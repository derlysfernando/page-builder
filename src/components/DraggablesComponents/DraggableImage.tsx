import React from "react";
import Image from "next/image";
import placeholder from "@/assets/images/placeholders/200.png";

const DraggableImage = () => {
  return (
      <div className="w-40 h-40">
        <Image
          src={placeholder}
          alt="Image Description"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
  );
};

export default DraggableImage;