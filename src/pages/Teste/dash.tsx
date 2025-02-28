import LitterStats from '../Teste/LitterStats'
import Map from '../Teste/Teste';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-3xl font-semibold">Dashboard de Lixo</h1>
      <LitterStats />
      <Map />
    </div>
  );
};

export default Dashboard;
