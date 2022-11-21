import Project from './Project';
import { StyledProjects, ProjectFlex } from './styles/Projects.styled';

export default function Projects() {
  return (
    <StyledProjects>
      <h1>Projects</h1>
      <p>These are some of the things that I&apos;ve worked on recently.</p>
      <ProjectFlex>
        <Project />
      </ProjectFlex>
    </StyledProjects>
  );
}
