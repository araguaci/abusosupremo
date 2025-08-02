import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const EducationalResources: React.FC = () => {
  const { t } = useTranslation();

  const resources = [
    {
      key: 'further_reading_link1',
      href: 'https://www.article19.org/what-we-do/freedom-of-expression/',
    },
    {
      key: 'further_reading_link2',
      href: 'https://www.hrw.org/topic/free-speech',
    },
    {
      key: 'further_reading_link3',
      href: 'https://rsf.org/en',
    },
    {
      key: 'further_reading_link4',
      href: 'https://www.eff.org/issues/censorship',
    }
  ];

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-3xl">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t('educational_resources_page_title')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('educational_resources_page_description')}
        </p>
      </header>

      <section className="prose dark:prose-invert lg:prose-xl mx-auto mb-12">
        <h2>{t('understanding_censorship_title')}</h2>
        <p>{t('understanding_censorship_p1')}</p>
        <p>{t('understanding_censorship_p2')}</p>

        <h2>{t('impact_on_society_title')}</h2>
        <p>{t('impact_on_society_p1')}</p>
        <p>{t('impact_on_society_p2')}</p>

        <h2>{t('how_to_identify_censorship_title')}</h2>
        <ul>
          <li>{t('how_to_identify_censorship_li1')}</li>
          <li>{t('how_to_identify_censorship_li2')}</li>
          <li>{t('how_to_identify_censorship_li3')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">{t('further_reading_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.key}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <Card className="h-full hover:bg-muted/50 transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-x-4">
                  <CardTitle className="text-lg">{t(resource.key)}</CardTitle>
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <div className="text-center">
        <Link to="/">
          <Button>{t('back_to_timeline')}</Button>
        </Link>
      </div>
    </div>
  );
};

export default EducationalResources;