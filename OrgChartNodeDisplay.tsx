
import React from 'react';
import { OrgChartNode } from '../types';

interface OrgChartNodeDisplayProps {
  node: OrgChartNode;
  level: number;
}

const OrgChartNodeDisplay: React.FC<OrgChartNodeDisplayProps> = ({ node, level }) => {
  // Using fixed indent values for simplicity here.
  const paddingLeft = `${level * 1.5}rem`; // e.g. level 1 = 1.5rem, level 2 = 3rem

  return (
    <div className={`py-1 ${level > 0 ? 'border-l border-gray-300' : ''}`} style={level > 0 ? { paddingLeft: '1rem', marginLeft: `${(level-1)*1}rem` } : {}}>
      <div className={`p-3 rounded-md shadow-sm ${level === 0 ? 'bg-sky-100' : 'bg-slate-50 hover:bg-slate-100 transition-colors'}`}>
        <p className={`font-semibold ${level === 0 ? 'text-sky-700 text-lg' : 'text-sky-600'}`}>{node.name}</p>
        <p className="text-sm text-slate-500">{node.title}</p>
      </div>
      {node.children && node.children.length > 0 && (
        <div className={`mt-2 ${ level === 0 ? '' : 'pl-2'}`}>
          {node.children.map((child) => (
            <OrgChartNodeDisplay key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrgChartNodeDisplay;