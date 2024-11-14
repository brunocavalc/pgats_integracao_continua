/// <reference types="cypress"/>
import cadastro from '../pages/cadastro'
import login from '../pages/login'
import menu, { MENUS } from '../pages/menu'
import contato from '../pages/contato'
import produtos from '../pages/produtos'
import home from '../pages/home'
import carrinho from '../pages/carrinho'
import checkout from '../pages/checkout'
import pagamento from '../pages/pagamento'

describe('Automation Exercise', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Test Case 1: Register a new user', () => {
    menu.navegarPara(MENUS.LOGIN_CADASTRO)
    cadastro.inserirDadosNoFormulario()
    cadastro.verificarCadastradoFinalizado()
  })

  it('Test Case 2: Login User with correct email and password', () => {
    menu.navegarPara(MENUS.LOGIN_CADASTRO)
    login.inserirLogin('tester-1721346302730@mail.com', '12345')
    login.verificarSucessoNoLogin('Tester QA')
  })

  it('Test Case 3: Login User with incorrect email and password', () => {
    menu.navegarPara(MENUS.LOGIN_CADASTRO)
    login.inserirLogin('tester-1721346302730@mail.com', '54321' )
    login.verificarExibicaoMensagemDeLoginInvalido()
  })

  it('Test Case 4: Logout after login', () => {
    menu.navegarPara(MENUS.LOGIN_CADASTRO)
    login.inserirLogin('tester-1721346302730@mail.com', '12345')
    login.verificarSucessoNoLogin('Tester QA')
    menu.navegarPara(MENUS.LOGOUT)
    login.verificarSucessoNoDeslogar()
  })

  it('Test Case 5: Register User with existing email', () => {
    menu.navegarPara(MENUS.LOGIN_CADASTRO)
    cadastro.dadosDeCadastro('Tester QA', 'tester-1721346302730@mail.com')
    cadastro.verificarExibicaoMensagemDeUsuarioCadastrado()
  })

    it('Test Case 6: Contact Us Form', () => {
      menu.navegarPara(MENUS.CONTATO)
      contato.inserirDadosDeContato()
      contato.verificarSucessoNoEnvioDoContato()
    })

    it('Test Case 8: Verify All Products and product detail page', () => {
      menu.navegarPara(MENUS.PRODUTOS)
      produtos.verificarAcessoAPaginaDeProdutos()
      produtos.primeiroProdutoDaLista()
      produtos.verificarExibicaoDeProduto()
    })

    it('Test Case 9: Search Product', () => {
      menu.navegarPara(MENUS.PRODUTOS)
      produtos.verificarAcessoAPaginaDeProdutos()
      produtos.buscarPorProdutoDesejado('Shirt')
      produtos.verificarBuscaDeProdutoDesejado()
    })

    it('Test Case 10: Verify Subscription in home page', () => {
      home.navegarParaAssinatura()
      home.inserirDadosParaAssinatura()
      home.verificarSucessoNaAssinatura()
    })

    it('Test Case 15: Place Order: Register before Checkout', () => {
      menu.navegarPara(MENUS.LOGIN_CADASTRO)
      cadastro.inserirDadosNoFormulario()
      cadastro.verificarCadastradoFinalizado()
      home.inserirItemAoCarrinho()
      home.exibirItensNoCarrinho()
      carrinho.navegarParaOCheckout()
      checkout.verificarExibicaoDoCheckout()
      checkout.verificarEndereco()
      checkout.escreverComentarioDoPedido()
      pagamento.inserirDadosParaPagamento()
      pagamento.verificarSucessoNoPagamentoDoPedido()
      menu.navegarPara(MENUS.EXCLUIR_CONTA)
      home.verificarExclusaoDeConta()
    })
})