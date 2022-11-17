import { StyledSkillSection } from './styles/SkillSection.styled';

export default function SkillSection({ iconComponent, title, items }) {
  return (
    <StyledSkillSection>
      {iconComponent}
      <h3>{title}</h3>
      <ul>
        {items
          && items.map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
    </StyledSkillSection>
  );
}
