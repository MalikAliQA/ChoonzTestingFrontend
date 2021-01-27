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
import pages.createTrack;
import pages.updateAlbum;
import pages.updateTrack;

public class Tracks {
	
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
	
	@Given("^I can access the tracks page$")
	public void i_can_access_the_tracks_page() throws Throwable {
		driver.get("http://localhost:8082/html/tracks.html");
		Helper.snapShot(driver, "src/test/resources/reports/createTrack/shot1.png");
	}

	@When("^I enter tracks details$")
	public void i_enter_tracks_details() throws Throwable {
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.createATrack("test", 1, "test", 2, 2, 2);
		Helper.snapShot(driver, "src/test/resources/reports/createTrack/shot2.png");
	}

	@Then("^i can create an tracks entry$")
	public void i_can_create_an_tracks_entry() throws Throwable {
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		System.out.println("clicking create");
		track.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/createTrack/shot3.png");
		Thread.sleep(1000);
		driver.navigate().refresh();
		JavascriptExecutor js = (JavascriptExecutor) driver;
    	WebElement Element = driver.findElement(By.cssSelector("#test > input[type=button]"));
    	js.executeScript("arguments[0].scrollIntoView();", Element);
    	Helper.snapShot(driver, "src/test/resources/reports/createTrack/shot4.png");
    	Thread.sleep(1000);
    	
    	boolean expected;
	     expected = true;
	     Boolean result = driver.getPageSource().contains("7");
	     System.out.println(result);
	
	       
       assertEquals(expected, result);
       

	}

	@Then("^i can read all the tracks entries$")
	public void i_can_read_all_the_tracks_entries() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/readTrack/shot1.png");
		String expected = "http://localhost:8082/html/tracks.html";
	     String result = driver.getCurrentUrl();
	     System.out.println(result);
	
	       
       assertEquals(expected, result);
	}

	@When("^I click on view one tracks$")
	public void i_click_on_view_one_tracks() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/readoneTrack/shot1.png");
	}

	@Then("^i can read that tracks details$")
	public void i_can_read_that_tracks_details() throws Throwable {
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/readoneTrack/shot2.png");
		
		boolean expected;
	     expected = true;
	     Boolean result = driver.getPageSource().contains("1");
	     System.out.println(result);
	
	       
      assertEquals(expected, result);
	}

	@Given("^I can access the tracks view one page$")
	public void i_can_access_the_tracks_view_one_page() throws Throwable {
		driver.get("http://localhost:8082/html/track.html?id=1");
		Helper.snapShot(driver, "src/test/resources/reports/updateTrack/shot1.png");
	}

	@When("^I enter new tracks details$")
	public void i_enter_new_tracks_details() throws Throwable {
		updateTrack track = PageFactory.initElements(driver, updateTrack.class);
		track.updateaTrack("update", 1, "function");
		Helper.snapShot(driver, "src/test/resources/reports/updateTrack/shot2.png");
	}

	@Then("^i can update that tracks entry$")
	public void i_can_update_that_tracks_entry() throws Throwable {
		updateTrack track = PageFactory.initElements(driver, updateTrack.class);
		track.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/updateTrack/shot3.png");
		Thread.sleep(1000);
		driver.navigate().refresh();
    	Helper.snapShot(driver, "src/test/resources/reports/updateTrack/shot4.png");
    	Thread.sleep(1000);
    	
    	boolean expected;
	     expected = true;
	     Boolean result = driver.getPageSource().contains("1");
	     System.out.println(result);
	
	       
       assertEquals(expected, result);
	}

	@When("^I click on delete tracks button$")
	public void i_click_on_delete_tracks_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/deleteTrack/shot1.png");
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.deleteclick();
	}

	@Then("^i can delete that tracks entry$")
	public void i_can_delete_that_tracks_entry() throws Throwable {
		driver.navigate().refresh();
    	Helper.snapShot(driver, "src/test/resources/reports/deleteTrack/shot2.png");
    	Thread.sleep(1000);
    	
    	String expected = "http://localhost:8082/html/tracks.html";
	     String result = driver.getCurrentUrl();
	     System.out.println(result);
	
	       
      assertEquals(expected, result);
	}

}
