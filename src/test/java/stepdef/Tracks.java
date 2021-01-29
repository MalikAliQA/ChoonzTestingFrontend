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
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper.Helper;
import pages.HomeNav;
import pages.createAlbum;
import pages.createArtist;
import pages.createTrack;
import pages.loginPage;
import pages.updateAlbum;
import pages.updateTrack;

public class Tracks {
	
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

	
	@Given("^navigateb to the login page$")
	public void navigate_to_the_login_page() throws Throwable {
		driver.get(HomeNav.LoginURL);
	}

	@When("^userb enter the correct details$")
	public void user_enter_the_correct_details() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("user", "password");
		login.click();
	}

	@Then("^userb is logged in$")
	public void user_is_logged_in() throws Throwable {

		String expected = HomeNav.HomeURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);

	}
	
	@Given("^I can access the tracks page from the albums$")
	public void i_can_access_the_tracks_page_from_the_albums() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot1.png");
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		createAlbum albumpage = PageFactory.initElements(driver, createAlbum.class);
		nav.AlbumsPage();
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot2.png");
		albumpage.viewtwoclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot3.png");
	   
	}

	@When("^I enter tracks details$")
	public void i_enter_tracks_details() throws Throwable {
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.createATrack("test", 1, "test");
		WebElement testDropDown = driver.findElement(By.id("genre"));  
		Select dropdown = new Select(testDropDown); 
		dropdown.selectByVisibleText("Garage"); 
		Thread.sleep(2000);
		WebElement testDropDown2 = driver.findElement(By.id("playlist"));  
		Select dropdown2 = new Select(testDropDown2); 
		dropdown2.selectByVisibleText("More Bangers");  
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot4.png");
	}

	@Then("^i can create an tracks entry$")
	public void i_can_create_an_tracks_entry() throws Throwable {
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot5.png");
		driver.get(HomeNav.TracksURL);
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot6.png");
		
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot7.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);

	}
	
	@Given("^I can access the tracks page$")
	public void i_can_access_the_tracks_page() throws Throwable {
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		driver.get(HomeNav.HomeURL);
		Helper.snapShot(driver, "src/test/resources/reports/Track/readTrack/shot1.png");
		nav.TrackPage();
		Helper.snapShot(driver, "src/test/resources/reports/Track/readTrack/shot2.png");
	}

	@Then("^i can read all the tracks entries$")
	public void i_can_read_all_the_tracks_entries() throws Throwable {
		
		String expected = HomeNav.TracksURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);
	}

	@When("^I click on view one tracks$")
	public void i_click_on_view_one_tracks() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Track/readOneTrack/shot1.png");
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/readOneTrack/shot2.png");
	}

	@Then("^i can read that tracks details$")
	public void i_can_read_that_tracks_details() throws Throwable {
		
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Tired");
		System.out.println(result);

		assertEquals(expected, result);
	}


	@When("^I enter new tracks details$")
	public void i_enter_new_tracks_details() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Track/updateTrack/shot1.png");
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/updateTrack/shot2.png");
		updateTrack track2 = PageFactory.initElements(driver, updateTrack.class);
		track2.updateaTrack("update", 1, "function");
		Helper.snapShot(driver, "src/test/resources/reports/Track/updateTrack/shot3.png");
	}

	@Then("^i can update that tracks entry$")
	public void i_can_update_that_tracks_entry() throws Throwable {
		updateTrack track = PageFactory.initElements(driver, updateTrack.class);
		track.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/updateTrack/shot4.png");


		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("update");
		System.out.println(result);

		assertEquals(expected, result);
		driver.get(HomeNav.TracksURL);
		Helper.snapShot(driver, "src/test/resources/reports/Track/updateTrack/shot5.png");
	}

	@When("^I click on delete tracks button$")
	public void i_click_on_delete_tracks_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Track/deleteTrack/shot1.png");
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/deleteTrack/shot2.png");
		updateTrack trackdel = PageFactory.initElements(driver, updateTrack.class);
		trackdel.deleteclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/deleteTrack/shot3.png");

	}

	@Then("^i can delete that tracks entry$")
	public void i_can_delete_that_tracks_entry() throws Throwable {

		String expected = HomeNav.TracksURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);
	}
	

	@When("^I click on a album in that track$")
	public void i_click_on_a_album_in_that_track() throws Throwable {
		
		Helper.snapShot(driver, "src/test/resources/reports/Track/albumNav/shot1.png");
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/albumNav/shot2.png");
		updateTrack track2 = PageFactory.initElements(driver, updateTrack.class);
		track2.albumlinkclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/albumNav/shot3.png");

	}

	@Then("^i am taken to that albums page$")
	public void i_am_taken_to_that_albums_page() throws Throwable {
		
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Update Album");
		System.out.println(result);

		assertEquals(expected, result);

	}


	@When("^i search for a track$")
	public void i_search_for_a_track() throws Throwable {
		
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.searchATrack("tes");
		Helper.snapShot(driver, "src/test/resources/reports/Track/searchTrack/shot1.png");

	}

	@Then("^only that tracks details are displayed$")
	public void only_that_tracks_details_are_displayed() throws Throwable {
		
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);

	}


}
