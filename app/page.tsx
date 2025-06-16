import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Qualifications from "@/components/Qualifications";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

const Components = [
  {
    component: <Hero />,
    id: "hero",
  },
  {
    component: <Skills />,
    id: "skills",
  },
  {
    component: <Experience />,
    id: "experience",
  },
  {
    component: <Projects />,
    id: "projects",
  },
  {
    component: <Qualifications />,
    id: "qualifications",
  },
  {
    component: <Footer />,
    id: "footer",
  },
];

export default function Home() {
  return (
    <div>
      {Components.map((item, index) => (
        <div
          key={index}
          className="scroll-smooth"
          style={{ backgroundColor: item.id !== "hero" ? "#100465ff" : "" }}
        >
          <section id={item.id}>{item.component}</section>
        </div>
      ))}
    </div>
  );
}
