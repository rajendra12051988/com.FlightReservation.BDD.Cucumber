package com.FlightReservation.PageFactory;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import com.FlightReservation.Utility.HighlightElement;



public class ReserveAFlightPage {
	
	WebDriver driver;
	private Logger logger = LogManager.getLogger(ReserveAFlightPage.class);
	
	@FindBy(how=How.NAME,using="reserveFlights")
	private WebElement continue2;
	
	
	public ReserveAFlightPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public void clickOnReserveFlight() {
		try {
		//logger.info();
		logger.info("Clicking on 'Reserve Flight'");
		HighlightElement.highlihghtElement(driver, continue2);
		continue2.click();
		logger.info("Clicked on 'Reserve Flight' successfully");
		}catch(Exception ex) {
			logger.error("Exception occurred while clicking on 'Reserve Flight' :"+ex.getMessage());
		}
	}

}
