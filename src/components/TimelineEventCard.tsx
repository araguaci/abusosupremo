import React from 'react';
import { useTranslation } from 'react-i18next';
import { CensorshipEvent } from '@/types/censorship';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Copy, Search, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TimelineEventCardProps {
  event: CensorshipEvent;
}

const TimelineEventCard: React.FC<TimelineEventCardProps> = ({ event }) => {
  const { t } = useTranslation();

  const abrirPerplexityComBusca = (title: string, description: string) => {
    const query = `${title} ${description}`;
    const queryEncoded = encodeURIComponent(query);
    const url = `https://www.perplexity.ai/search?q=${queryEncoded}`;
    window.open(url, '_blank');
  };

  const handleCopyDetails = () => {
    const details = `
      ${event.title}
      ${event.date}
      ${event.description}
      ${event.source ? `Source: ${event.source}` : ''}
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
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription className='font-bold'>{event.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{t(`type_${event.type}`)}</span>
          <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full">{t(`target_${event.target}`)}</span>
          {event.source && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(event.source, '_blank')}
                    className="flex items-center gap-1 px-2 py-1 h-auto text-xs"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {t('source')}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{event.source}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
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
            onClick={() => abrirPerplexityComBusca(event.title, event.description)}
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

export default TimelineEventCard;