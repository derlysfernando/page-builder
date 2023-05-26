import React from "react";
import { sidebarComponents } from "./sidebarComponents";

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/5 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">Sidebar</h2>
      </div>
      <div className="bg-gray-700 p-4">
        <nav>
          <ul className="flex flex-wrap justify-start -m-2">
            {sidebarComponents.map((component) => (
              <li key={component.name} className="m-2">
                <div className="w-24 h-24 bg-gray-900 rounded flex flex-col items-center justify-center">
                  {component.icon}
                  <span className="mt-2 text-xs text-white">
                    {component.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;