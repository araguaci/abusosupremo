import React from 'react';
import MarkdownPageLayout from '@/components/MarkdownPageLayout';

const PrisoesPoliticasPage: React.FC = () => {
  return (
    <MarkdownPageLayout
      titleKey="prisoes_politicas_page_title"
      descriptionKey="prisoes_politicas_page_description"
      contentPath="/locales/{lang}/prisoes-politicas.md"
      backLink="/"
      backLinkTextKey="back_to_timeline"
    />
  );
};

export default PrisoesPoliticasPage;