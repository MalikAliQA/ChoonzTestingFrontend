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
import pages.HomeNav;
import pages.createAlbum;
import pages.createArtist;
import pages.loginPage;
import pages.updateAlbum;
import pages.updateArtist;

public class Artists {
	
	private static WebDriver driver;
	
    
    @Before
	public static void init() {
		
		
		System.setProperty("webdriver.chrome.driver", 
				"src/test/resources/drivers/chromedriver.exe");
		
		ChromeOptions cOptions = new ChromeOptions();
		cOptions.setHeadless(true);
		
		driver = new ChromeDriver(cOptions);
		driver.manage().window().setSize(new Dimension(1366, 768));
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	}
	
	
	@After
	public static void tearDown() {
		driver.quit();
	}
	
	@Given("^navigate to the login page$")
	public void navigate_to_the_login_page() throws Throwable {
		driver.get(HomeNav.LoginURL);
	}

	@When("^user enter the correct details$")
	public void user_enter_the_correct_details() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("user", "password");
		login.click();
	}

	@Then("^user is logged in$")
	public void user_is_logged_in() throws Throwable {

		String expected = HomeNav.HomeURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);

	}

	@Given("^I can access the Artists page$")
	public void i_can_access_the_Artists_page() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Artist/createArtist/shot1.png");
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		nav.ArtistPage();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/createArtist/shot2.png");

	}

	@When("^I enter Artists details$")
	public void i_enter_Artists_details() throws Throwable {
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.createAnArtist("artiststest");
		Helper.snapShot(driver, "src/test/resources/reports/Artist/createArtist/shot3.png");

	}

	@Then("^i can create an Artists entry$")
	public void i_can_create_an_Artists_entry() throws Throwable {
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/createArtist/shot4.png");

		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.cssSelector("#main > div:nth-child(3) > input[type=button]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		Helper.snapShot(driver, "src/test/resources/reports/Artist/createArtist/shot5.png");
	

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("artiststest");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@Then("^i can read all the Artists entries$")
	public void i_can_read_all_the_Artists_entries() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Artist/readArtist/shot1.png");
		String expected = HomeNav.ArtistURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);
		

	}

	@When("^I click on view one Artists$")
	public void i_click_on_view_one_Artists() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Artist/readOneArtist/shot1.png");
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/readOneArtist/shot2.png");

	}

	@Then("^i can read that Artists details$")
	public void i_can_read_that_Artists_details() throws Throwable {
		

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Calibre");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@Given("^I can access the Artists view one page$")
	public void i_can_access_the_Artists_view_one_page() throws Throwable {
		driver.get(HomeNav.ArtistURL);
		Helper.snapShot(driver, "src/test/resources/reports/Artist/updateArtist/shot1.png");
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/updateArtist/shot2.png");

	}

	@When("^I enter new Artists details$")
	public void i_enter_new_Artists_details() throws Throwable {
		updateArtist artist = PageFactory.initElements(driver, updateArtist.class);
		artist.updateanArtist("update");
		Helper.snapShot(driver, "src/test/resources/reports/Artist/updateArtist/shot3.png");

	}

	@Then("^i can update that Artists entry$")
	public void i_can_update_that_Artists_entry() throws Throwable {
		updateArtist artist = PageFactory.initElements(driver, updateArtist.class);
		artist.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/updateArtist/shot4.png");

		Helper.snapShot(driver, "src/test/resources/reports/Artist/updateArtist/shot5.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("update");
		System.out.println(result);

		assertEquals(expected, result);
		driver.get(HomeNav.ArtistURL);
		Helper.snapShot(driver, "src/test/resources/reports/Artist/updateArtist/shot6.png");

	}

	@When("^I click on delete Artists button$")
	public void i_click_on_delete_Artists_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Artist/deleteArtist/shot1.png");
		updateArtist artist = PageFactory.initElements(driver, updateArtist.class);
		artist.deleteclick();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/deleteArtist/shot2.png");

	}

	@Then("^i can delete that Artists entry$")
	public void i_can_delete_that_Artists_entry() throws Throwable {
		

		String expected = HomeNav.ArtistURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);

	}
	
	

	@When("^I click on a linked album$")
	public void i_click_on_a_linked_album() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Artist/albumNav/shot1.png");
		updateArtist artist = PageFactory.initElements(driver, updateArtist.class);
		artist.albumclick();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/albumNav/shot2.png");
	
	}

	@Then("^i an taken to that albums page$")
	public void i_an_taken_to_that_albums_page() throws Throwable {
		
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Sincere");
		System.out.println(result);
		
		assertEquals(expected, result);

	}
	
	
	@When("^i search for a artist$")
	public void i_search_for_a_artist() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Artist/searchArtist/shot1.png");
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.searchartist("test");
		Helper.snapShot(driver, "src/test/resources/reports/Artist/searchArtist/shot2.png");
	}

	@Then("^only that artists details are displayed$")
	public void only_that_artists_details_are_displayed() throws Throwable {
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);
	}

}
