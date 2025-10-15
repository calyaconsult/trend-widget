import { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function SearchVolumeTrend() {
  const [keywords] = useState([
    { name: 'Christmas', change: 45, volume: 250000 },
    { name: 'Halloween', change: -12, volume: 89000 },
    { name: 'Black Friday', change: 78, volume: 450000 },
    { name: 'Summer Travel', change: 23, volume: 175000 },
    { name: 'New Year Resolution', change: -35, volume: 120000 },
    { name: 'Valentine\'s Day', change: 56, volume: 310000 },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800 rounded-lg shadow-2xl p-8 border border-slate-700">
          <h1 className="text-4xl font-bold text-white mb-2">Search Volume Trends</h1>
          <p className="text-slate-400 mb-8">Real-time keyword trend analysis</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keywords.map((keyword, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-700 to-slate-750 rounded-lg p-6 border border-slate-600 hover:border-slate-500 transition-all hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  {keyword.name}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {keyword.change > 0 ? (
                      <div className="flex items-center gap-1 text-green-400">
                        <TrendingUp size={32} className="font-bold" />
                        <span className="text-2xl font-bold">+{keyword.change}%</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-red-400">
                        <TrendingDown size={32} className="font-bold" />
                        <span className="text-2xl font-bold">{keyword.change}%</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-slate-900 rounded p-3">
                  <p className="text-sm text-slate-400">Monthly searches</p>
                  <p className="text-xl font-bold text-slate-200">
                    {(keyword.volume / 1000).toFixed(0)}K
                  </p>
                </div>

                <div className="mt-4 w-full bg-slate-900 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      keyword.change > 0 ? 'bg-green-500' : 'bg-red-500'
                    }`}
                    style={{
                      width: `${Math.min(Math.abs(keyword.change) * 2, 100)}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-slate-700 rounded-lg border border-slate-600">
            <h2 className="text-lg font-semibold text-white mb-4">Integration Example</h2>
            <pre className="bg-slate-900 p-4 rounded text-sm text-slate-300 overflow-x-auto">
{`// Pass keywords data to the widget
const keywords = [
  { name: 'Christmas', change: 45, volume: 250000 }
];

// The widget displays:
// - Green up arrow for positive trends
// - Red down arrow for negative trends
// - Percentage change
// - Monthly search volume`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
