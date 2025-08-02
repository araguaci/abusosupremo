import React from 'react';
import MarkdownPageLayout from '@/components/MarkdownPageLayout';

const UsaidPage: React.FC = () => {
  return (
    <MarkdownPageLayout
      titleKey="usaid_page_title"
      descriptionKey="usaid_page_description"
      contentPath="/locales/{lang}/usaid.md"
      backLink="/usaid"
      backLinkTextKey="back_to_usaid_hub"
    />
  );
};

export default UsaidPage;