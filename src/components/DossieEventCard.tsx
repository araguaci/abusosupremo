import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DossieEvent } from '@/types/dossie';
import { Calendar, Copy, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface DossieEventCardProps {
  event: DossieEvent;
}

const DossieEventCard: React.FC<DossieEventCardProps> = ({ event }) => {
  const { t } = useTranslation();

  const abrirPerplexityComBusca = (acao: string) => {
    const queryEncoded = encodeURIComponent(acao);
    const url = `https://www.perplexity.ai/search?q=${queryEncoded}`;
    window.open(url, '_blank');
  };

  const handleCopyDetails = () => {
    const details = `
      ${t('date')}: ${event.data}
      ${t('action')}: ${event.acao}
      ${t('violations')}: ${event.violacao.join(', ')}
    `.trim();
    navigator.clipboard.writeText(details)
      .then(() => {
        toast.success(t('copy_details_success'));
      })
      .catch(() => {
        toast.error(t('copy_details_error'));
      });
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{event.data}</span>
        </div>
        <CardTitle className="text-base">{event.acao}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="flex-grow mb-4">
          <p className="text-sm font-semibold mb-2">{t('violations')}:</p>
          <div className="flex flex-wrap gap-2">
            {event.violacao.map((v, index) => (
              <Badge key={index} variant="secondary">{v}</Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs mt-auto border-t pt-4">
           <Button
            variant="outline"
            size="sm"
            onClick={handleCopyDetails}
            className="flex items-center gap-1 px-2 py-1 h-auto text-xs"
          >
            <Copy className="h-3 w-3" />
            {t('copy_details')}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => abrirPerplexityComBusca(event.acao)}
            className="flex items-center gap-1 px-2 py-1 h-auto text-xs"
          >
            <Search className="h-3 w-3" />
            {t('search_perplexity')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DossieEventCard;