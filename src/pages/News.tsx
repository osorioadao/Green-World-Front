import { useState, useEffect } from "react";
import Skeleton from "../components/Skeleton";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers/Footer";

function News() {
  const [news, setNews] = useState([]); // Estado para armazenar as notícias
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula uma chamada de API
    fetch("https://api.exemplo.com/news") // Troque pela API real
      .then((response) => response.json())
      .then((data) => {
        setNews(data); // Define as notícias no estado
        setIsLoading(false); // Desativa o skeleton quando os dados chegam
      })
      .catch((error) => {
        console.error("Erro ao carregar notícias:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl font-bold my-4">NEWS</h1>

        {isLoading ? (
          // Exibe 3 skeletons enquanto carrega
          <div className="flex flex-col gap-4 w-full max-w-2xl">
            <div className="flex gap-6 items-center">
            <Skeleton width="30%" height="100px" className="rounded-2xl" />
            <Skeleton width="100%" height="100px" />
            </div>
            <div className="flex gap-6 items-center">
            <Skeleton width="30%" height="100px" className="rounded-2xl" />
            <Skeleton width="100%" height="100px" />
            </div>
            <div className="flex gap-6 items-center">
            <Skeleton width="30%" height="100px" className="rounded-2xl" />
            <Skeleton width="100%" height="100px" />
            </div>
            <div className="flex gap-6 items-center">
            <Skeleton width="30%" height="100px" className="rounded-2xl" />
            <Skeleton width="100%" height="100px" />
            </div>
          </div>
        ) : (
          // Renderiza as notícias reais
          <div className="w-full max-w-2xl">
            {news.length > 0 ? (
              news.map((item, index) => (
                <div key={index} className="p-4 border-b border-gray-300">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))
            ) : (
              <p>Nenhuma notícia disponível no momento.</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default News;
