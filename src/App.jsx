import "virtual:uno.css";
import "./App.css";
import Home from "./pages/Home";
import Science from "./pages/streams/Science";
import Commerce from "./pages/streams/Commerce";
import Humanities from "./pages/streams/Humanities";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollegeList from "./pages/streams/CollegeList";
import { CourseProvider } from "./Context/courseData";
import Admission from "./pages/Admission";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
// import Error404 from "./pages/404/Error404";
import NotFoundPage from "./pages/404/404";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
// import EnhancedCollegeInterface from "./Sample/Sample";
// import CollegeList2 from "./Sample/Sample";
config.autoAddCss = false;


ReactGA.initialize("G-ZT2XPNZF9Q");
ReactGA.send("pageview");

function App() {
  return (
    <HelmetProvider>
    <CourseProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/science" element={<Science />} />
        <Route path="/commerce" element={<Commerce />} />
        <Route path="/humanities" element={<Humanities />} />
        <Route path="/college/:addonName" element={<CollegeList />} />
        <Route path="/admission" element={<Admission/>}/>
        {/* <Route path="*" element={<Error404/>} /> */}
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/college/*" element={<NotFoundPage/>}/>
        {/* <Route path="/sample/:addonName" element={<CollegeList2/>}/> */}
      </Routes>
    </CourseProvider>
    </HelmetProvider>
  );
}

export default App;
