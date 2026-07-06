import React from 'react';

/**
 * A small, dependency-free markdown renderer tailored to the exact subset of
 * markdown used by the JSLearn lesson content: headings (##), bold, italic,
 * inline code, fenced code blocks, blockquotes, tables, and ordered/unordered
 * lists. This avoids pulling in a heavy third party markdown library for a
 * known, bounded input format.
 */

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Order matters: inline code first (so ** inside code isn't touched),
  // then bold, then italic.
  const tokens = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);
  tokens.forEach((token, i) => {
    if (!token) return;
    const key = `${keyPrefix}-${i}`;
    if (token.startsWith('`') && token.endsWith('`')) {
      nodes.push(
        <code key={key} className="inline-code">
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('**') && token.endsWith('**')) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('*') && token.endsWith('*')) {
      nodes.push(<em key={key}>{token.slice(1, -1)}</em>);
    } else {
      nodes.push(token);
    }
  });
  return nodes;
}

function isTableSeparator(line: string): boolean {
  return /^\|?[\s:|-]+\|?$/.test(line.trim()) && line.includes('-');
}

function parseTableRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  return trimmed.split('|').map((cell) => cell.trim());
}

export const Markdown: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n');
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === '') {
      i++;
      continue;
    }

    // Fenced code block
    if (line.trim().startsWith('```')) {
      const lang = line.trim().slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      blocks.push(
        <pre className="code-block" key={`code-${key++}`} data-lang={lang}>
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
      continue;
    }

    // Heading
    if (line.trim().startsWith('## ')) {
      blocks.push(
        <h2 className="md-h2" key={`h2-${key++}`}>
          {renderInline(line.trim().slice(3), `h2-${key}`)}
        </h2>
      );
      i++;
      continue;
    }
    if (line.trim().startsWith('### ')) {
      blocks.push(
        <h3 className="md-h3" key={`h3-${key++}`}>
          {renderInline(line.trim().slice(4), `h3-${key}`)}
        </h3>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.trim().startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      blocks.push(
        <blockquote className="md-quote" key={`q-${key++}`}>
          <p>{renderInline(quoteLines.join(' '), `q-${key}`)}</p>
        </blockquote>
      );
      continue;
    }

    // Table
    if (line.includes('|') && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      const headerCells = parseTableRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
        rows.push(parseTableRow(lines[i]));
        i++;
      }
      blocks.push(
        <div className="md-table-wrap" key={`table-${key++}`}>
          <table className="md-table">
            <thead>
              <tr>
                {headerCells.map((cell, idx) => (
                  <th key={idx}>{renderInline(cell, `th-${idx}`)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx}>{renderInline(cell, `td-${rIdx}-${cIdx}`)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list
    if (/^-\s+/.test(line.trim())) {
      const items: string[] = [];
      while (i < lines.length && /^-\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^-\s+/, ''));
        i++;
      }
      blocks.push(
        <ul className="md-list" key={`ul-${key++}`}>
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item, `li-${idx}`)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(line.trim())) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push(
        <ol className="md-list" key={`ol-${key++}`}>
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item, `oli-${idx}`)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Paragraph (collect consecutive plain lines)
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].trim().startsWith('```') &&
      !lines[i].trim().startsWith('#') &&
      !lines[i].trim().startsWith('>') &&
      !/^-\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(
      <p className="md-p" key={`p-${key++}`}>
        {renderInline(paraLines.join(' '), `p-${key}`)}
      </p>
    );
  }

  return <div className="markdown-body">{blocks}</div>;
};

export default Markdown;
