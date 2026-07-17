Feature: Book catalog

    Background:
      Given the user opened the home page
      And the user opened the catalog

    Scenario: Book data in the catalog matches the data on the book page
      Then the catalog page displays 9 books
      When the user remembers the data of the first book
      And the user opens the first book
      Then the title, author and price on the book page match the remembered data
