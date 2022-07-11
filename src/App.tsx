import React,{useContext} from "react";
import type { RouteObject } from 'react-router-dom';
import './App.css';
import {
  useRoutes,
  Routes,
  Route,
} from "react-router-dom";
import Home from './templates/layouts/Home';
import Course from "./templates/layouts/Course";
import Layout from "./templates/layouts/Layout";
import CoursesIndex from "./templates/layouts/CoursesIndex";
import NoMatch from "./templates/layouts/NoMatch";
import Courses from "./templates/layouts/Courses";

// function App() {
//   const routes: RouteObject[] = [
//     {
//       path: "/",
//       element: < Layout  />,
//       children: [
//         { index: true, element: <Home /> },
//         {
//           path: "/courses",
//           element: <Courses />,
//           children: [
//             { index: true, element: <CoursesIndex /> },
//             { path: "/courses/:id", element: <Course /> },
//           ],
//         },
//         { path: "*", element: <NoMatch /> },
//       ],
//     },
//   ];
//   const element = useRoutes(routes);

//   return (
//     <div className="App">
//       {element}
//     </div>
//   );
// }
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props:any) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Tôi đang được style bởi theme context!
    </button>
  );
}

export default App;