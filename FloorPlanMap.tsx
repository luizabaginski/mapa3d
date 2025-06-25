
import React from 'react';
import { MapArea } from '../types';

interface FloorPlanMapProps {
  imageUrl: string;
  areas: MapArea[];
  onAreaClick: (area: MapArea) => void;
}

const FloorPlanMap: React.FC<FloorPlanMapProps> = ({ imageUrl, areas, onAreaClick }) => {
  return (
    <div className="relative w-full aspect-[946/542] overflow-hidden rounded-md border border-gray-300"> {/* Aspect ratio based on new image dimensions */}
      <img 
        src={imageUrl} 
        alt="Planta do Andar" 
        className="absolute top-0 left-0 w-full h-full object-contain" // Use object-contain to maintain aspect ratio within bounds
      />
      {areas.map((area) => (
        <div
          key={area.id}
          title={area.name} // Basic tooltip
          className={`absolute transition-all duration-200 ease-in-out cursor-pointer group ${area.baseColorClass} ${area.hoverEffectClass}`}
          style={{
            left: area.position.left,
            top: area.position.top,
            width: area.position.width,
            height: area.position.height,
          }}
          onClick={() => onAreaClick(area)}
          role="button" // Accessibility: identify as clickable
          tabIndex={0} // Accessibility: make focusable
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onAreaClick(area); }} // Accessibility: allow keyboard activation
          aria-label={`Visualizar organograma de ${area.name}`} // Accessibility: provide context for screen readers
        >
          <span className={`absolute px-2 py-1 text-xs text-sky-700 bg-white border border-gray-300 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap
            ${area.tooltipPosition === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 mb-2' : ''}
            ${area.tooltipPosition === 'bottom' ? 'top-full left-1/2 -translate-x-1/2 mt-2' : ''}
            ${area.tooltipPosition === 'left' ? 'right-full top-1/2 -translate-y-1/2 mr-2' : ''}
            ${area.tooltipPosition === 'right' ? 'left-full top-1/2 -translate-y-1/2 ml-2' : ''}
            ${!area.tooltipPosition ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''} 
          `}>
            {area.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FloorPlanMap;