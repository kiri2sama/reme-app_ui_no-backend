import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/navigation/BottomNav';
import { WalletCard } from './components/wallet/WalletCard';
import { TransactionList } from './components/transactions/TransactionList';
import { TransferFAB } from './components/transfer/TransferFAB';
import { TransferModal } from './components/transfer/TransferModal';
import type { Transaction, WalletBalance } from './types';

const mockWallet: WalletBalance = {
  fiat: 1250.50,
  crypto: 0.03245,
  currency: 'USD',
  staked: 0.01,
  rewards: 0.0001
};

const mockTransactions: Transaction[] = [
  {
    id: '1',
    amount: 500,
    currency: 'USD',
    status: 'completed',
    type: 'send',
    timestamp: Date.now() - 3600000,
    recipient: 'John Doe',
    txHash: '0x1234...5678',
    fee: 0.001,
    network: 'Ethereum'
  },
  {
    id: '2',
    amount: 750,
    currency: 'USD',
    status: 'pending',
    type: 'receive',
    timestamp: Date.now() - 7200000,
    sender: 'Alice Smith'
  }
];

function App() {
  const [activeRoute, setActiveRoute] = useState('/');
  const [isTransferModalOpen, setTransferModalOpen] = useState(false);

  const handleSend = () => {
    setTransferModalOpen(true);
  };

  const handleReceive = () => {
    console.log('Receive money');
  };

  const handleTransferMethodSelect = (method: string) => {
    console.log('Selected transfer method:', method);
    setTransferModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      
      <main className="max-w-lg mx-auto px-4 py-8">
        <div className="space-y-8">
          <WalletCard
            balance={mockWallet}
            onSend={handleSend}
            onReceive={handleReceive}
          />
          <TransactionList transactions={mockTransactions} />
        </div>
      </main>

      <TransferFAB onClick={() => setTransferModalOpen(true)} />
      <TransferModal
        isOpen={isTransferModalOpen}
        onClose={() => setTransferModalOpen(false)}
        onMethodSelect={handleTransferMethodSelect}
      />
      <BottomNav
        activeRoute={activeRoute}
        onNavigate={setActiveRoute}
      />
    </div>
  );
}

export default App;