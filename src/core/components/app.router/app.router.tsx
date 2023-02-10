import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NotesContextProvider } from "../../../features/notes/context/notes.context.provider";
import { MenuOption } from "../app/App";

const Home = lazy(() => import("../../../features/home/page/home"));
const Todo = lazy(() => import("../../../features/todo/page/todo"));
const Notes = lazy(() => import("../../../features/notes/page/notes"));
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
        <Route
          path={menuOptions[2].path}
          element={
            <NotesContextProvider>
              <Notes></Notes>
            </NotesContextProvider>
          }
        ></Route>
        <Route path={menuOptions[3].path} element={<About></About>}></Route>
        <Route
          path={"*"}
          element={<Navigate to={"/home"} replace={true} />}
        ></Route>
      </Routes>
    </Suspense>
  );
}
