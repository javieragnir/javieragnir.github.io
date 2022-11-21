import { FiMonitor, FiServer, FiTool } from 'react-icons/fi';
import resumePdf from '../files/resume.pdf';
import SkillSection from './SkillSection';
import StyledSkills, { SkillsContainer }  from './styles/Skills.styled';
import Flex from './styles/Flex';

import { frontendSkills, backendSkills, otherSkills } from '../data/skills';

export default function Skills() {
  return (
    <SkillsContainer>
      <StyledSkills>
        <h2>I have experience with:</h2>
        <Flex>
          <SkillSection
            iconComponent={<FiMonitor size={30} />}
            title="Frontend"
            items={frontendSkills}
          />
          <SkillSection
            iconComponent={<FiServer size={30} />}
            title="Backend"
            items={backendSkills}
          />
          <SkillSection
            iconComponent={<FiTool size={30} />}
            title="Languages and Tools"
            items={otherSkills}
          />
        </Flex>
        <p>
          You can download my full resume
          {' '}
          <a target="_blank" href={resumePdf} rel="noreferrer">
            here.
          </a>
        </p>
      </StyledSkills>
    </SkillsContainer>
  );
}
