import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Contributors from "./components/contributers";
import Mirrors from "./components/mirrors";

const GlowingStars = lazy(() => import("./components/GlowingStars"));



function App() {

  return (
    <>
      <Helmet>
        <title>Mirrors | Mirava</title>
        <meta
          name="description"
          content="Learn more about our mission and team."
        />
        <meta property="og:title" content="Mirava" />
      </Helmet>

      <Suspense fallback={null}>
        <GlowingStars />
      </Suspense>

      <div className="w-full text-white flex flex-col">
        <Navbar />

        <main className="w-full flex-1 flex flex-col items-center px-4 sm:px-6 md:px-[8vw] lg:px-[10vw] py-10 gap-16">
          {/* Mirrors */}
          
<Mirrors/>
<Contributors/>
          {/* Contributors */}
        </main>

        <footer className="py-4 px-4 border-t border-cyan-800/30">
          <p className="text-xs text-center text-cyan-200/50">
            Built with 🩵 by Mirava Contributors
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
