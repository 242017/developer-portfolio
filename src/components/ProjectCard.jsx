function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img className="project-card__image" src={project.image} alt={`${project.title} screenshot`} />

      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__detail">
          <h4>Problem</h4>
          <p>{project.problem}</p>
        </div>

        <div className="project-card__detail">
          <h4>Why it matters</h4>
          <p>{project.impact}</p>
        </div>

        <div className="project-card__tags">
          {project.technologies.map((technology) => (
            <span className="project-card__tag" key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-card__links">
          <a href={project.demo} target="_blank" rel="noreferrer">Live demo</a>
          <a href={project.repo} target="_blank" rel="noreferrer">Repository</a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
