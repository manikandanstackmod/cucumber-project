Feature: Google Search

  Scenario: Search for a keyword
    Given I open Google
    When I search for "Cucumber BDD"
    Then I should see results related to "Cucumber BDD"
