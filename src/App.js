import HomeScreen from "./homescreen/HomeScreen";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/NavBar";
import Cursor from "./cursor/Cursor";
import AnimatedCursor from 'react-animated-cursor'
//import { createBrowserRouter,RouterProvider } from "react-router-dom";
import store, { modeAction } from "./store/Mode";
import { Provider, useSelector } from "react-redux";
import Skills from "./components/Skills";
import MButton from "./Button/MButton";
export default function App() {
  const mode = useSelector(state=>state.data.toggle)
  
  return (
    <div className={`${mode && "dark"} min-h-screen min-w-full bg-[#3ce6a2] sm:bg-blue-400 md:bg-slate-600 lg:bg-white`}>

      <Header/>
         <MButton />
      <AboutMe />
      <AnimatedCursor 
      innerSize={14}
      outerSize={20}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5} />
      <Skills />
    </div>
  )
}