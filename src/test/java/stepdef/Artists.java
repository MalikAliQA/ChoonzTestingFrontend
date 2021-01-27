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
import pages.createArtist;
import pages.updateAlbum;
import pages.updateArtist;

public class Artists {
	
	private static WebDriver driver;
//	private static ExtentReports extent;
//	private static ExtentTest test;

	
//	
//    private static Logger LOGGER = Logger.getGlobal();
	
    
    @Before
	public static void init() {
		
		
//		extent = new ExtentReports("src/test/resources/reports/Extentreport.html", true);
//		test = extent.startTest("Choonz project Testing");
		
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
//		extent.endTest(test);
//		extent.flush();
//		extent.close();
		
	}
	
	
	
	@Given("^I can access the Artists page$")
	public void i_can_access_the_Artists_page() throws Throwable {
		driver.get("http://localhost:8082/html/artists.html");
		Helper.snapShot(driver, "src/test/resources/reports/createArtist/shot1.png");

	}

	@When("^I enter Artists details$")
	public void i_enter_Artists_details() throws Throwable {
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.createAnArtist("artiststest");
		Helper.snapShot(driver, "src/test/resources/reports/createArtist/shot2.png");

	}

	@Then("^i can create an Artists entry$")
	public void i_can_create_an_Artists_entry() throws Throwable {
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/createArtist/shot3.png");
		Thread.sleep(1000);
		driver.navigate().refresh();
		JavascriptExecutor js = (JavascriptExecutor) driver;
    	WebElement Element = driver.findElement(By.cssSelector("#main > div:nth-child(3) > input[type=button]"));
    	js.executeScript("arguments[0].scrollIntoView();", Element);
    	Helper.snapShot(driver, "src/test/resources/reports/createArtist/shot4.png");
    	Thread.sleep(1000);
    	
    	boolean expected;
	     expected = true;
	     Boolean result = driver.getPageSource().contains("3");
	     System.out.println(result);
	
	       
       assertEquals(expected, result);

	}

	@Then("^i can read all the Artists entries$")
	public void i_can_read_all_the_Artists_entries() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/readartists/shot1.png");
		String expected = "http://localhost:8082/html/artists.html";
	     String result = driver.getCurrentUrl();
	     System.out.println(result);
	
	       
       assertEquals(expected, result);

	}

	@When("^I click on view one Artists$")
	public void i_click_on_view_one_Artists() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/readoneartist/shot1.png");	

	}

	@Then("^i can read that Artists details$")
	public void i_can_read_that_Artists_details() throws Throwable {
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/readonealbum/shot2.png");
		
		boolean expected;
	     expected = true;
	     Boolean result = driver.getPageSource().contains("1");
	     System.out.println(result);
	
	       
      assertEquals(expected, result);

	}

	@Given("^I can access the Artists view one page$")
	public void i_can_access_the_Artists_view_one_page() throws Throwable {
		driver.get("http://localhost:8082/html/artists.html");
		Helper.snapShot(driver, "src/test/resources/reports/updateartist/shot1.png");
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/updateartist/shot2.png");

	}

	@When("^I enter new Artists details$")
	public void i_enter_new_Artists_details() throws Throwable {
		updateArtist artist = PageFactory.initElements(driver, updateArtist.class);
		artist.updateanAlbum("update");
		Helper.snapShot(driver, "src/test/resources/reports/updateartist/shot3.png");

	}

	@Then("^i can update that Artists entry$")
	public void i_can_update_that_Artists_entry() throws Throwable {
		updateArtist artist = PageFactory.initElements(driver, updateArtist.class);
		artist.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/updateartist/shot4.png");
		Thread.sleep(1000);
		driver.navigate().refresh();
    	Helper.snapShot(driver, "src/test/resources/reports/updateartist/shot5.png");
    	Thread.sleep(1000);
    	
    	boolean expected;
	     expected = true;
	     Boolean result = driver.getPageSource().contains("1");
	     System.out.println(result);
	
	       
       assertEquals(expected, result);
       driver.get("http://localhost:8082/html/artists.html");
		Helper.snapShot(driver, "src/test/resources/reports/updateartist/shot6.png");

	}

	@When("^I click on delete Artists button$")
	public void i_click_on_delete_Artists_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/deleteartist/shot1.png");
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/deleteartist/shot2.png");


	}

	@Then("^i can delete that Artists entry$")
	public void i_can_delete_that_Artists_entry() throws Throwable {
		updateArtist artist = PageFactory.initElements(driver, updateArtist.class);
		artist.deleteclick();
		driver.navigate().refresh();
    	Helper.snapShot(driver, "src/test/resources/reports/deleteartist/shot3.png");
    	
    	
    	driver.get("http://localhost:8082/html/artists.html");
    	Helper.snapShot(driver, "src/test/resources/reports/deleteartist/shot4.png");
    	Thread.sleep(1000);
    	
    	String expected = "http://localhost:8082/html/artists.html";
	     String result = driver.getCurrentUrl();
	     System.out.println(result);
	
	       
      assertEquals(expected, result);

	}

}
