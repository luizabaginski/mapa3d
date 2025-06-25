
export interface OrgChartNode {
  id: string;
  name: string;
  title: string;
  children?: OrgChartNode[];
}

export interface MapArea {
  id: string;
  name: string;
  position: { // As percentages, string for direct use in style
    left: string;
    top: string;
    width: string;
    height: string;
  };
  orgChartData?: OrgChartNode;
  baseColorClass: string; // e.g., 'bg-blue-500' or 'border-blue-500 border-2'
  hoverEffectClass?: string; // e.g. 'hover:bg-opacity-50' or 'hover:border-opacity-75'
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}
