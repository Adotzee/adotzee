import React from 'react';
import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'pink';
  subtitle?: string;
  trend?: number;
  loading?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  color, 
  subtitle, 
  trend,
  loading = false 
}) => {
  const gradients = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    pink: 'from-pink-500 to-pink-600',
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-6 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-8 bg-gray-200 rounded w-16"></div>
            <div className="h-3 bg-gray-200 rounded w-20"></div>
          </div>
          <div className="w-16 h-16 bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-600 mb-2">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-1">
            {value.toLocaleString()}
          </p>
          <div className="flex items-center space-x-2">
            {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
            {trend !== undefined && (
              <div className={`flex items-center text-xs font-medium ${
                trend >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {trend >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                <span className="ml-1">{Math.abs(trend)}%</span>
              </div>
            )}
          </div>
        </div>
        <div className={`
          p-4 rounded-2xl bg-gradient-to-br ${gradients[color]} text-white shadow-lg
          group-hover:scale-110 transition-transform duration-300
        `}>
          <Icon size={28} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;