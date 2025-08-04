import React from 'react';
import { UsaidTseEvent } from '@/types/usaid';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import {
  Landmark, Users, Megaphone, Bot, Gavel, FileText, Link as LinkIcon, MapPin, Calendar, AlertTriangle, Info, AlertOctagon, LucideIcon
} from 'lucide-react';

const getIconForTitle = (title: string): LucideIcon => {
  const lowerCaseTitle = title.toLowerCase();
  if (lowerCaseTitle.includes('tse') || lowerCaseTitle.includes('usaid')) return Landmark;
  if (lowerCaseTitle.includes('ong')) return Users;
  if (lowerCaseTitle.includes('campanha') || lowerCaseTitle.includes('desinformação')) return Megaphone;
  if (lowerCaseTitle.includes('bot') || lowerCaseTitle.includes('mav')) return Bot;
  if (lowerCaseTitle.includes('prisões') || lowerCaseTitle.includes('judicial') || lowerCaseTitle.includes('custódia')) return Gavel;
  if (lowerCaseTitle.includes('relatórios')) return FileText;
  return Info;
};

const UsaidTseEventCard: React.FC<{ event: UsaidTseEvent }> = ({ event }) => {
  const { t, i18n } = useTranslation();

  const gravityConfig = {
    baixa: {
      color: 'border-green-500/50 bg-green-500/10 hover:border-green-500',
      iconColor: 'text-green-500',
      icon: Info,
      label: t('gravity_baixa')
    },
    média: {
      color: 'border-yellow-500/50 bg-yellow-500/10 hover:border-yellow-500',
      iconColor: 'text-yellow-500',
      icon: AlertTriangle,
      label: t('gravity_media')
    },
    alta: {
      color: 'border-red-500/50 bg-red-500/10 hover:border-red-500',
      iconColor: 'text-red-500',
      icon: AlertOctagon,
      label: t('gravity_alta')
    },
  };

  const config = gravityConfig[event.gravidade];
  const ThemeIcon = getIconForTitle(event.titulo);

  return (
    <Card className={`w-full transition-all ${config.color}`}>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div>
            <CardTitle className="text-lg mb-1">{event.titulo}</CardTitle>
            <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-bold">
              <span className="flex items-center"><Calendar className="w-3 h-3 mr-1.5 font-bold" /> {format(new Date(event.data), 'dd/MM/yyyy', { locale: i18n.language === 'pt' ? ptBR : undefined })}</span>
              <span className="flex items-center"><MapPin className="w-3 h-3 mr-1.5" /> {event.local}</span>
            </CardDescription>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge variant="outline" className={`capitalize ${config.color} ${config.iconColor}`}>
              <config.icon className="w-3 h-3 mr-1.5" />
              {config.label}
            </Badge>
            <div className="p-2 bg-muted rounded-full">
              <ThemeIcon className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{event.descrição}</p>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">{t('involved')}</h4>
          <div className="flex flex-wrap gap-2">
            {event.envolvidos.map((person, index) => (
              <Badge key={index} variant="secondary">{person}</Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">{t('sources')}</h4>
          <div className="flex flex-col space-y-2">
            {event.fontes.map((source, index) => (
              <a
                key={index}
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-2 truncate"
              >
                <LinkIcon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{source}</span>
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsaidTseEventCard;