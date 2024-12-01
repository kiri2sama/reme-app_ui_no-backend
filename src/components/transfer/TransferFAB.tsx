import React from 'react';
import { Plus } from 'lucide-react';

interface TransferFABProps {
  onClick: () => void;
}

export function TransferFAB({ onClick }: TransferFABProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-4 w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <Plus className="h-6 w-6" />
    </button>
  );
}