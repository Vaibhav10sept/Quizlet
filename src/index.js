import React, { Suspense } from 'react';

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Preloader from './preloader/Preloader';

import 'antd/dist/antd.css'; 
const OtherComponent = React.lazy(() => import('./App'));

ReactDOM.render(<Suspense fallback={<Preloader/>}>
    <OtherComponent />
    </Suspense>,  document.getElementById("root"));

reportWebVitals()
