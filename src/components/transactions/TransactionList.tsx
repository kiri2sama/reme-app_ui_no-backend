import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import type { Transaction } from '../../types';

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
      </div>
      <div className="divide-y">
        {transactions.map((tx) => (
          <div key={tx.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-gray-100">
                {tx.type === 'send' ? (
                  <ArrowUpRight className="h-5 w-5 text-red-500" />
                ) : (
                  <ArrowDownLeft className="h-5 w-5 text-green-500" />
                )}
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {tx.type === 'send' ? 'Sent to' : 'Received from'} {tx.type === 'send' ? tx.recipient : tx.sender}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(tx.timestamp).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {tx.type === 'send' ? '-' : '+'}{tx.currency} {tx.amount}
                </p>
                <p className={`text-sm ${tx.status === 'completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                  {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}