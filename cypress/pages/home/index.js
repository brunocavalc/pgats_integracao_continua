import { faker } from '@faker-js/faker' 

class Home {
    navegarParaAssinatura(){
        cy.get('input#susbscribe_email').scrollIntoView()
    }

    inserirDadosParaAssinatura(){
        cy.get('input#susbscribe_email').type(faker.internet.email())
        cy.get('button#subscribe').click()
    }

    verificarSucessoNaAssinatura(){
        cy.contains('You have been successfully subscribed!').should('be.visible')
    }

    inserirItemAoCarrinho(){
        cy.contains("Add to cart").click()
    }

    exibirItensNoCarrinho(){
        cy.contains("View Cart").click()
    }

    verificarExclusaoDeConta(){
        cy.get('b').should('contain', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()
    }
}

export default new Home()