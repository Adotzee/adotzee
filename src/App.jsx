import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CourseProvider } from "./Context/courseData";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
import LinearLoading from "./components/common/LinearLoading";
import NotFoundPage from "./pages/404/404";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Toaster } from "react-hot-toast";
import './App.css';

import CourseManagement from "./Admin/components/Courses/CourseManagement";
import CollegeManagement from "./Admin/components/Colleges/CollegeManagement";
import AddonManagement from "./Admin/components/Addons/AddonManagement";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const Science = lazy(() => import("./pages/streams/Science"));
const Commerce = lazy(() => import("./pages/streams/Commerce"));
const Humanities = lazy(() => import("./pages/streams/Humanities"));
const CollegeList = lazy(() => import("./pages/streams/CollegeList"));
const Admission = lazy(() => import("./pages/Admission"));
const CourseSelectionUI = lazy(() => import("./pages/CourseSelectionUI"));
const CourseBrowserApp = lazy(() => import("./pages/CourseBrowserApp"));
const AdminLayout = lazy(() => import("./Admin/AdminLayout"));
const Dashboard = lazy(() => import("./Admin/components/Dashboard/Dashboard"));

config.autoAddCss = false;

ReactGA.initialize("G-ZT2XPNZF9Q");
ReactGA.send("pageview");

function App() {
  const hostname = window.location.hostname;
  const isAdminSubdomain = hostname.startsWith("admin."); // admin.adotzee.in

  return (
    <HelmetProvider>
      <CourseProvider>
        <Suspense fallback={<LinearLoading />}>
          <Router>
            <Routes>
              {isAdminSubdomain ? (
                // ✅ Admin-only routes
                <Route path="/" element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="courses" element={<CourseManagement />} />
                  <Route path="colleges" element={<CollegeManagement />} />
                  <Route path="addons" element={<AddonManagement />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              ) : (
                // ✅ Main site routes
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/science" element={<Science />} />
                  <Route path="/commerce" element={<Commerce />} />
                  <Route path="/humanities" element={<Humanities />} />
                  <Route path="/college/:addonName" element={<CollegeList />} />
                  <Route path="/admission" element={<Admission />} />
                  <Route path="/sample" element={<CourseSelectionUI />} />
                  <Route path="/sam" element={<CourseBrowserApp />} />
                  <Route path="*" element={<NotFoundPage />} />
                </>
              )}
            </Routes>
          </Router>
        </Suspense>
        <Toaster position="top-right" />
      </CourseProvider>
    </HelmetProvider>
  );
}

export default App;
