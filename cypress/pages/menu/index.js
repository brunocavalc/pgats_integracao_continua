const MENUS = {
    PRODUTOS: 'Products',
    LOGIN_CADASTRO: 'Signup',
    CONTATO: 'Contact us',
    LOGOUT: 'Logout',
    EXCLUIR_CONTA: 'Delete Account'
}

class Menu {
    navegarPara(menu){
        cy.contains(menu).click()
    }
}

export default new Menu()
export { MENUS }