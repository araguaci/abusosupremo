import React from 'react';
import MarkdownPageLayout from '@/components/MarkdownPageLayout';
import ieepaContent from '@/data/ieepa.md?raw';
import { useTranslation } from 'react-i18next';

const IeepaPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MarkdownPageLayout
      title={t('ieepa_page_title')}
      description={t('ieepa_page_description')}
      markdownContent={ieepaContent}
      backLink="/"
      backLinkTextKey="back_to_timeline"
    />
  );
};

export default IeepaPage;