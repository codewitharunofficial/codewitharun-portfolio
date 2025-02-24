import About from "./About";
import Hero from "./Hero";

const GridContainer = () => {
    return (
      <section className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <Hero />
          </div>
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <About />
          </div>
        </div>
      </section>
    );
  };
  
  export default GridContainer;
  