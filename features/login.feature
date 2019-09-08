Feature: Login Feature

  Scenario: Verify Login Functionality by providing valid user credentials
    Given user is on login page of Flight Reservation
    When user enters valid "mercury" and "mercury"
    And clicks on signIn Image
    Then user should be loggin successfully
    And close Application

  Scenario Outline: Verify Login Functionali with valid and invalid credentials
    Given user is on login page of Flight Reservation
    When user enters valid "<UserName>" and "<Password>"
    And clicks on signIn Image
    Then verify "<PageTitle>"
		And close Application
    Examples: 
      | UserName | Password | PageTitle                     |
      | &()^%$!  | mercury  | Sign-on: Mercury Tours        |
      | mercury  | &()^%$!  | Sign-on: Mercury Tours        |
      | admin    | admin    | Sign-on: Mercury Tours        |
      | mercury  | mercury  | Find a Flight: Mercury Tours: |
