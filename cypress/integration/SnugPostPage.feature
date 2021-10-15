Feature: Blog example a Snug Post Page

  I want to open a a Snug Post Page

  @focus
  Scenario:  I want to open a a Snug Post Page
    Given I open "Homepage" URL
    When I navigate to a "snug" post page
    Then I see "Learn How to Pre-render Pages Using Static Generation with Next.js" inside element "article"
    And I see "Tim Neutkens" inside element "div"
    And I see "Statically Generated with Next.js." inside element "h3"
