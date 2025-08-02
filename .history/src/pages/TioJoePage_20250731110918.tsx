import React from 'react';
import MarkdownPageLayout from '@/components/MarkdownPageLayout';

const TioJoePage: React.FC = () => {
  return (
    <MarkdownPageLayout
      titleKey="tio_joe_page_title"
      descriptionKey="tio_joe_page_description"
      contentPath="/locales/{lang}/tio-joe.md"
      backLink="/"
      backLinkTextKey="back_to_timeline"
    />
  );
};

export default TioJoePage;