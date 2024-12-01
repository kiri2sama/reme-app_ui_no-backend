import React, { useState } from 'react';
import { X, Send, Wallet, Phone, MapPin } from 'lucide-react';

const transferMethods = [
  {
    id: 'onchain',
    label: 'On-Chain Transfer',
    icon: Send,
    description: 'Send to any blockchain address',
  },
  {
    id: 'internal',
    label: 'Platform Transfer',
    icon: Wallet,
    description: 'Instant free transfer to platform users',
  },
  {
    id: 'mobile',
    label: 'Mobile Money',
    icon: Phone,
    description: 'Send to mobile money accounts',
  },
  {
    id: 'cash',
    label: 'Cash Pickup',
    icon: MapPin,
    description: 'Send for cash pickup at local agents',
  },
];

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMethodSelect: (method: string) => void;
}

export function TransferModal({ isOpen, onClose, onMethodSelect }: TransferModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center p-4">
      <div className="bg-white rounded-t-2xl sm:rounded-xl w-full max-w-md">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Select Transfer Method</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          {transferMethods.map((method) => {
            const Icon = method.icon;
            return (
              <button
                key={method.id}
                onClick={() => onMethodSelect(method.id)}
                className="w-full flex items-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-medium">{method.label}</h3>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}