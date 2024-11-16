class Login {
    inserirLogin(usuario, senha){
        cy.get('[data-qa="login-email"]').type(usuario);
        cy.get('[data-qa="login-password"]').type(senha, { log: false });
        cy.get('[data-qa="login-button"]').click();
    }

    verificarSucessoNoLogin(usuario){
        cy.get('i.fa-user').parent().should('contain', usuario)
    }

    verificarSucessoNoDeslogar(){
        cy.url().should('contain', 'login')
        cy.contains("Login to your account").should("be.visible")
    }

    verificarExibicaoMensagemDeLoginInvalido(){
        cy.get('.login-form form p').parent().should('contain', 'Your email or password is incorrect!')
    }
}

export default new Login()