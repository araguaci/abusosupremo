import React from 'react';
import MarkdownPageLayout from '@/components/MarkdownPageLayout';

const OfacPage: React.FC = () => {
  return (
    <MarkdownPageLayout
      titleKey="ofac_page_title"
      descriptionKey="ofac_page_description"
      contentPath="public/locales/{lang}/ofac.md"
      backLink="/"
      backLinkTextKey="back_to_timeline"
    />
  );
};

export default OfacPage;