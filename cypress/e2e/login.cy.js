
describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Logar com credenciais válidas', () => {
    // Preencher campos de usuário e senha
    cy.get('input[name="username"]').type('user');
    cy.get('input[name="password"]').type('password');

    // Clicar no botão de login
    cy.get('button[type="submit"]').click();

    // Verificar se a navegação ocorreu corretamente para a página principal
    cy.url().should('include', '/'); 
  });

  it('Logar com credenciais erradas', () => {
    // Preencher campos de usuário e senha com credenciais inválidas
    cy.get('input[name="username"]').type('usuario_invalido');
    cy.get('input[name="password"]').type('senha_invalida');

    // Clicar no botão de login
    cy.get('button[type="submit"]').click();

    // Verificar se o alerta de credenciais inválidas está sendo exibido
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Credenciais inválidas');
    });

    // Verificar se a URL ainda está na página de login (não houve navegação)
    cy.url().should('include', '/login');
  });

  it('Tentar acessar rota protegida', () => {
    // Tentar acessar a rota protegida
    cy.visit('/');

    // Verificar se a navegação redireciona para a página de login
    cy.url().should('include', '/login');
  });
});
