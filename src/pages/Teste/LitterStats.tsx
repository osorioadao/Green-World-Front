import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const LitterStats: React.FC = () => {
  const data = {
    labels: ["Plástico", "Vidro", "Orgânico", "Metal", "Outro"],
    datasets: [
      {
        data: [40, 30, 15, 10, 5], // Quantidade de amontoados para cada tipo de lixo
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#FF9F40"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#FF9F40"],
      },
    ],
  };

  return (
    <div className="w-96">
      <h3 className="text-center font-semibold">Distribuição dos Tipos de Lixo</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default LitterStats;
