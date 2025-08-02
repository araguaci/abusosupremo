import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CensorshipEvent } from '@/types/censorship';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CensorshipChartProps {
  events: CensorshipEvent[];
}

const CensorshipChart: React.FC<CensorshipChartProps> = ({ events }) => {
  const { t } = useTranslation();

  const dataByYear = events.reduce((acc, event) => {
    const year = event.year.toString();
    if (!acc[year]) {
      acc[year] = { year, judicial: 0, eleitoral: 0, midiática: 0, total: 0 };
    }
    acc[year][event.type] = (acc[year][event.type] || 0) + 1;
    acc[year].total++;
    return acc;
  }, {} as { [year: string]: { year: string; judicial: number; eleitoral: number; midiática: number; total: number } });

  const chartData = Object.values(dataByYear).sort((a, b) => parseInt(a.year) - parseInt(b.year));

  if (chartData.length === 0) {
    return null;
  }

  return (
    <Card className="mb-8 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">{t('events_by_year_chart_title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis allowDecimals={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
            />
            <Legend />
            <Bar dataKey="judicial" stackId="a" fill="hsl(var(--primary))" name={t('type_judicial')} />
            <Bar dataKey="eleitoral" stackId="a" fill="hsl(var(--accent-foreground))" name={t('type_eleitoral')} />
            <Bar dataKey="midiática" stackId="a" fill="hsl(var(--muted-foreground))" name={t('type_midiática')} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CensorshipChart;