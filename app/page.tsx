import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Qualifications from "@/components/Qualifications";
import Footer from "@/components/Footer";

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
        <div key={index} className="scroll-smooth">
          <section id={item.id}>{item.component}</section>
        </div>
      ))}
    </div>
  );
}
