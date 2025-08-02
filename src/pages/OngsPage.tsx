import React from 'react';
import MarkdownPageLayout from '@/components/MarkdownPageLayout';

const OngsPage: React.FC = () => {
  return (
    <MarkdownPageLayout
      titleKey="ongs_page_title"
      descriptionKey="ongs_page_description"
      contentPath="/locales/{lang}/ongs.md"
      backLink="/usaid"
      backLinkTextKey="back_to_usaid_hub"
    />
  );
};

export default OngsPage;