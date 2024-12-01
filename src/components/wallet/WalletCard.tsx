import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import type { WalletBalance } from '../../types';

interface WalletCardProps {
  balance: WalletBalance;
  onSend: () => void;
  onReceive: () => void;
}

export function WalletCard({ balance, onSend, onReceive }: WalletCardProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
      <div className="flex items-center mb-4">
        <Wallet className="h-6 w-6 mr-2" />
        <h2 className="text-lg font-semibold">Your Wallet</h2>
      </div>
      
      <div className="mb-6">
        <p className="text-sm opacity-90">Available Balance</p>
        <p className="text-3xl font-bold">{balance.currency} {balance.fiat.toLocaleString()}</p>
        <p className="text-sm opacity-75">{balance.crypto.toFixed(8)} BTC</p>
      </div>
      
      <div className="flex space-x-4">
        <button
          onClick={onSend}
          className="flex-1 flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 rounded-lg py-2 transition-colors"
        >
          <ArrowUpRight className="h-5 w-5" />
          <span>Send</span>
        </button>
        <button
          onClick={onReceive}
          className="flex-1 flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 rounded-lg py-2 transition-colors"
        >
          <ArrowDownLeft className="h-5 w-5" />
          <span>Receive</span>
        </button>
      </div>
    </div>
  );
}