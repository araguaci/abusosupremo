import React from 'react';
import { useTranslation } from 'react-i18next';
import { EducationalResource } from '@/types/educationalResources';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ExternalLink, Users, Search, BookOpen, Library, Film, FileText, Newspaper } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface EducationalResourceCardProps {
  resource: EducationalResource;
}

const EducationalResourceCard: React.FC<EducationalResourceCardProps> = ({ resource }) => {
  const { t } = useTranslation();

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
    <a
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('open_external_link')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardHeader>
        <CardContent>
          <CardDescription>{t(resource.descriptionKey)}</CardDescription>
        </CardContent>
      </Card>
    </a>
  );
};

export default EducationalResourceCard;