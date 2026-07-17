Feature: Atena Books home page

    Background:
      Given the user opened the home page

    Scenario: Key elements of the home page are visible
      Then the site logo is visible
      And the left menu contains items "Книги, Автори, Блог, Про нас"
      And the right menu contains 5 items
