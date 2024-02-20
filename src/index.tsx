// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'App/providers/ThemeProvider';
import { ErrorBoundary } from 'App/providers/ErrorBoundary';
import App from './App/App';
import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
