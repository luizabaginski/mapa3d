
import React from 'react';
import { OrgChartNode } from '../types';
import OrgChartNodeDisplay from './OrgChartNodeDisplay';

interface OrgChartModalProps {
  areaName: string;
  orgChartData: OrgChartNode;
  onClose: () => void;
}

const OrgChartModal: React.FC<OrgChartModalProps> = ({ areaName, orgChartData, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-300"
      onClick={onClose} // Close on backdrop click
    >
      <div 
        className="bg-white text-slate-700 p-6 rounded-lg shadow-2xl max-w-xl w-full max-h-[80vh] flex flex-col transform transition-all duration-300 scale-95 opacity-0 animate-modal-appear"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
        style={{ animationFillMode: 'forwards' }} // Keep final state of animation
      >
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-300">
          <h2 className="text-2xl font-semibold text-sky-600">Organograma: {areaName}</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-sky-600 transition-colors text-2xl"
            aria-label="Fechar modal"
          >
            &times;
          </button>
        </div>
        <div className="overflow-y-auto pr-2"> {/* Added pr-2 to prevent scrollbar overlap with content in some cases */}
          <OrgChartNodeDisplay node={orgChartData} level={0} />
        </div>
      </div>
      <style>{`
        @keyframes modal-appear {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-modal-appear {
          animation-name: modal-appear;
          animation-duration: 0.3s;
          animation-timing-function: ease-out;
        }
        /* Custom scrollbar for modal content */
        .overflow-y-auto::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
            background: #e2e8f0; /* bg-slate-200 */
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
            background: #94a3b8; /* bg-slate-400 */
            border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
            background: #64748b; /* bg-slate-500 */
        }
      `}</style>
    </div>
  );
};

export default OrgChartModal;