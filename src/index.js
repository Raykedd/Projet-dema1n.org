import React from 'react';
import ReactDOM from 'react-dom/client';
import { ls, ss } from './utils/store';
// import "primereact/resources/themes/soho-dark/theme.css";
// import "primereact/resources/themes/lara-dark-blue/theme.css";
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';    
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { PrimeReactProvider } from 'primereact/api';

import Root from "./routes/root";
import ErrorPage from "./utils/error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const RenderTheme = () => {
  if (ls.getFormated('theme') === true){
    import('./indexDark.css');
  }
  else {
    import('./indexLight.css');
  }
}

// Liste des routes, possible de les déplacer dans un fichier à côté puis de les importer !
// Je passe par des routes pour permettre une scission entre l'application central, le tableau de bord et les applications annexes. Dans l'immédiat peut utile, mais si on décide
// de rendre indépendantes les applications, je pourrais simplement copier coller le code.

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PrimeReactProvider>
        <RenderTheme />
        <RouterProvider router={router}/>
    </PrimeReactProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
