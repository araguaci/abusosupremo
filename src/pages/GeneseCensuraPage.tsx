import React from 'react';
import MarkdownPageLayout from '@/components/MarkdownPageLayout';

const GeneseCensuraPage: React.FC = () => {
  return (
    <MarkdownPageLayout
      titleKey="genese_censura_page_title"
      descriptionKey="genese_censura_page_description"
      contentPath="/locales/{lang}/genese-censura.md"
      backLink="/usaid"
      backLinkTextKey="back_to_usaid_hub"
    />
  );
};

export default GeneseCensuraPage;