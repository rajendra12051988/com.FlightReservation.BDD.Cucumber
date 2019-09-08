package com.FlightReservation.StepDefinitions;

import org.junit.Assert;

import com.FlightReservation.PageFactory.BookAFlightPage;
import com.FlightReservation.PageFactory.BookingConfirmationPage;
import com.FlightReservation.PageFactory.FindAFlightPage;
import com.FlightReservation.PageFactory.ReserveAFlightPage;
import com.FlightReservation.Utility.BrowserUtility;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class E2EStepDef extends BrowserUtility {
	@When("user enters flight details like {string} and {string} and {string}")
	public void user_enters_flight_details_like_and_and(String flyfrom, String flyto, String airlinePref) {
		FindAFlightPage findAFlightPage = new FindAFlightPage(driver);
		// Select Trip Type
		findAFlightPage.selectTripType();
		// Select Departure From
		findAFlightPage.selectDepatingFrom(flyfrom);
		// Select Arrival To
		findAFlightPage.selectArrivingIn(flyto);
		// Select Class Preference
		findAFlightPage.selectClassPreference();
		// Select Airline Preference
		findAFlightPage.selectAirlinePreference(airlinePref);
		
	    
	}

	@When("clicks on Find Flights")
	public void clicks_on_Find_Flights() {
		FindAFlightPage findAFlightPage = new FindAFlightPage(driver);
		// Click on 'CONTINUE'
		findAFlightPage.clickOnFindFlights();
	}

	@When("clicks on Reserve Flights")
	public void clicks_on_Reserve_Flights() {
		ReserveAFlightPage reserveAFlightPage = new ReserveAFlightPage(driver);
		// Reserve A Flight
		reserveAFlightPage.clickOnReserveFlight();
	}

	@When("user enters passenger details like {string} and {string} and {string}")
	public void user_enters_passenger_details_like_and_and(String firstname, String lastname, String ccnumber) {
		BookAFlightPage bookAFlightPage = new BookAFlightPage(driver);
		// Enter First Name
		bookAFlightPage.enterFirstName(firstname);
		// ENter Last Name
		bookAFlightPage.enterLastName(lastname);
		// Enter Credit Card Number
		bookAFlightPage.enterCreditNumber(ccnumber);
	}

	@When("clicks on Buy Flights")
	public void clicks_on_Buy_Flights() {
		BookAFlightPage bookAFlightPage = new BookAFlightPage(driver);
		// Click on 'SECURE PURCHASE'
		bookAFlightPage.clickOnBuyFlights();
	}

	@Then("Booking Confirmation Text is displayed")
	public void booking_Confirmation_Text_is_displayed() {
		BookingConfirmationPage bookingConfirmationPage = new BookingConfirmationPage(driver);
		// Verify Booking Confirmation Text
		Assert.assertTrue(bookingConfirmationPage.getConfirmationText().contains("itinerary has been booked!"));
	}

}
