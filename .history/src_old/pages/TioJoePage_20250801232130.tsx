import React, { useEffect, useRef } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import mermaid from 'mermaid';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Import the markdown content
import tioJoeContent from '@/data/tio-joe.md?raw';

// Define a custom interface for the code component props
interface CustomCodeProps extends React.ComponentPropsWithoutRef<'code'> {
  node: any; // The AST node provided by react-markdown
  inline?: boolean; // Whether it's an inline code span or a block
}

// Initialize Mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark', // Or 'default', 'forest', 'neutral'
  securityLevel: 'loose', // Needed for some diagram types
});

const Mermaid: React.FC<{ chart: string }> = ({ chart }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      try {
        mermaid.render('mermaid-chart', chart).then(({ svg }) => {
          if (chartRef.current) {
            chartRef.current.innerHTML = svg;
          }
        });
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        if (chartRef.current) {
          chartRef.current.innerHTML = `<pre>Error rendering Mermaid chart: ${error}</pre>`;
        }
      }
    }
  }, [chart]);

  return <div ref={chartRef} className="overflow-x-auto" />;
};

const TioJoePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t('tio_joe_page_title', 'Operação Tio Joe')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('tio_joe_page_description', 'Uma análise da suposta interferência externa nas eleições brasileiras de 2022.')}
        </p>
      </header>

      <article className="prose dark:prose-invert lg:prose-xl mx-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code: (props: CustomCodeProps) => { // Use the custom interface for typing
              const { node, inline, className, children, ...rest } = props;
              const match = /language-(\w+)/.exec(className || '');
              if (!inline && match && match[1] === 'mermaid') {
                return <Mermaid chart={String(children).replace(/\n$/, '')} />;
              }
              return (
                <code className={className} {...rest}>
                  {children}
                </code>
              );
            },
          }}
        >
          {tioJoeContent}
        </ReactMarkdown>
      </article>

      <div className="text-center mt-8">
        <Link to="/">
          <Button>{t('back_to_timeline')}</Button>
        </Link>
      </div>
    </div>
  );
};

export default TioJoePage;