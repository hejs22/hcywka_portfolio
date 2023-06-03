import { TECHNICAL_SKILLS } from '../../../constants/Skills';

export class SkillsContainerPageObjects {
  public MOCK_SKILLS = TECHNICAL_SKILLS;

  get skillsContainer() {
    return cy.get('.skills-container');
  }

  get skillBadges() {
    return this.skillsContainer.children();
  }
}
