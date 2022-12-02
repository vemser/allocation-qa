/// <reference types="cypress" />

export default class BasePage {
 
   click(elemet){ 
      cy.get(elemet).click() 
   }

   clickForce(elemet){ 
      cy.get(elemet).click({force:true}) 
   }

   preencherCampo(element, text){ 
      cy.get(element).type(text)
   }

   preencherCampoComTeclaNoFinal(element, text, tecla){
      cy.get(element).type(text).type(tecla);
   }

   preencherCampoForce(element, text){ 
      cy.get(element).type(text, {force:true})
   }
   
   tempo(tempo){ 
      cy.wait(tempo) 
   }

   select(element, value){ 
      cy.get(element).select(value) 
   }

   validarText(element, text){ 
      cy.get(element).should('contain', text) 
   }

   validarQuantItemNaLista(element, quant){
      cy.get(element).should('have.length', quant)
   }

   validarUrl(url){
      cy.url().should('be.equal', url)
   }

   validarContainsUrl(url){
      cy.url().should('include', url)
   }

   limparInput(element){ 
      cy.get(element).clear()
   }

   mouseOver(element){
      cy.get(element).trigger('mouseover')
   }

   validarVisibilidade(element) {
      cy.get(element).scrollIntoView().should('be.visible') 
    }
   
  }
  