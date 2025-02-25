import {skills} from '@/contants/skills'



const Skills = () => {
  return (
    <section style={{backgroundColor: '#100465ff'}} className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-white">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-md hover:bg-gray-600 cursor-pointer">
            {skill.icon}
            <p className="mt-2 text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
