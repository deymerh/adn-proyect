
describe('Pruebas en la pagina FormPage', () => {
  
  it('Debe cargar la página', ()=>{
    cy.visit('http://localhost:3000')
  })
  
  it('La pagina debe contener el título ´Información de donación´ ', ()=>{
    cy.contains('Ingresar donación')
  })
  
  it('La pagina debe contener 5 inputs ', ()=>{
    cy.get('input').should('have.length', 5)
  })
  
  it('La pagina debe tener 1 boton ', ()=>{
    cy.get('button').should('have.length', 1)
  })
 
  it('La pagina debe tener un ´h5´ con el titulo Ingresar donación', ()=>{
    cy.contains('h5', 'Ingresar donación')
  })
})
