Feature: Blog example a Tight Post Page

  I want to open a a Tight Post Page

  @focus
  Scenario:  I want to open a a Tight Post Page
    Given I open "Homepage" URL
    When I navigate to a tight post page
    Then I see "Dynamic Routing and Static Generation" inside element "article"
    And I see "JJ Kasper" inside element "div"
    And I see "Statically Generated with Next.js." inside element "h3"
