import React from 'react';
import { Home, Send, LineChart, Settings } from 'lucide-react';
import type { NavigationItem } from '../../types';

interface BottomNavProps {
  activeRoute: string;
  onNavigate: (route: string) => void;
}

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', icon: 'home', route: '/' },
  { id: 'transfer', label: 'Transfer', icon: 'send', route: '/transfer' },
  { id: 'staking', label: 'Staking', icon: 'chart', route: '/staking' },
  { id: 'settings', label: 'Settings', icon: 'settings', route: '/settings' },
];

const iconComponents = {
  home: Home,
  send: Send,
  chart: LineChart,
  settings: Settings,
};

export function BottomNav({ activeRoute, onNavigate }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-lg mx-auto px-4">
        <div className="flex justify-around -mb-px">
          {navigationItems.map((item) => {
            const Icon = iconComponents[item.icon as keyof typeof iconComponents];
            const isActive = activeRoute === item.route;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.route)}
                className={`flex flex-col items-center py-4 px-6 space-y-1 transition-colors relative ${
                  isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}