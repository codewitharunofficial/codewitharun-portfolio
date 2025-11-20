import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Qualifications from "@/components/Qualifications";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

const Components = [
  { component: <Hero />, id: "about" },
  { component: <Skills />, id: "skills" },
  { component: <Experience />, id: "experience" },
  { component: <Projects />, id: "projects" },
  { component: <Qualifications />, id: "qualifications" },
  { component: <Footer />, id: "footer" },
];

export default function Home() {
  return (
    <div
      className="scroll-smooth bg-fixed bg-center bg-cover bg-no-repeat pt-14"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      {Components.map((item, index) => (
        <section
          key={index}
          id={item.id}
          className={`${item.id === "footer" ? "" : "min-h-screen"} flex items-center`}
        >
          {item.component}
        </section>
      ))}
    </div>
  );
}
