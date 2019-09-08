package com.FlightReservation.PageFactory;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import com.FlightReservation.Utility.HighlightElement;


public class BookingConfirmationPage {
	private Logger logger = LogManager.getLogger(BookingConfirmationPage.class);
	
	WebDriver driver;
	
	@FindBy(how=How.XPATH,using="//font[@size='+1']")
	private WebElement confText;
	
	
	public BookingConfirmationPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}
	
	public String getConfirmationText() {
		try {
		logger.info("Fetching booking confirmation text");
		HighlightElement.highlihghtElement(driver, confText);
		logger.info("Fetched booking confirmation text successfully");
		return confText.getText().trim();
		
		}catch(NoSuchElementException ex) {
			logger.error("Exception occurred while fetching booking confirmation text : "+ex.getMessage());
			return null;
		}
	}

}
