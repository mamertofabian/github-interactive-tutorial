import React from 'react';

interface ComparisonViewProps {
  beforeTitle?: string;
  afterTitle?: string;
  beforeContent?: React.ReactNode;
  afterContent?: React.ReactNode;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({
  beforeTitle = 'Before',
  afterTitle = 'After',
  beforeContent,
  afterContent,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{beforeTitle}</h3>
        <div className="bg-gray-900 rounded p-4 min-h-[200px] flex items-center justify-center">
          {beforeContent || <p className="text-gray-400">Before Content Placeholder</p>}
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{afterTitle}</h3>
        <div className="bg-gray-900 rounded p-4 min-h-[200px] flex items-center justify-center">
          {afterContent || <p className="text-gray-400">After Content Placeholder</p>}
        </div>
      </div>
    </div>
  );
};