'use client'
import React, { useState } from "react";
import Section from "./Section";
import AddSectionButton from "./AddSectionButton";
import Sidebar from "./Sidebar";


const Canvas = () => {
  const [sections, setSections] = useState<number[]>([1, 2, 3]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow m-5 ml-10 mr-10 mx-auto rounded-sm bg-gray-100">
        <div className="container mx-auto px-4 py-8 max-w-screen-xl">
          {sections.map((_, index) => (
            <div key={index} className="mb-4">
              <Section />
            </div>
          ))}
          <div className="mt-4">
            <AddSectionButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;