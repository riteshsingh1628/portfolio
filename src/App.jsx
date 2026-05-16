export default function Portfolio() {
  const skills = {
    Languages: ["Python", "Java", "C", "JavaScript", "SQL"],
    Web: ["React.js", "Node.js", "Express.js", "HTML", "CSS"],
    Database: ["MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  };

  const projects = [
    {
      title: "WorkoutBuddy",
      description:
        "A full-stack fitness tracking application to manage workout routines and monitor user progress.",
      tech: "MongoDB, Express.js, React.js, Node.js",
    },
    {
      title: "Attendance Tracker",
      description:
        "A student attendance management system with backend APIs and MongoDB integration.",
      tech: "MERN Stack, MongoDB",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Ritesh Kumar
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-6">
          Full Stack Developer | MERN Stack Developer | CSE Student
        </p>

        <p className="max-w-2xl text-gray-500 mb-8">
          Computer Science undergraduate skilled in Python, MERN Stack,
          Data Structures & Algorithms with hands-on experience in full-stack
          web development.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-110 hover:bg-gray-200 transition-all duration-300 shadow-lg"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="border border-gray-600 px-6 py-3 rounded-2xl hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-lg"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="border border-gray-600 px-6 py-3 rounded-2xl hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-lg"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>

        <div className="bg-zinc-900 rounded-3xl p-8 shadow-lg hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
          <p className="text-gray-300 leading-8 text-lg">
            I am a Computer Science undergraduate passionate about building
            scalable web applications and solving real-world problems. I have
            experience in MERN stack development, REST APIs, MongoDB, and
            frontend development.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-zinc-900 p-6 rounded-3xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">{category}</h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-black border border-zinc-700 px-4 py-2 rounded-full text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 rounded-3xl p-8 shadow-lg hover:scale-110 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

              <p className="text-gray-400 mb-4 leading-7">
                {project.description}
              </p>

              <p className="text-sm text-gray-500 mb-6">{project.tech}</p>

              <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Certifications & Achievements
          </h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 p-6 rounded-2xl hover:scale-105 hover:bg-zinc-800 transition-all duration-300 cursor-pointer">
              Preliminary English Test (PET) – Cambridge University (2024)
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl hover:scale-105 hover:bg-zinc-800 transition-all duration-300 cursor-pointer">
              Second Prize – Stack Hack Hackathon
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl hover:scale-105 hover:bg-zinc-800 transition-all duration-300 cursor-pointer">
              Recognized for Outstanding Coordination – Multimedia Department
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <p className="text-gray-400 mb-6">
          Feel free to connect with me for internships, collaborations, or
          software development opportunities.
        </p>

        <div className="space-y-4 text-lg text-gray-300">
          <p>Email: riteshsingh0268@gmail.com</p>
          <p>Phone: +91 8306709195</p>
          <p>Location: Bihar, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center text-gray-500">
        © 2026 Ritesh Kumar. All Rights Reserved.
      </footer>
    </div>
  );
}
