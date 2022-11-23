describe('Amazon', ()=>{
    beforeEach(() => {
        cy.visit('https://www.amazon.com.br/')
        
      })
          
    it ('Pesquisando e adicionando ao carrinho', ()=>{
                    /*Asserção para página carregada*/
        cy.get('div[id="nav-belt"] div[class="nav-left"] div[id="nav-logo"]')
                    /*Variável de pesquisa e preenchimento*/
        var pesquisa = {
            Aspirador : 'Aspirador de pó portátil',
            Decker: 'BLACK+DECKER Aspirador Vertical e Portátil com Função Mop Branco 220V AVM1200'
        }
        const longText = 'Aspirador de pó portátil'                 /*Procurar por barra de pesquisa, preencher campo e validar pesquisa*/
        cy.get('div[class=nav-fill] input[type=text').type(longText,{delay:0})
            .should('have.value', 'Aspirador de pó portátil')
                    /*Procurar por botão "Pesquisar" e clicar*/
        cy.get('div[class="nav-search-submit nav-sprite"] input[type="submit"]')
            .click()
                    /*Assert de pesquisa*/
        cy.get('div[class="a-section a-spacing-small a-spacing-top-small"] span[class="a-color-state a-text-bold"]')
            .should('have.text', '"Aspirador de pó portátil"')
                    /*Encontrar item e clicar*/
        cy.contains('.a-spacing-base h2 a span', pesquisa.Decker).click()
                    /*Validar item selecionado*/
        cy.get('div[class="a-section a-spacing-none"] h1 span')
            .should('have.text', '        BLACK+DECKER Aspirador Vertical e Portátil com Função Mop Branco 220V AVM1200       ')
                    /*Assert de valor*/
        cy.get('div[class="a-section a-spacing-micro"] span[class="a-price-whole"]')
            .should('have.value', '')
                    /*Marcar garantia estendida*/
        cy.get('div[class="a-checkbox"] label[for="mbb-offeringID-1"] input[type="checkbox"]').check()
                    /*Adicionar ao carrinho*/
        cy.get('span[class="a-button-inner"] input[id="add-to-cart-button"]').click()
                    /*Validação de ítem adicionado*/
        cy.get('div[class="a-section a-padding-medium sw-atc-message-section"] span[class="a-size-medium-plus a-color-base sw-atc-text a-text-bold"]')
            .should('have.text', '\nAdicionado ao carrinho\n')
    })
})