import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiMessageSquare, FiSettings, FiLogOut } from "react-icons/fi";
import { GoReport } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex">
      {/* Botão para abrir/fechar */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-green-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoMdArrowBack size={24} /> : <RxHamburgerMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-green-900 h-screen fixed top-0 left-0 p-5 pt-20 text-white transition-all duration-300 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >


        {/* Menu */}
        <nav className="mt-10">
          <ul className="space-y-7">
            <li
              className="flex items-center gap-3 p-2 hover:bg-green-700 rounded-md cursor-pointer transition"
              onClick={() => navigate("/dashboard")}
            >
              <MdOutlineSpaceDashboard size={20} /> {isOpen && <span>Dashboard</span>}
            </li>
            <li
              className="flex items-center gap-3 p-2 hover:bg-green-700 rounded-md cursor-pointer transition"
              onClick={() => alert("Você ainda não tem notificação ⃠")}
            >
              <FiMessageSquare size={20} /> {isOpen && <span>Mensagens</span>}
            </li>
            <li
              className="flex items-center gap-3 p-2 hover:bg-green-700 rounded-md cursor-pointer transition"
              onClick={() => navigate("/relatar")}
            >
              <GoReport size={20} /> {isOpen && <span>Ocorência de Amontoados</span>}
            </li>
            <li
              className="flex items-center gap-3 p-2 hover:bg-green-700 rounded-md cursor-pointer transition"
              onClick={() => navigate("/feedback")}
            >
              <VscFeedback size={20} /> {isOpen && <span>Feedback</span>}
            </li>
            <li
              className="flex items-center gap-3 p-2 hover:bg-green-700 rounded-md cursor-pointer transition"
              onClick={() => navigate("/settings")}
            >
              <FiSettings size={20} /> {isOpen && <span>Configurações</span>}
            </li>
            <li
              className="flex items-center gap-3 p-2 hover:bg-red-700 rounded-md cursor-pointer transition"
              onClick={() => alert("Logout")}
            >
              <FiLogOut size={20} /> {isOpen && <span>Sair</span>}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
