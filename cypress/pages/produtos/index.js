class Produtos {
    verificarAcessoAPaginaDeProdutos(){
        cy.url().should('contain', 'products')
        cy.get('.title').should('be.visible').and('contain', 'All Products')
    }

    primeiroProdutoDaLista(){
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1)
            .first()
            .parent()
            .contains('View Product')
            .click()
    }

    verificarExibicaoDeProduto(){
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information p').should('be.visible').and('have.length', 4)
        cy.get('.product-information span span').should('be.visible')
    }

    buscarPorProdutoDesejado(produto){
        cy.get('input#search_product').type(produto)
        cy.get('button#submit_search').click()
    }

    verificarBuscaDeProdutoDesejado(){
        cy.get('.title').should('be.visible').and('contain', 'Searched Products')
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1)
    }
}

export default new Produtos()