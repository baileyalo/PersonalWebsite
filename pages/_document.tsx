import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { THEME_CHOICE_KEY } from '../constants';

const themeBootScript = `
(function () {
  try {
    var t = localStorage.getItem('${THEME_CHOICE_KEY}');
    if (t !== 'light' && t !== 'dark') t = 'dark';
    document.documentElement.setAttribute('data-theme', t);
    document.documentElement.classList.toggle('dark', t === 'dark');
  } catch (e) {}
})();
`;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" data-theme="dark" className="dark">
        <Head>
          <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
