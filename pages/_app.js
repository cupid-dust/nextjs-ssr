import { AuthProvider } from '../context/AuthContext';
import { Provider } from 'react-redux';
import { wrapper } from '../store';
import '../styles/globals.css';

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
