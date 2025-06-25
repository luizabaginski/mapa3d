
import React, { useState, useCallback } from 'react';
import { MapArea, OrgChartNode } from './types';
import { MAP_AREAS_DATA, FLOOR_PLAN_IMAGE_URL } from './constants';
import FloorPlanMap from './components/FloorPlanMap';
import OrgChartModal from './components/OrgChartModal';

const App: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<MapArea | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAreaClick = useCallback((area: MapArea) => {
    setSelectedArea(area);
    if (area.orgChartData) {
      setIsModalOpen(true);
    } else {
      // Optionally handle areas with no org chart data, e.g., show a small notification
      alert(`Nenhum organograma disponível para ${area.name}`);
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedArea(null);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-700 flex flex-col items-center p-4 selection:bg-sky-500 selection:text-white">
      <header className="w-full max-w-6xl mb-6 text-center">
        <h1 className="text-4xl font-bold text-[#215b82]">Mapa Interativo do Andar</h1>
        <p className="text-lg text-slate-500">Clique em uma área do mapa para ver o organograma correspondente.</p>
      </header>

      <main className="w-full max-w-6xl bg-white border border-gray-200 shadow-lg rounded-lg p-2 md:p-6">
        <FloorPlanMap
          imageUrl={FLOOR_PLAN_IMAGE_URL}
          areas={MAP_AREAS_DATA}
          onAreaClick={handleAreaClick}
        />
      </main>

      {isModalOpen && selectedArea && selectedArea.orgChartData && (
        <OrgChartModal
          areaName={selectedArea.name}
          orgChartData={selectedArea.orgChartData}
          onClose={closeModal}
        />
      )}

      <footer className="w-full max-w-6xl mt-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Sua Empresa Aqui. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;