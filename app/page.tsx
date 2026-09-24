import Link from 'next/link';
import projectsData from './component/data.json';

export default function Home() {
  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'UI/UX Design',
    'Git & GitHub',
  ];

  const services = [
    {
      title: 'Web Development',
      description:
        'Building responsive, fast, and modern web applications with React and Next.js.',
      icon: '💻',
    },
    {
      title: 'Full Stack Solutions',
      description:
        'Integrating scalable backends, database solutions, and authentication seamless user flows.',
      icon: '⚙️',
    },
    {
      title: 'UI/UX Design',
      description:
        'Crafting intuitive user interfaces and sleek visual experiences.',
      icon: '🎨',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 px-6 max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        
        <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 mb-6">
          Full Stack Developer & Designer
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-3xl leading-tight">
          Crafting Digital Experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Precision</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Passion</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
          Hi, I&apos;m a developer specializing in modern web development, scalable user interfaces, and intuitive digital solutions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/Project"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-600/30"
          >
            Explore Projects
          </Link>
          <Link
            href="/Appointment"
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium transition-all"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* About & Skills Section */}
      <section className="py-16 px-6 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              I am a passionate software developer focused on building modern, performant, and high-quality web applications.
              I thrive on converting complex problems into elegant, user-friendly digital products.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Whether you need a brand-new website, an interactive web application, or a complete design overhaul,
              I bring a strong foundation in modern web technologies and user experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-sm text-blue-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">What I Offer</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Comprehensive web development and design services tailored to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6 bg-slate-900/40 border-t border-slate-800 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
              <p className="text-slate-400">Some of the projects I&apos;ve built recently.</p>
            </div>
            <Link
              href="/Project"
              className="text-blue-400 hover:text-blue-300 font-medium hidden sm:inline-flex items-center gap-1"
            >
              View all projects &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 capitalize">
                    {project.name}
                  </h3>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Visit Project &rarr;
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/Project"
              className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
            >
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action / Footer Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to work together?</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Feel free to reach out for collaborations, project inquiries, or booking an appointment.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/Appointment"
            className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/30"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="mt-auto py-6 border-t border-slate-800 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
