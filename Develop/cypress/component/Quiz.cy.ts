import Quiz from '../../client/src/components/Quiz'

describe('Quiz Component', () => {
    it('should render the quiz start button', () => {
      cy.mount(<Quiz /> as typeof Quiz);
      cy.get('button').contains('Start Quiz').should('exist');
    });
  
    it('should start the quiz when the start button is clicked', () => {
      cy.mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();
      cy.get('h2').should('exist');
    });
  
    it('should show the score after completing the quiz', () => {
      cy.mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();
      cy.get('button').contains('1').click();
      cy.get('button').contains('2').click();
      
      cy.get('h2').contains('Quiz Completed').should('exist');
      cy.get('.alert-success').contains('Your score').should('exist');
    });
  });
  