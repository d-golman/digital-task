import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { useStore } from '../store';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const Global = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #393E46;
  }
  .container{
    max-width: 1200px;
    margin: auto;
  }
  }
  `;

  return (
    <Provider store={store}>
      <Global />
      <Component {...pageProps} />
    </Provider>
  );
}