package com.FlightReservation.StepDefinitions;

import java.io.IOException;
import java.util.Properties;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import com.FlightReservation.PageFactory.LoginPage;
import com.FlightReservation.Utility.BrowserUtility;
import com.FlightReservation.Utility.ReadConfiguration;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginStepDef {
	
	WebDriver driver;
	Properties p;
	LoginPage loginPage;
	
	@Given("user is on login page of Flight Reservation")
	public void user_is_on_login_page_of_Flight_Reservation() {
		try {
		p=ReadConfiguration.getTestData();
	    driver = BrowserUtility.browserSetup(p.getProperty("browser"));
	    driver.get(p.getProperty("url"));
	    Assert.assertEquals("Welcome: Mercury Tours", driver.getTitle());
		}catch(IOException ex) {
			System.out.println("Exception occurred while launching Flight Reservation Application : "+ex.getMessage());
		}
	}


	@When("user enters valid {string} and {string}")
	public void user_enters_valid_username_and_password(String username, String password) {
		loginPage = new LoginPage(driver);
	    loginPage.enterUserName(username);
	    loginPage.enterPassword(password);
	   }

	@When("clicks on signIn Image")
	public void clicks_on_signIn_Image() {
	    loginPage.clickOnSignIn();
	}

	@Then("user should be loggin successfully")
	public void user_should_be_loggin_successfully() {
		Assert.assertEquals("Find a Flight: Mercury Tours:", driver.getTitle());
		
	}
	
	@Then("close Application")
	public void close_Application() {
	    driver.quit();
	}

	
	@Then("verify {string}")
	public void verifyPageTitle(String expPageTitle) {
		Assert.assertEquals(expPageTitle, driver.getTitle());
	}

}
