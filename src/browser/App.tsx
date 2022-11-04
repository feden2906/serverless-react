import "./App.css";

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import useConfig from "../components/useConfig";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

/**
 * Our Web Application
 */
export default function App() {
  const { app } = useConfig();
  return (
    <Routes>
      <Route path={'/'} element={<MainPage/>}>
        {/*<Route index element={<Navigate to={'/home'}/>}/>*/}
        {/*<Route path={'/home'} element={<ErrorPage/>}/>*/}
        {/*<Route path={'quests/:questId'} element={<SingleQuestPage/>}/>*/}
        {/*<Route path="quests" element={<QuestsPage/>}/>*/}
        {/*<Route path="*" element={<NotFoundPage/>}/>*/}
      </Route>
      <Route path="/qqq" element={<h1>Kurwa</h1>}/>

      <Route path={'*'} element={<ErrorPage/>}/>

    </Routes>

    // <Switch>
    //   <Route exact path="/">
    //     <MainPage />
    //   </Route>
    //   <Route>
    //     <ErrorPage />
    //   </Route>
    // </Switch>
  );
}
