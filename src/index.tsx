import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {ErrorBoundary} from "app/providers/ErrorBoundery";
import App from "./app/App";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import 'shared/config/i18n/i18n'




const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)


