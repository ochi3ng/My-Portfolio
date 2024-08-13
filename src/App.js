import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar/>
        <Banner/>
        <Features/>
        <Projects/>
        <Resume/>
    </div>
  );
}

export default App;
