$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/e2eFunctionality.feature");
formatter.feature({
  "name": "End To End Functionality of Flight Reservation Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify End To End Functionality of Flight Reservation Application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page of Flight Reservation",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on signIn Image",
  "keyword": "And "
});
formatter.step({
  "name": "verify \"\u003cPageTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters flight details like \"\u003cFlyFrom\u003e\" and \"\u003cFlyTo\u003e\" and \"\u003cAirline\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on Find Flights",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on Reserve Flights",
  "keyword": "And "
});
formatter.step({
  "name": "user enters passenger details like \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" and \"\u003cCreditNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on Buy Flights",
  "keyword": "And "
});
formatter.step({
  "name": "Booking Confirmation Text is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "close Application",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "PageTitle",
        "FlyFrom",
        "FlyTo",
        "Airline",
        "FirstName",
        "LastName",
        "CreditNumber"
      ]
    },
    {
      "cells": [
        "mercury",
        "mercury",
        "Find a Flight: Mercury Tours:",
        "London",
        "Paris",
        "Blue Skies Airlines",
        "Rajendra",
        "Mahapatra",
        "9861688595"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify End To End Functionality of Flight Reservation Application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page of Flight Reservation",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_login_page_of_Flight_Reservation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"mercury\" and \"mercury\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on signIn Image",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.clicks_on_signIn_Image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"Find a Flight: Mercury Tours:\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verifyPageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters flight details like \"London\" and \"Paris\" and \"Blue Skies Airlines\"",
  "keyword": "When "
});
formatter.match({
  "location": "E2EStepDef.user_enters_flight_details_like_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Find Flights",
  "keyword": "And "
});
formatter.match({
  "location": "E2EStepDef.clicks_on_Find_Flights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Reserve Flights",
  "keyword": "And "
});
formatter.match({
  "location": "E2EStepDef.clicks_on_Reserve_Flights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters passenger details like \"Rajendra\" and \"Mahapatra\" and \"9861688595\"",
  "keyword": "And "
});
formatter.match({
  "location": "E2EStepDef.user_enters_passenger_details_like_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Buy Flights",
  "keyword": "And "
});
formatter.match({
  "location": "E2EStepDef.clicks_on_Buy_Flights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Booking Confirmation Text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EStepDef.booking_Confirmation_Text_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.close_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:features/login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Login Functionality by providing valid user credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on login page of Flight Reservation",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_login_page_of_Flight_Reservation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"mercury\" and \"mercury\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on signIn Image",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.clicks_on_signIn_Image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be loggin successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_loggin_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.close_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Login Functionali with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page of Flight Reservation",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on signIn Image",
  "keyword": "And "
});
formatter.step({
  "name": "verify \"\u003cPageTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close Application",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "PageTitle"
      ]
    },
    {
      "cells": [
        "\u0026()^%$!",
        "mercury",
        "Sign-on: Mercury Tours"
      ]
    },
    {
      "cells": [
        "mercury",
        "\u0026()^%$!",
        "Sign-on: Mercury Tours"
      ]
    },
    {
      "cells": [
        "admin",
        "admin",
        "Sign-on: Mercury Tours"
      ]
    },
    {
      "cells": [
        "mercury",
        "mercury",
        "Find a Flight: Mercury Tours:"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Login Functionali with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page of Flight Reservation",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_login_page_of_Flight_Reservation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"\u0026()^%$!\" and \"mercury\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on signIn Image",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.clicks_on_signIn_Image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"Sign-on: Mercury Tours\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verifyPageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.close_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Login Functionali with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page of Flight Reservation",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_login_page_of_Flight_Reservation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"mercury\" and \"\u0026()^%$!\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on signIn Image",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.clicks_on_signIn_Image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"Sign-on: Mercury Tours\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verifyPageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.close_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Login Functionali with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page of Flight Reservation",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_login_page_of_Flight_Reservation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"admin\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on signIn Image",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.clicks_on_signIn_Image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"Sign-on: Mercury Tours\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verifyPageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.close_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Login Functionali with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page of Flight Reservation",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_login_page_of_Flight_Reservation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"mercury\" and \"mercury\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on signIn Image",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.clicks_on_signIn_Image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"Find a Flight: Mercury Tours:\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.verifyPageTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close Application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.close_Application()"
});
formatter.result({
  "status": "passed"
});
});