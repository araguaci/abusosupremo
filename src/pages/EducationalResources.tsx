import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ExternalLink, ArrowLeft, EyeOff, Users, Search, BookOpen, Library, Film, FileText, Newspaper } from 'lucide-react';
import { educationalResourcesData } from '@/data/educationalResources';
import { EducationalResource } from '@/types/educationalResources';

const EducationalResources: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [resources, setResources] = useState<EducationalResource[]>([]);

  useEffect(() => {
    const lang = i18n.language.split('-')[0];
    setResources(educationalResourcesData[lang] || educationalResourcesData.pt); // Fallback to Portuguese
  }, [i18n.language]);

  const getCategoryIcon = (categoryKey: string) => {
    switch (categoryKey) {
      case 'resource_category_organization':
        return <Users className="h-5 w-5 text-muted-foreground" />;
      case 'resource_category_book':
        return <Library className="h-5 w-5 text-muted-foreground" />;
      case 'resource_category_documentary':
        return <Film className="h-5 w-5 text-muted-foreground" />;
      case 'resource_category_report':
        return <FileText className="h-5 w-5 text-muted-foreground" />;
      case 'resource_category_article':
        return <Newspaper className="h-5 w-5 text-muted-foreground" />;
      default:
        return <BookOpen className="h-5 w-5 text-muted-foreground" />;
    }
  };

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
        <h2 className="flex items-center gap-3"><EyeOff className="h-8 w-8" />{t('understanding_censorship_title')}</h2>
        <p>{t('understanding_censorship_p1')}</p>
        <p>{t('understanding_censorship_p2')}</p>

        <h2 className="flex items-center gap-3"><Users className="h-8 w-8" />{t('impact_on_society_title')}</h2>
        <p>{t('impact_on_society_p1')}</p>
        <p>{t('impact_on_society_p2')}</p>

        <h2 className="flex items-center gap-3"><Search className="h-8 w-8" />{t('how_to_identify_censorship_title')}</h2>
        <ul>
          <li>{t('how_to_identify_censorship_li1')}</li>
          <li>{t('how_to_identify_censorship_li2')}</li>
          <li>{t('how_to_identify_censorship_li3')}</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
          <BookOpen className="h-8 w-8" />
          {t('further_reading_title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.id}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <Card className="h-full hover:bg-muted/50 transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-x-4">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(resource.categoryKey)}
                    <CardTitle className="text-lg">{t(resource.titleKey)}</CardTitle>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </CardHeader>
                <CardContent>
                  <CardDescription>{t(resource.descriptionKey)}</CardDescription>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <div className="text-center">
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

export default EducationalResources;