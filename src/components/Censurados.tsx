import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { censuradosData } from '@/data/censurados';
import { ScrollArea } from '@/components/ui/scroll-area';

const Censurados: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-2">{t('censurados_title')}</h1>
      <p className="text-center text-muted-foreground mb-8">{t('censurados_subtitle')}</p>
      
      <ScrollArea className="h-[60vh] w-full rounded-md border p-4">
        <div className="grid gap-4">
          {censuradosData.map((person, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{person.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{person.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <div className="text-center mt-8">
        <Link to="/">
          <Button>{t('back_to_timeline')}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Censurados;