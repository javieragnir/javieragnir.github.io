import Project from './Project';
import { StyledProjects, ProjectFlex } from './styles/Projects.styled';

export default function Projects() {
  return (
    <StyledProjects>
      <h2>Projects</h2>
      <p>These are some of the things that I&apos;ve worked on recently.</p>
      <ProjectFlex>
        <Project />
      </ProjectFlex>
    </StyledProjects>
  );
}
