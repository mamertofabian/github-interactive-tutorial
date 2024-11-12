import React from 'react';

interface FlowNode {
  id: string;
  label: string;
  type?: 'start' | 'end' | 'process' | 'decision';
}

interface FlowConnection {
  from: string;
  to: string;
  label?: string;
}

interface FlowChartProps {
  nodes: FlowNode[];
  connections: FlowConnection[];
  direction?: 'horizontal' | 'vertical';
}

export const FlowChart: React.FC<FlowChartProps> = ({
  nodes = [],
  connections = [],
  direction = 'vertical',
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="bg-gray-900 rounded min-h-[300px] p-4 flex items-center justify-center">
        <div className="space-y-4">
          <p className="text-gray-400">Flow Chart Placeholder</p>
          <div className="text-gray-500">
            <p>Nodes: {nodes.length}</p>
            <p>Connections: {connections.length}</p>
            <p>Direction: {direction}</p>
          </div>
        </div>
      </div>
    </div>
  );
};