package stepdef;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper.Helper;
import pages.createAlbum;
import pages.createPlaylists;

public class Playlists {
	
	private static WebDriver driver;
	private static ExtentReports extent;
	private static ExtentTest test;

	
	
    private static Logger LOGGER = Logger.getGlobal();
	
    
    @Before
	public static void init() {
		
		
		extent = new ExtentReports("src/test/resources/reports/Extentreport.html", true);
		test = extent.startTest("Choonz project Testing");;
		
		System.setProperty("webdriver.chrome.driver", 
				"src/test/resources/drivers/chromedriver.exe");
		
		ChromeOptions cOptions = new ChromeOptions();
		//cOptions.setHeadless(true);
		
		driver = new ChromeDriver(cOptions);
		driver.manage().window().setSize(new Dimension(1366, 768));
		driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	}
	
	

	
	@After
	public static void tearDown() {
		driver.quit();
		extent.endTest(test);
		extent.flush();
		extent.close();
		
	}
	
	
	@Given("^I can access the Playlists page$")
	public void i_can_access_the_Playlists_page() throws Throwable {
		driver.get("http://localhost:8082/html/playlists.html");
		Helper.snapShot(driver, "src/test/resources/reports/createPlaylist/shot1.png");
	}

	@When("^I enter Playlists details$")
	public void i_enter_Playlists_details() throws Throwable {
		createPlaylists playlist = PageFactory.initElements(driver, createPlaylists.class);
		playlist.createAPlaylist("test", "test", "test");
		Helper.snapShot(driver, "src/test/resources/reports/createPlaylist/shot2.png");
	}

	@Then("^i can create an Playlists entry$")
	public void i_can_create_an_Playlists_entry() throws Throwable {
		createPlaylists playlist = PageFactory.initElements(driver, createPlaylists.class);
		playlist.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/createPlaylist/shot3.png");
		Thread.sleep(1000);
		driver.navigate().refresh();
		JavascriptExecutor js = (JavascriptExecutor) driver;
    	WebElement Element = driver.findElement(By.cssSelector("#main > div:nth-child(3) > input[type=button]"));
    	js.executeScript("arguments[0].scrollIntoView();", Element);
    	Helper.snapShot(driver, "src/test/resources/reports/createPlaylist/shot4.png");
    	Thread.sleep(1000);
    	
    	boolean expected;
	     expected = true;
	     Boolean result = driver.getPageSource().contains("3");
	     System.out.println(result);
	
	       
       assertEquals(expected, result);
       

	}

	@Then("^i can read all the Playlists entries$")
	public void i_can_read_all_the_Playlists_entries() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/readPlaylists/shot1.png");
		String expected = "http://localhost:8082/html/playlists.html";
	     String result = driver.getCurrentUrl();
	     System.out.println(result);
	
	       
       assertEquals(expected, result);
	}

//	@When("^I click on view one Playlists$")
//	public void i_click_on_view_one_Playlists() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
//	}
//
//	@Then("^i can read that Playlists details$")
//	public void i_can_read_that_Playlists_details() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
//	}

//	@Given("^I can access the Playlists view one page$")
//	public void i_can_access_the_Playlists_view_one_page() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
//	}
//
//	@When("^I enter new Playlists details$")
//	public void i_enter_new_Playlists_details() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
//	}
//
//	@Then("^i can update that Playlists entry$")
//	public void i_can_update_that_Playlists_entry() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
//	}

	@When("^I click on delete Playlists button$")
	public void i_click_on_delete_Playlists_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/deletePlaylist/shot1.png");
		createPlaylists playlist = PageFactory.initElements(driver, createPlaylists.class);
		playlist.deleteclick();
	}

	@Then("^i can delete that Playlists entry$")
	public void i_can_delete_that_Playlists_entry() throws Throwable {
		driver.navigate().refresh();
    	Helper.snapShot(driver, "src/test/resources/reports/deletePlaylist/shot2.png");
    	Thread.sleep(1000);
    	
    	String expected = "http://localhost:8082/html/playlists.html";
	     String result = driver.getCurrentUrl();
	     System.out.println(result);
	
	       
      assertEquals(expected, result);
	}

}
