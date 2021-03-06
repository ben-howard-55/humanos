import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Routine from "./routes/routine";
import DailyOverview from "./routes/daily-overview";
import Day from "./routes/day";

import { AppContextProvider } from "./context";
import { DeadlineView } from "./routes/deadline-view";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="routine" element={<Routine />} />
            <Route path="deadlineview" element={<DeadlineView />} />
            <Route path="dailyoverview" element={<DailyOverview />}>
              <Route path=":date" element={<Day />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404 page not found</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
