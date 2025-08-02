import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Globe, Building, FileText } from 'lucide-react';

const UsaidHubPage: React.FC = () => {
  const { t } = useTranslation();

  const links = [
    {
      to: '/usaid-details',
      title: t('usaid_hub_link_usaid', 'USAID: Controversy and Influence'),
      description: t('usaid_page_description', 'Discover the controversy behind USAID, its political influence, and the impact on Brazil.'),
      icon: <Globe className="h-8 w-8 text-primary flex-shrink-0" />,
    },
    {
      to: '/ongs',
      title: t('usaid_hub_link_ongs', 'USAID-Funded NGOs'),
      description: t('ongs_page_description', 'An investigation into the network of NGOs funded by USAID and their influence on Brazilian elections.'),
      icon: <Building className="h-8 w-8 text-primary flex-shrink-0" />,
    },
    {
      to: '/genese-censura',
      title: t('usaid_hub_link_genese', 'The Genesis of Censorship'),
      description: t('genese_censura_page_description', 'How the censorship of Crusoé magazine marked the beginning of a new phase of judicial activism.'),
      icon: <FileText className="h-8 w-8 text-primary flex-shrink-0" />,
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t('usaid_hub_page_title', 'USAID Influence')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('usaid_hub_page_description', 'Explore the influence of USAID and related organizations on politics and media, particularly in Brazil.')}
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
        {links.map((link) => (
          <Link to={link.to} key={link.to} className="block hover:no-underline group">
            <Card className="h-full flex flex-col transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
              <CardHeader className="flex-grow">
                <div className="flex items-start gap-4">
                  {link.icon}
                  <div className="flex-1">
                    <CardTitle className="text-xl">{link.title}</CardTitle>
                    <CardDescription className="pt-2">{link.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <div className="p-6 pt-0 flex justify-end items-center">
                <ArrowRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UsaidHubPage;