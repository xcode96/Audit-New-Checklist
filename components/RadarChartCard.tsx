import React from 'react';
import Card from './Card';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

interface RadarChartCardProps {
    data: { subject: string; value: number }[];
}

const RadarChartCard: React.FC<RadarChartCardProps> = ({ data }) => {
    return (
        <Card className="flex flex-col h-full">
            <div className="flex-grow min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <defs>
                            <radialGradient id="radarGradient">
                                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.6}/>
                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                            </radialGradient>
                        </defs>
                        <PolarGrid stroke="#4a5568" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#a0aec0', fontSize: 12 }} />
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: '#2d3748', 
                                border: '1px solid #4a5568',
                                borderRadius: '0.5rem',
                            }}
                            labelStyle={{ color: '#e2e8f0' }}
                            formatter={(value: number) => [`${value}%`, 'Progress']}
                        />
                        <Radar 
                            name="Progress" 
                            dataKey="value" 
                            stroke="#8b5cf6" 
                            fill="url(#radarGradient)" 
                            fillOpacity={0.7} 
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
             <div className="flex justify-center items-center space-x-4 mt-4">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#8b5cf6' }}></div>
                    <span className="text-xs text-gray-400">Category Progress</span>
                </div>
            </div>
        </Card>
    );
};

export default RadarChartCard;
