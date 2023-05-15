import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import CalendarPage from "~/pages/Calendar";
import HomePage from "~/pages/Home";
import LoginPage from "~/pages/Login";
import ProfilePage from '~/pages/Profile';
import ReportPage from "~/pages/Report";
import SettingsPage from "~/pages/Settings";
import WorkoutPage from "~/pages/Workout";
import WorkoutListPage from "~/pages/WorkoutList";
import { ROUTES } from "./constanst";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage/>,
  },
  {
    path: ROUTES.login,
    element: <LoginPage/>
  },
  {
    path: ROUTES.workout,
    element: <WorkoutPage/>
  },
  {
    path: ROUTES.workoutList,
    element: <WorkoutListPage/>
  },
  {
    path: ROUTES.calendar,
    element: <CalendarPage/>
  },
  {
    path: ROUTES.settings,
    element: <SettingsPage/>
  },
  {
    path: ROUTES.report,
    element: <ReportPage/>
  },
  {
    path: ROUTES.profile,
    element: <ProfilePage/>
  }
])