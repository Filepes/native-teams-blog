import { NextRequest, NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';
import { Readability } from '@mozilla/readability';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch content: ${response.status}`);
    }

    const html = await response.text();

    const dom = new JSDOM(html, { url });
    const document = dom.window.document;

    const reader = new Readability(document);
    const article = reader.parse();

    if (!article) {
      return NextResponse.json(
        { error: 'Could not extract article content' },
        { status: 400 },
      );
    }

    return NextResponse.json({
      title: article.title,
      content: article.content,
      textContent: article.textContent,
      length: article.length,
      excerpt: article.excerpt,
    });
  } catch (error: unknown) {
    console.log('error');
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
}
