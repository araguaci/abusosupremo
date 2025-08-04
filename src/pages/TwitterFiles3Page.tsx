import React from 'react';
import MarkdownPageLayout from '../components/MarkdownPageLayout';
import { useTranslation } from 'react-i18next';

const TwitterFiles3Page: React.FC = () => {
  const { i18n } = useTranslation();
  const contentPath = `/locales/${i18n.language}/twitter-files-brazil3.md`;

  return (
    <MarkdownPageLayout
      contentPath={contentPath}
      titleKey="twitter_files_brazil_3_title"
      backLink="/"
      backLinkTextKey="back_to_twitter_files_3"
    />
  );
};

export default TwitterFiles3Page;