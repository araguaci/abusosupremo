import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-card text-card-foreground py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">          
          <a href="https://abusosupremo.netlify.app/#/" className='display-inline-block m-2'>
           🔗 &copy; {t('sources')}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;