package com.FlightReservation.TestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features="features", // To define where feature files are located
				 glue="com.FlightReservation.StepDefinitions", // To define when step definition files are located
				 dryRun=false, // To do mapping between feature and step definition file
				 monochrome=true,// To generate console output in a proper readable format
				 plugin= {"pretty","html:target/cucumber-html-report", 
						  "json:target/cucumber.json","junit:target/cucumber-xml-report.xml"}) // To generate html,json and xml report
public class TestRunner {

}
