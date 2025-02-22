import { useNavigate } from "react-router-dom";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers/Footer";
import image from "../assets/error.svg";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleInicio = (): void => {
    navigate("/");
  };

  return (
    <div>

        <Header />

        <div className="flex-col h-screen flex justify-center items-center gap-12">
      <div className="">
        <img
          className="flex animate-float w-96 pt-28"
          src={image}
          alt="Página não encontrada"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-3 p-2">
        <h2 className="font-semibold text-4xl text-center text-lime-900">
          Página não foi encontrada.
        </h2>
        <p className="text-center text-base">
          A página que está tentando acessar não existe.
        </p>

        <button
          className="px-10 py-2.5 font-semibold rounded-[4px] text-white bg-primary hover:bg-[#61be27]"
          style={{ transition: ".3s ease-in-out" }}
          onClick={handleInicio}
        >
          Voltar à página inicial
        </button>
      </div>

    </div>
    
        <Footer />
    </div>
  );
}
