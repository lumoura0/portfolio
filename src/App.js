import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import Loading from "./subComponents/Loading";

//Components
const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const WorkPage = lazy(() => import("./components/WorkPage"));
const SoundBar = lazy(() => import("./subComponents/SoundBar"));

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
          <SoundBar />

          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main} />

              <Route exact path="/about" component={AboutPage} />

              <Route exact path="/blog" component={BlogPage} />

              <Route exact path="/work" component={WorkPage} />

              <Route exact path="/skills" component={MySkillsPage} />
            </Switch>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
