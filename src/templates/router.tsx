import React from 'react';
import type { RouteObject } from 'react-router-dom'; 
import Course from './layouts/Course';
import Courses from './layouts/Courses';
import CoursesIndex from './layouts/CoursesIndex';
import Home from './layouts/Home';
import Layout from './layouts/Layout';
import NoMatch from './layouts/NoMatch';

export const routes: RouteObject[] = [
    {
      path: "/",
      element: < Layout  />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/courses",
          element: <Courses />,
          children: [
            { index: true, element: <CoursesIndex /> },
            { path: "/courses/:id", element: <Course /> },
          ],
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];
