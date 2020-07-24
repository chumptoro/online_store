import App from 'next/app';
import Page from '../components/Page';



function MyApp({ Component, pageProps }) {
  return (
  	<Page>
  		<Component {...pageProps} />
  	</Page>
  );
}

export default MyApp;