import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

import Landing from "./pages/landing";

import AuthRoute from "./components/routes/auth-route";
import Login from "./pages/auth/login";

import ProtectedRoute from "./components/routes/protected-route";
import AdminRoute from "./components/routes/admin-route";

import Admin from "./pages/admin";
import Dashboard from "./pages/admin/dashboard";
import Notifications from "./pages/admin/notifications";
import Profile from "./pages/admin/profile";

import ClassroomCourses from "./pages/admin/classroom";
import OnlineCourses from "./pages/admin/online";
import LocalPages from "./pages/admin/local-pages";

// Forms
import AddClassroomForm from "./components/forms/add/add-classroom";
import EditClassroomForm from "./components/forms/edit/edit-classroom";
import AddOnlineClassroomForm from "./components/forms/add/add-online-classroom";
import EditOnlineClassroomForm from "./components/forms/edit/edit-onlineroom";
import AddLocalPagesForm from "./components/forms/add/add-local-pages";
import EditLocalPagesForm from "./components/forms/edit/edit-local-pages";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              {" "}
              <Admin />{" "}
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />

          {/* Classroom Courses Route */}
          <Route
            path="/admin/classroom-courses"
            element={<ClassroomCourses />}
          />
          <Route
            path="/admin/classroom-courses/classroom-course-add"
            element={<AddClassroomForm />}
          />
          <Route
            path="/admin/classroom-courses/classroom-course-edit"
            element={<EditClassroomForm />}
          />

          {/* Online Courses Route */}
          <Route path="/admin/online-courses" element={<OnlineCourses />} />
          <Route
            path="/admin/online-courses/online-classroom-course-add"
            element={<AddOnlineClassroomForm />}
          />
          <Route
            path="/admin/online-course/online-classroom-course-edit"
            element={<EditOnlineClassroomForm />}
          />

          {/* local pages routes */}
          <Route path="/admin/local-pages" element={<LocalPages />} />
          <Route
            path="/admin/local-pages/local-pages-add"
            element={<AddLocalPagesForm />}
          />
          <Route
            path="/admin/local-pages/local-pages-edit"
            element={<EditLocalPagesForm />}
          />
          {
            // user && user.permissions && user.permissions.includes('notification') ?
            //   <Route path='/admin/notifications' element={<Notifications />} />
            //   :
            //   user && user.permissions && user.permissions.includes('profile') ?
            //     <Route path='/admin/profile' element={<Profile />} />
            //     :
            //     <Route path='/admin/dashboard' element={<Dashboard />} />
          }
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h1>Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
