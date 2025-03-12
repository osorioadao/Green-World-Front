import React, { useState, useEffect, useRef } from "react";

interface AvatarProps {
  name: string;
  email: string;
  tipoUsuario: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ name, email, tipoUsuario, size = 50 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popUpRef = useRef<HTMLDivElement>(null);

  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  // Fecha o pop-up ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative inline-block w-full">
      {/* Avatar e Nome */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {/* Avatar */}
        <div
          className="flex items-center justify-center rounded-full bg-green-500 text-white font-bold"
          style={{ width: size, height: size, fontSize: size / 2 }}
        >
          {getInitial(name)}
        </div>

      </div>

      {/* Modal Pop-up */}
      {isOpen && (
        <div
          ref={popUpRef}
          className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-3 w-56 border z-50"
        >
          <p className="text-lg text-black font-semibold">{tipoUsuario}</p>
          <p className="text-gray-600 text-sm">{email}</p>
        </div>
      )}
    </div>
  );
};

export default Avatar;



