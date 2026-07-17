Feature: Cart

    Background:
      Given the user opened the home page
      And the user opened the catalog

    Scenario: Adding and removing a book from the cart
      When the user adds the first book to the cart
      Then the modal shows the added book's title and quantity 1
      When the user closes the modal
      And the user reloads the page
      Then the cart items counter in the header equals 1
      When the user opens the cart
      Then the first item in the cart has the added book's title
      When the user removes the first item from the cart
      Then the empty cart message is displayed
