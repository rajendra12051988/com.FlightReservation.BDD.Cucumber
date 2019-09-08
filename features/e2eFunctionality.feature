Feature: End To End Functionality of Flight Reservation Application

  Scenario Outline: Verify End To End Functionality of Flight Reservation Application
    Given user is on login page of Flight Reservation
    When user enters valid "<UserName>" and "<Password>"
    And clicks on signIn Image
    Then verify "<PageTitle>"
    When user enters flight details like "<FlyFrom>" and "<FlyTo>" and "<Airline>"
    And clicks on Find Flights
    And clicks on Reserve Flights
    And user enters passenger details like "<FirstName>" and "<LastName>" and "<CreditNumber>"
    And clicks on Buy Flights
    Then Booking Confirmation Text is displayed
    And close Application

    Examples: 
      | UserName | Password | PageTitle                     | FlyFrom | FlyTo | Airline             | FirstName | LastName  | CreditNumber |
      | mercury  | mercury  | Find a Flight: Mercury Tours: | London  | Paris | Blue Skies Airlines | Rajendra  | Mahapatra |   9861688595 |
