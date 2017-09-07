Feature: Example
  Scenario Outline:
    When I navigate to "<site>"
    Then the title should be "<title>"

    Examples:
      | site                | title   |
      | https://angular.io/ | Angular |
      | https://angular.io/ | Angular |
      | https://angular.io/ | Angular |
