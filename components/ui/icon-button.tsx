"use client";

import { MouseEventHandler } from "react";

interface IconButtonProps {
  icons: React.ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const IconButton: React.FC<IconButtonProps> = ({
  icons,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full p-2 bg-white flex items-center justify-center shadow-md hover:scale-110 transition"
    >
      {icons}
    </button>
  );
};

export default IconButton;