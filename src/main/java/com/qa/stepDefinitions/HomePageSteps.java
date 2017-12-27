package com.qa.stepDefinitions;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class HomePageSteps extends TestBase {
	LoginPage loginPage;
	HomePage homePage ;

	@Given("^User opens browser$")
	public void user_opens_browser() throws Throwable {
		TestBase.initialization();
	}

	@Then("^user is on login Page$")
	public void user_is_on_login_Page() throws Throwable {
		loginPage= new LoginPage();
		String title = loginPage.validateLoginPageTitel();
		Assert.assertEquals(title, "#1 Free CRM for Any Business: Online Customer Relationship Software");

	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {

		homePage = loginPage.login(prop.getProperty("username"), prop.getProperty("password"));
	}

	@Then("^validate home page title$")
	public void validate_home_page_title() throws Throwable {
		homePage= new HomePage();
		String homeTitle = homePage.verifyHomePageTitle();
		Assert.assertEquals("CRMPRO", homeTitle);

	}

	@Then("^validate logged in username$")
	public void validate_logged_in_username() throws Throwable {
		homePage= new HomePage();
		boolean flag = homePage.verifyCorrectUserName();
		Assert.assertTrue(flag);

	}

}
