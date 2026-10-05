import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { cx } from '../lib/util';

const plugins = { remark: [remarkMath, remarkGfm], rehype: [rehypeKatex] };

export default function Markdown({ children, className, compact }: { children: string; className?: string; compact?: boolean }) {
  return (
    <div className={cx('prose-cat', compact && 'prose-compact', className)}>
      <ReactMarkdown remarkPlugins={plugins.remark} rehypePlugins={plugins.rehype}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
