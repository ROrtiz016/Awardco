
context('LandingPage', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://www.award.co/')
    })

    describe('Checks the content in Solutions tab is correct', () => {
        it('Ensure the content is accurate', () => {
            cy.get('.navigation-wrapper')
                .should('be.visible')

            cy.get('nav #w-dropdown-toggle-0')
                .find('.text-block-5')
                .contains('Solutions')
                .should('be.visible')
                .trigger('mouseover')

            cy.get('div .navigation-column a[href="/recognize"] img')
                .should('have.attr', 'src', 'https://uploads-ssl.webflow.com/5fa874b3f9ced09e0026328c/601d76f5020226896782b942_recognize-black.svg')

            cy.get('div .navigation-column a[href="/celebrate"] img')
                .should('have.attr', 'src', 'https://uploads-ssl.webflow.com/5fa874b3f9ced09e0026328c/601d81acfd8fdfd3cf65abc2_celebrate-black.svg')

            cy.get('div .navigation-column a[href="/reward"] img')
                .should('have.attr', 'src', 'https://uploads-ssl.webflow.com/5fa874b3f9ced09e0026328c/601d8ad6cd04ecf6036c3b6e_reward-black.svg')

            cy.get('div .navigation-column a[href="/earn"] img')
                .should('have.attr', 'src', 'https://uploads-ssl.webflow.com/5fa874b3f9ced09e0026328c/60e9d29c7a479833f3de5c2f_earn-black.svg')

            cy.get('div .navigation-column a[href="/manage"] img')
                .should('have.attr', 'src', 'https://uploads-ssl.webflow.com/5fa874b3f9ced09e0026328c/601d81f9a8e00041605be25c_manage-black.svg')

            cy.get('nav #w-dropdown-toggle-1')
                .find('.text-block-7')
                .contains('Resources')
                .should('be.visible')

            cy.get('nav #w-dropdown-toggle-2')
                .find('.text-block-7')
                .contains('Company')
                .should('be.visible')
        })

    })

    describe('Checks the content in Resources tab is correct', () => {
        it('Ensure the content is accurate', () => {
            cy.get('.navigation-wrapper')
                .should('be.visible')

            cy.get('nav #w-dropdown-toggle-1')
                .find('.text-block-7')
                .contains('Resources')
                .should('be.visible')
                .trigger('mouseover')

            cy.get('.navigation-column a[href="/why-awardco"]')
                .find('.menu-title')
                .should('contains.text', 'Why Recognize')

            cy.get('.navigation-column a[href="/why-awardco"]')
                .find('.text-block-9')
                .should('have.text', 'And why Awardco is your best option to do it.And why use Awardco to do it.')

            cy.get('nav #w-dropdown-toggle-2')
                .find('.text-block-7')
                .contains('Company')
                .should('be.visible')
        })

    })

    describe('Checks the content in Company tab is correct', () => {
        it('Ensure the content is accurate', () => {
            cy.get('.navigation-wrapper')
                .should('be.visible')

            cy.get('nav #w-dropdown-toggle-1')
                .find('.text-block-7')
                .contains('Resources')
                .should('be.visible')
                .trigger('mouseover')

            cy.get('.navigation-column a[href="/about"]')
                .find('.menu-title')
                .should('contains.text', 'ABout')

            cy.get('.navigation-column a[href="/careers"]')
                .find('.menu-title')
                .should('contains.text', 'Careers')
            
            cy.get('.navigation-column a[href="/contact"]')
                .find('.menu-title')
                .should('contains.text', 'Contact')
        })

    })
})