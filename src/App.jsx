import "virtual:uno.css";
import "./App.css";

import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const Science = lazy(() => import("./pages/streams/Science"));
const Commerce = lazy(() => import("./pages/streams/Commerce"));
const Humanities = lazy(() => import("./pages/streams/Humanities"));
const CollegeList = lazy(() => import("./pages/streams/CollegeList"));
const Admission = lazy(() => import("./pages/Admission"));
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CourseProvider } from "./Context/courseData";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
import NotFoundPage from "./pages/404/404";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import LinearLoading from "./components/common/LinearLoading";


config.autoAddCss = false;
ReactGA.initialize("G-ZT2XPNZF9Q");
ReactGA.send("pageview");

function App() {
  return (
    <HelmetProvider>
      <CourseProvider>

        <Suspense
          fallback={
            <div><LinearLoading /></div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/science" element={<Science />} />
            <Route path="/commerce" element={<Commerce />} />
            <Route path="/humanities" element={<Humanities />} />
            <Route path="/college/:addonName" element={<CollegeList />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/college/*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </CourseProvider>
    </HelmetProvider>
  );
}

export default App;
