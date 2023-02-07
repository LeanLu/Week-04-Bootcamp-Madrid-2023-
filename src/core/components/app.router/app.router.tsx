import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MenuOption } from "../app/App";

const Home = lazy(() => import("../../../features/home/page/home"));
const Todo = lazy(() => import("../../../features/todo/page/todo"));
const About = lazy(() => import("../../../features/about/page/about"));

/* ANTES:
import AboutPage from "../../../features/about/page/about";
  import HomePage from "../../../features/home/page/home";
import TodoPage from "../../../features/todo/page/todo";
*/

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
        <Route path={menuOptions[1].path} element={<Todo></Todo>}></Route>
        <Route path={menuOptions[2].path} element={<About></About>}></Route>
        <Route
          path={"*"}
          element={<Navigate to={"/"} replace={true}></Navigate>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
