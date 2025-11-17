import React from "react";

export const DropdownMenu = ({ links, closeMenu }) => {
  return (
    <div
      className="
        absolute right-0 top-full 
        bg-white shadow-lg rounded-lg 
        z-30 mt-2
      "
      style={{
        width: "max-content",   
        minWidth: "auto", 
      }}
    >
      <div className="flex flex-col py-2">
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            onClick={closeMenu}
            className="
              px-4 py-2 
              hover:bg-gray-100 
              text-sm
            "
          >
            {l.name}
          </a>
        ))}
      </div>
    </div>
  );
};
