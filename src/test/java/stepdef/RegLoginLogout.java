package stepdef;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper.Helper;
import pages.HomeNav;
import pages.loginPage;

public class RegLoginLogout {
	
private static WebDriver driver;
	
@Before
public static void init() {

	System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");

	ChromeOptions cOptions = new ChromeOptions();
	//cOptions.setHeadless(true);

	driver = new ChromeDriver(cOptions);
	driver.manage().window().setSize(new Dimension(1366, 768));
	driver.manage().deleteAllCookies();
	driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
}

@After
public static void tearDown() {
	driver.quit();
}

@Given("^i go to the login page$")
public void i_go_to_the_login_page() throws Throwable {
	driver.get(HomeNav.LoginURL);
	Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Login/shot1.png");

}

@When("^i enter the user name and passwird$")
public void i_enter_the_user_name_and_passwird() throws Throwable {
	loginPage login = PageFactory.initElements(driver, loginPage.class);
	login.loguser("user", "password");
	Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Login/shot2.png");
	login.click();
}

@Then("^i can login$")
public void i_can_login() throws Throwable {
	String expected = HomeNav.HomeURL;
	String result = driver.getCurrentUrl();

	assertEquals(expected, result);
	Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Login/shot3.png");
}

@Given("^i can logina$")
public void i_can_logina() throws Throwable {
	driver.get(HomeNav.LoginURL);
	Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Logout/shot1.png");
	loginPage login = PageFactory.initElements(driver, loginPage.class);
	login.loguser("user", "password");
	Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Logout/shot2.png");
	login.click();

}

@When("^when i click logout$")
public void when_i_click_logout() throws Throwable {
	loginPage login = PageFactory.initElements(driver, loginPage.class);
	
	//wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#search")));
	WebDriverWait wait = new WebDriverWait(driver, 10);
	WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("search")));
	//Thread.sleep(1000);
	login.logoutclick();

	
    
}

@Then("^i am logged out$")
public void i_am_logged_out() throws Throwable {
//	WebDriverWait wait=new WebDriverWait(driver, 20);
//	wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div/form/button")));
	WebDriverWait wait=new WebDriverWait(driver, 20);
	wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("body > div > form > button")));
	String expected = HomeNav.LogoutURL;
	String result = driver.getCurrentUrl();

	assertEquals(expected, result);
	Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Logout/shot3.png");
   
}

@Given("^i can go to the register page$")
public void i_can_go_to_the_register_page() throws Throwable {
    driver.get(HomeNav.RegURL);
    Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Registration/shot1.png");
}

@When("^i enter the registration details$")
public void i_enter_the_registration_details() throws Throwable {
	loginPage login = PageFactory.initElements(driver, loginPage.class);
	login.reguser("malik8", "malik8");
	Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Registration/shot2.png");
	login.regclick();
    
}

@Then("^i can login with the details$")
public void i_can_login_with_the_details() throws Throwable {
	WebDriverWait wait=new WebDriverWait(driver, 20);
	wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("body > div > form > button")));
	Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Registration/shot3.png");
	loginPage login = PageFactory.initElements(driver, loginPage.class);
	login.loguser("malik8", "malik8");
	login.click();
	
	WebDriverWait wait2=new WebDriverWait(driver, 20);
	wait2.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#search")));
	
	String expected = HomeNav.HomeURL;
	String result = driver.getCurrentUrl();

	assertEquals(expected, result);
	Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Registration/shot4.png");
	
}
	

}
