import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface MarkdownPageLayoutProps {
  // Option 1: For fetching and translating content
  titleKey?: string;
  descriptionKey?: string;
  contentPath?: string; // Path to the markdown file, e.g., 'public/locales/{lang}/tio-joe.md'

  // Option 2: For directly providing content (already translated/loaded)
  title?: string; // Directly provided title (already translated)
  description?: string; // Directly provided description (already translated)
  markdownContent?: string; // Directly provided markdown content (already loaded)

  backLink: string;
  backLinkTextKey: string;
}

const MarkdownPageLayout: React.FC<MarkdownPageLayoutProps> = ({
  titleKey,
  descriptionKey,
  contentPath,
  title, // New prop
  description, // New prop
  markdownContent: directMarkdownContent, // New prop, renamed to avoid conflict
  backLink,
  backLinkTextKey,
}) => {
  const { t, i18n } = useTranslation();
  const [fetchedMarkdownContent, setFetchedMarkdownContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); // Default to false if content is direct
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (contentPath) {
      setLoading(true);
      setError(null);
      const fetchMarkdown = async () => {
        try {
          const currentLang = i18n.language.split('-')[0];
          const localizedContentPath = contentPath.replace('{lang}', currentLang);

          const response = await fetch(localizedContentPath);
          if (!response.ok) {
            throw new Error(`Failed to fetch markdown: ${response.statusText}`);
          }
          const text = await response.text();
          setFetchedMarkdownContent(text);
        } catch (err) {
          console.error("Error fetching markdown:", err);
          setError("Failed to load content.");
        } finally {
          setLoading(false);
        }
      };
      fetchMarkdown();
    } else {
      setFetchedMarkdownContent(directMarkdownContent || ''); // Use direct content if provided
      setLoading(false);
    }
  }, [contentPath, i18n.language, directMarkdownContent]);

  const displayTitle = titleKey ? t(titleKey) : title;
  const displayDescription = descriptionKey ? t(descriptionKey) : description;
  const contentToRender = contentPath ? fetchedMarkdownContent : directMarkdownContent;


  return (
    <div className="container mx-auto p-4 md:p-8 max-w-3xl">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {displayTitle}
        </h1>
        {displayDescription && (
          <p className="text-lg text-muted-foreground">
            {displayDescription}
          </p>
        )}
      </header>

      <section className="prose dark:prose-invert lg:prose-xl mx-auto mb-12">
        {loading && <p>{t('loading_content')}</p>}
        {error && <p className="text-destructive">{t('error_loading_content')}: {error}</p>}
        {!loading && !error && <MarkdownRenderer content={contentToRender || ''} />}
      </section>

      <div className="text-center">
        <Link to={backLink}>
          <Button>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t(backLinkTextKey)}
          </Button>
        </Link>
      </div>
      <div className="text-center">
        <Link to="/genese-censura">            
          <Button variant="outline" className="mt-4 ml-4">
            {t('genese_censura_page_title')}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
        <Link to="/dossie">            
          <Button variant="outline" className="mt-4 ml-4">
            {t('nav_dossie')}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
        <Link to="/prisoes-politicas">            
          <Button variant="outline" className="mt-4 ml-4">
            {t('nav_prisoes_politicas')}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link> 
      </div>
    </div>
  );
};

export default MarkdownPageLayout;