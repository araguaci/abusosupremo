import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Sailboat,
  Crown,
  Landmark,
  Radio,
  ShieldAlert,
  Vote,
  ArrowLeft,
} from 'lucide-react';
import { HistoryCensorshipEvent, Period } from '@/types/historyCensorship';

const periodIcons: { [key: string]: React.ReactNode } = {
  colonial: <Sailboat className="h-6 w-6 text-primary flex-shrink-0" />,
  imperial: <Crown className="h-6 w-6 text-primary flex-shrink-0" />,
  republica_velha: <Landmark className="h-6 w-6 text-primary flex-shrink-0" />,
  era_vargas: <Radio className="h-6 w-6 text-primary flex-shrink-0" />,
  republica_nova_ditadura: <ShieldAlert className="h-6 w-6 text-primary flex-shrink-0" />,
  democracia_pos_1985: <Vote className="h-6 w-6 text-primary flex-shrink-0" />,
};

const HistoryOfCensorship: React.FC = () => {
  const { t } = useTranslation();
  const [isCitationDialogOpen, setIsCitationDialogOpen] = useState(false);
  const [currentCitationText, setCurrentCitationText] = useState('');

  // Fetch data directly from translation files
  const historyPeriods = t('history_periods', { returnObjects: true }) as { [key: string]: Period };
  const citationsData = t('citations_data', { returnObjects: true }) as { [key: string]: string };
  const periodKeys = Object.keys(historyPeriods);

  const handleCitationClick = (citationNumber: number) => {
    const citationText = citationsData[citationNumber];
    if (citationText) {
      setCurrentCitationText(citationText);
      setIsCitationDialogOpen(true);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-3xl">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t('history_of_censorship_page_title')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('history_of_censorship_page_description')}
        </p>
      </header>

      <section className="mb-12">
        <Accordion type="single" collapsible className="w-full">
          {periodKeys.map((periodKey) => {
            const periodData = historyPeriods[periodKey];
            return (
              <AccordionItem key={periodKey} value={periodKey}>
                <AccordionTrigger className="text-2xl font-semibold hover:no-underline text-left">
                  <div className="flex items-center gap-4 w-full">
                    {periodIcons[periodKey]}
                    <span className="flex-1">{periodData.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <p className="italic text-muted-foreground mb-4">
                    {periodData.description}
                  </p>
                  <div className="space-y-4">
                    {periodData.events.map((event: HistoryCensorshipEvent, index: number) => (
                      <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-200">
                        <CardHeader>
                          <CardTitle className="text-lg">{event.date}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-2">{event.description}</p>
                          {event.citations && event.citations.length > 0 && (
                            <p className="text-sm text-gray-500">
                              <strong>{t('citations')}:</strong>{' '}
                              {event.citations.map((citationNum, idx) => (
                                <React.Fragment key={idx}>
                                  <span
                                    className="cursor-pointer text-blue-600 hover:underline"
                                    onClick={() => handleCitationClick(citationNum)}
                                  >
                                    [{citationNum}]
                                  </span>
                                  {idx < event.citations.length - 1 && ', '}
                                </React.Fragment>
                              ))}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </section>

      <Dialog open={isCitationDialogOpen} onOpenChange={setIsCitationDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('citation_details_title')}</DialogTitle>
            <DialogDescription>
              {currentCitationText}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="text-center mt-8">
        <Link to="/">
          <Button>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('back_to_timeline')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HistoryOfCensorship;