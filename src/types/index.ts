export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  type: 'send' | 'receive' | 'stake' | 'unstake';
  timestamp: number;
  recipient?: string;
  sender?: string;
  txHash?: string;
  fee?: number;
  network?: string;
}

export interface WalletBalance {
  fiat: number;
  crypto: number;
  currency: string;
  staked?: number;
  rewards?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  walletAddress: string;
  phoneNumber?: string;
  kycStatus?: 'none' | 'pending' | 'verified';
  transferLimits?: {
    daily: number;
    monthly: number;
    remaining: number;
  };
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  route: string;
}