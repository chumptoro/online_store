import App from 'next/app';
import Page from '../components/Page';



function MyApp({ Component, pageProps }) {
//this effectively makes all Next pages a children of component Page.  in the definition of the component Page,, a next page is referred to as {this.props.children}
	return (
		<Page>
			<Component {...pageProps} /> 
		</Page>
	);
}

export default MyApp; 