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
import pages.createArtist;
import pages.createGenre;
import pages.updateArtist;
import pages.updateGenre;

public class Genres {
	
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
	
	
	
	@Given("^I can access the genres page$")
	public void i_can_access_the_genres_page() throws Throwable {
		System.out.println("connecting to artist page");
		driver.get("http://localhost:8082/html/genres.html");
		Helper.snapShot(driver, "src/test/resources/reports/createGenre/shot1.png");

	}

	@When("^I enter genres details$")
	public void i_enter_genres_details() throws Throwable {
		createGenre genre = PageFactory.initElements(driver, createGenre.class);
		System.out.println("entering details");
		genre.createAGenre("genre", "creation");
		Helper.snapShot(driver, "src/test/resources/reports/createGenre/shot2.png");

	}

	@Then("^i can create an genres entry$")
	public void i_can_create_an_genres_entry() throws Throwable {
		createGenre genre = PageFactory.initElements(driver, createGenre.class);
		System.out.println("clicking create");
		genre.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/createGenre/shot3.png");
		Thread.sleep(1000);
		driver.navigate().refresh();
		JavascriptExecutor js = (JavascriptExecutor) driver;
    	WebElement Element = driver.findElement(By.cssSelector("#main > div:nth-child(3) > input[type=button]"));
    	js.executeScript("arguments[0].scrollIntoView();", Element);
    	Helper.snapShot(driver, "src/test/resources/reports/createGenre/shot4.png");
    	Thread.sleep(1000);
    	
    	boolean expected;
	     expected = true;
	     Boolean result = driver.getPageSource().contains("3");
	     System.out.println(result);
	
	       
       assertEquals(expected, result);
	}

	@Then("^i can read all the genres entries$")
	public void i_can_read_all_the_genres_entries() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/readGenre/shot1.png");
		String expected = "http://localhost:8082/html/genres.html";
	     String result = driver.getCurrentUrl();
	     System.out.println(result);
	
	       
       assertEquals(expected, result);
	}

	@When("^I click on view one genres$")
	public void i_click_on_view_one_genres() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/readoneGenre/shot1.png");	

	}

	@Then("^i can read that genres details$")
	public void i_can_read_that_genres_details() throws Throwable {
		createGenre genre = PageFactory.initElements(driver, createGenre.class);
		genre.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/readoneGenre/shot2.png");
		
		boolean expected;
	     expected = true;
	     Boolean result = driver.getPageSource().contains("1");
	     System.out.println(result);
	
	       
      assertEquals(expected, result);
	}

	@Given("^I can access the genres view one page$")
	public void i_can_access_the_genres_view_one_page() throws Throwable {
		System.out.println("connecting to genre page");
		driver.get("http://localhost:8082/html/genre.html?id=1");
		Helper.snapShot(driver, "src/test/resources/reports/updateGenre/shot1.png");

	}

	@When("^I enter new genres details$")
	public void i_enter_new_genres_details() throws Throwable {
		updateGenre genre = PageFactory.initElements(driver, updateGenre.class);
		System.out.println("entering details");
		genre.updateaGenre("update", "function");
		Helper.snapShot(driver, "src/test/resources/reports/updateGenre/shot2.png");

	}

	@Then("^i can update that genres entry$")
	public void i_can_update_that_genres_entry() throws Throwable {
		updateArtist artist = PageFactory.initElements(driver, updateArtist.class);
		System.out.println("clicking update");
		artist.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/updateGenre/shot3.png");
		Thread.sleep(1000);
		driver.navigate().refresh();
    	Helper.snapShot(driver, "src/test/resources/reports/updateGenre/shot4.png");
    	Thread.sleep(1000);
    	
    	boolean expected;
	     expected = true;
	     Boolean result = driver.getPageSource().contains("1");
	     System.out.println(result);
	
	       
       assertEquals(expected, result);
	}

	@When("^I click on delete genres button$")
	public void i_click_on_delete_genres_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/deleteGenre/shot1.png");
		createGenre genre = PageFactory.initElements(driver, createGenre.class);
		System.out.println("clicking delete");
		genre.deleteclick();
	}

	@Then("^i can delete that genres entry$")
	public void i_can_delete_that_genres_entry() throws Throwable {
		driver.navigate().refresh();
    	Helper.snapShot(driver, "src/test/resources/reports/deleteGenre/shot2.png");
    	Thread.sleep(1000);
    	
    	String expected = "http://localhost:8082/html/genres.html";
	     String result = driver.getCurrentUrl();
	     System.out.println(result);
	
	       
      assertEquals(expected, result);

	}


}
