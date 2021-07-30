describe('Pruebas en la pagina FormPage', () => {
  it('Debe cargar la página inicial', ()=>{
    cy.visit('http://localhost:3000');
  });
  
  it('La pagina debe contener el título ´Información de donación´ ', ()=>{
    cy.contains('Ingresar donación')
  });
  
  it('La pagina debe contener 5 inputs ', ()=>{
    cy.get('input').should('have.length', 5);
  });
  
  it('La pagina debe tener 1 boton ', ()=>{
    cy.get('button').should('have.length', 1);
  });

  it('Guardar donacion y mostrar boton con el texto ´Ver donaciones´ ', ()=>{
    cy.contains('button', 'Guardar').click()
    cy.wait(3000);
    cy.get('button').should('have.length', 2);
  });
  
  it('Ingresar una donacion e ir a la página de donaciones', ()=>{
    cy.get('[name="nombre"]').clear().type('Manuela')
    cy.get('[name="id"]').clear().type('7771313')
    cy.get('[name="cantidadDonada"]').clear().type(20000)
    cy.get('[name="edad"]').clear().type(20)
    cy.get('[name="fecha"]').clear().type('2021-07-30')
    cy.wait(1000)
    cy.contains('button', 'Guardar').click()
    cy.wait(3000)
    cy.contains('a', 'Ver donaciones').click()
  });
  it('Regresar e ingrear una donacion más', ()=>{
    cy.contains('a', 'Nueva Donación').click()
    cy.get('[name="nombre"]').clear().type('Juan')
    cy.get('[name="id"]').clear().type('12131415')
    cy.get('[name="cantidadDonada"]').clear().type(30000)
    cy.get('[name="edad"]').clear().type(25)
    cy.get('[name="fecha"]').clear().type('2021-07-30')
    cy.wait(1000)
    cy.contains('button', 'Guardar').click()
    cy.wait(3000)
    cy.contains('a', 'Ver donaciones').click()
  });
});
