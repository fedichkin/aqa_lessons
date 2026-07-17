Feature: Catalog pagination

    Background:
      Given the user opened the home page
      And the user opened the catalog

    Scenario: Navigation through catalog pages
      Then the first page is active by default
      When the user goes to page 3
      Then page 3 is active
      And the URL contains "page=3"
      And the first book on page 3 differs from the first book on page 1
      When the user goes to the next page
      Then page 4 is active
      When the user goes to the previous page
      Then page 3 is active
