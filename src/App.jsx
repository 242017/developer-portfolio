import Header from './components/Header.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import jobTrackerImage from './assets/job-application-tracker.png';
import petPlannerImage from './assets/pet-care-planner.png';

const projects = [
  {
    title: 'Job Application Tracker',
    image: jobTrackerImage,
    description:
      'A focused React app for organizing job applications, statuses, notes, links, and follow-up details during a job search.',
    problem:
      'Job seekers often apply to many roles at once and lose track of company names, role details, links, and process status.',
    impact:
      'The app creates a clear pipeline that keeps applications searchable, filtered, and saved locally in the browser.',
    technologies: ['React', 'JavaScript', 'CSS', 'Vite', 'LocalStorage'],
    demo: 'https://polite-lolly-65a77b.netlify.app/',
    repo: 'https://github.com/242017/job-application-tracker',
  },
  {
    title: 'Pet Care Planner',
    image: petPlannerImage,
    description:
      'A warm and practical care dashboard for tracking pet appointments, medicine, food routines, grooming, priorities, and notes.',
    problem:
      'Pet care includes many small but important reminders that are easy to forget across busy weeks.',
    impact:
      'The planner centralizes tasks, completion status, priorities, and categories in a responsive interface.',
    technologies: ['React', 'JavaScript', 'CSS', 'Vite', 'LocalStorage'],
    demo: 'https://creative-swan-908c1a.netlify.app/',
    repo: 'https://github.com/242017/pet-care-planner',
  },
];

function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <section className="hero" id="home">
          <div className="hero__content">
            <p className="hero__eyebrow">Junior Full Stack Developer</p>
            <h1 className="hero__title">Julian Nicolas Ibague Salamanca</h1>
            <p className="hero__text">
              I build practical web applications with React, JavaScript, CSS,
              and clean user-focused interfaces. My goal is to create tools that
              solve real problems and feel simple to use.
            </p>
            <div className="hero__actions">
              <a className="button button_primary" href="#projects">View projects</a>
              <a className="button" href="https://github.com/242017" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div>
            <p className="section-label">About</p>
            <h2 className="section-title">Developer focused on useful products.</h2>
          </div>
          <p className="about__text">
            I am growing as a web developer by building fresh, intentional
            projects that reflect real use cases. I enjoy working with React,
            organizing components, managing state, and turning simple ideas into
            polished portfolio-ready applications.
          </p>
        </section>

        <section className="skills" aria-label="Technical skills">
          {['React', 'JavaScript', 'CSS', 'Vite', 'LocalStorage', 'Git', 'GitHub', 'Netlify'].map((skill) => (
            <span className="skills__item" key={skill}>{skill}</span>
          ))}
        </section>

        <section className="projects" id="projects">
          <div className="projects__header">
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Fresh portfolio projects</h2>
            <p className="projects__intro">
              These projects were created to show practical frontend skills,
              product thinking, responsive layout, and clear project context.
            </p>
          </div>

          <div className="projects__grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Open to junior developer opportunities.</h2>
          <div className="contact__links">
            <a href="https://github.com/242017" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:nicolasibague2420@hotmail.com">Email</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
