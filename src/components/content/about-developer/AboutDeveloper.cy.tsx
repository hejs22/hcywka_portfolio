import { Developer } from 'shared/types/Portfolio';
import { mount } from 'cypress/react18';
import AboutDeveloper from './AboutDeveloper';
import { AboutDeveloperPageObjects } from './AboutDeveloperPageObjects';

const AboutDeveloperPO = new AboutDeveloperPageObjects();

const buildAboutDeveloper = (mockDeveloper: Developer) => {
  return mount(<AboutDeveloper {...mockDeveloper} />);
};

describe('Testing <AboutDeveloper/>', () => {
  beforeEach(() => {
    return buildAboutDeveloper(AboutDeveloperPO.DEVELOPER);
  });

  describe('Testing layout', () => {
    it('should display correct name', () => {
      AboutDeveloperPO.name
        .should('exist')
        .should('be.visible')
        .should('contain.text', AboutDeveloperPO.DEVELOPER.name);
    });

    it('should display correct role', () => {
      AboutDeveloperPO.role
        .should('exist')
        .should('be.visible')
        .should('contain.text', AboutDeveloperPO.DEVELOPER.role);
    });

    it('should display correct picture', () => {
      AboutDeveloperPO.picture
        .should('exist')
        .should('be.visible')
        .should('have.attr', 'src', AboutDeveloperPO.DEVELOPER.picture);
    });

    it('should display contact buttons container', () => {
      AboutDeveloperPO.contactButtonsContainer.should('exist').should('be.visible');
    });

    it('should display 3 contact buttons', () => {
      AboutDeveloperPO.contactButtons.each(($button) => {
        cy.wrap($button).should('exist').should('be.visible');
      });
    });
  });

  describe('Testing actions', () => {
    it('each button should have proper href attribute', () => {
      AboutDeveloperPO.DEVELOPER.contacts.map((contact) => {
        AboutDeveloperPO.buttonByAltText(contact.name).should('have.attr', 'href', contact.href);
      });
    });
  });
});
