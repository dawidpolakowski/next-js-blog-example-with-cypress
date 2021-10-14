Feature: Blog example Homepage

  I want to open a Blog Homepage

  @focus
  Scenario: Opening a Blog Homepage
    Given I open "Homepage" URL
    Then I see "Next.js Blog Example with Markdown" in the title
    And I see "Blog." inside element "h1"
    And I see "A statically generated blog example using" inside element "h4"
    And I see "Statically Generated with Next.js." inside element "h3"