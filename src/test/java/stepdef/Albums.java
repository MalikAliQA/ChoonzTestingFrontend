package stepdef;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;

import helper.Helper;
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.createAlbum;
import pages.updateAlbum;

public class Albums {
	
	private static WebDriver driver;
	
    
    @Before
	public static void init() {
		
		
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
	}
	
	@Given("^I can access the albums page$")
	public void i_can_access_the_albums_page() throws Exception {
		driver.get("http://localhost:8082/html/albums.html");
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot1.png");
	}

	@When("^I enter album details$")
	public void i_enter_album_details() throws Exception {
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.createAnAlbum("testing", "testing", 1);
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot2.png");

	}

	@Then("^i can create an album entry$")
	public void i_can_create_an_album_entry() throws Exception {

		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot3.png");
		driver.navigate().refresh();

		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.cssSelector("#\\36  > input[type=button]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot4.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("6");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@Then("^i can read all the album entries$")
	public void i_can_read_all_the_album_entries() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/readAlbum/shot1.png");
		String expected = "http://localhost:8082/html/albums.html";
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);

	}

	@When("^I click on view one album$")
	public void i_click_on_view_one_album() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/readOneAlbum/shot1.png");

	}

	@Then("^i can read that albums details$")
	public void i_can_read_that_albums_details() throws Throwable {
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/readOneAlbum/shot2.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("1");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@Given("^I can access the albums view one page$")
	public void i_can_access_the_albums_view_one_page() throws Throwable {
		driver.get("http://localhost:8082/html/albums.html");
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot1.png");
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot2.png");

	}

	@When("^I enter new album details$")
	public void i_enter_new_album_details() throws Throwable {
		updateAlbum album = PageFactory.initElements(driver, updateAlbum.class);
		album.updateanAlbum("update", "function");
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot3.png");

	}

	@Then("^i can update that albums entry$")
	public void i_can_update_that_albums_entry() throws Throwable {
		updateAlbum album = PageFactory.initElements(driver, updateAlbum.class);
		album.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot4.png");

		driver.navigate().refresh();
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot5.png");
		

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("1");
		System.out.println(result);

		assertEquals(expected, result);
		driver.get("http://localhost:8082/html/albums.html");
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot6.png");

	}

	@When("^I click on delete album button$")
	public void i_click_on_delete_album_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/deleteAlbum/shot1.png");
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/deleteAlbum/shot2.png");

	}

	@Then("^i can delete that albums entry$")
	public void i_can_delete_that_albums_entry() throws Throwable {
		updateAlbum album = PageFactory.initElements(driver, updateAlbum.class);
		album.deleteclick();
		driver.navigate().refresh();
		Helper.snapShot(driver, "src/test/resources/reports/Album/deleteAlbum/shot3.png");

		driver.get("http://localhost:8082/html/albums.html");
		Helper.snapShot(driver, "src/test/resources/reports/Album/deleteAlbum/shot4.png");

		String expected = "http://localhost:8082/html/albums.html";
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);

	}
	


}
