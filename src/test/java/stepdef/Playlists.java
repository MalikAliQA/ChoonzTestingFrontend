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
import pages.createPlaylists;
import pages.createTrack;
import pages.loginPage;
import pages.updateArtist;
import pages.updatePlaylists;

public class Playlists {
	
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
	
	@Given("^navigatec to the login page$")
	public void navigate_to_the_login_page() throws Throwable {
		driver.get(HomeNav.LoginURL);
	}

	@When("^userc enter the correct details$")
	public void user_enter_the_correct_details() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("user", "password");
	}

	@Then("^userc is logged in$")
	public void user_is_logged_in() throws Throwable {

		String expected = HomeNav.HomeURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);

	}

	@Given("^I can access the Playlists page$")
	public void i_can_access_the_Playlists_page() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/createPlaylist/shot1.png");
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		nav.PlaylistsPage();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/createPlaylist/shot2.png");
	}

	@When("^I enter Playlists details$")
	public void i_enter_Playlists_details() throws Throwable {
		createPlaylists playlist = PageFactory.initElements(driver, createPlaylists.class);
		playlist.createAPlaylist("test", "test", "test");
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/createPlaylist/shot3.png");
	}

	@Then("^i can create an Playlists entry$")
	public void i_can_create_an_Playlists_entry() throws Throwable {
		createPlaylists playlist = PageFactory.initElements(driver, createPlaylists.class);
		playlist.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/createPlaylist/shot4.png");
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.cssSelector("#main > div:nth-child(3) > input[type=button]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/createPlaylist/shot5.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@Then("^i can read all the Playlists entries$")
	public void i_can_read_all_the_Playlists_entries() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/readPlaylist/shot1.png");
		String expected = HomeNav.PlaylistURL;
		String result = driver.getCurrentUrl();
		
		assertEquals(expected, result);
	}

	@When("^I click on view one Playlists$")
	public void i_click_on_view_one_Playlists() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/readOnePlaylist/shot1.png");
		createPlaylists playlist = PageFactory.initElements(driver, createPlaylists.class);
		playlist.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/readOnePlaylist/shot2.png");

	}

	@Then("^i can read that Playlists details$")
	public void i_can_read_that_Playlists_details() throws Throwable {

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("update");
		System.out.println(result);

		assertEquals(expected, result);
	}

	@Given("^I can access the Playlists view one page$")
	public void i_can_access_the_Playlists_view_one_page() throws Throwable {
		driver.get(HomeNav.PlaylistURL);
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/updatePlaylist/shot1.png");
		createPlaylists playlist = PageFactory.initElements(driver, createPlaylists.class);
		playlist.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/updatePlaylist/shot2.png");


	}

	@When("^I enter new Playlists details$")
	public void i_enter_new_Playlists_details() throws Throwable {
		updatePlaylists playlist = PageFactory.initElements(driver, updatePlaylists.class);
		playlist.createAPlaylist("update", "update", "update");
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/updatePlaylist/shot3.png");


	}

	@Then("^i can update that Playlists entry$")
	public void i_can_update_that_Playlists_entry() throws Throwable {
		updatePlaylists playlist = PageFactory.initElements(driver, updatePlaylists.class);
		playlist.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/updatePlaylist/shot4.png");

		Helper.snapShot(driver, "src/test/resources/reports/Playlist/updatePlaylist/shot5.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("update");


		assertEquals(expected, result);
		driver.get(HomeNav.PlaylistURL);
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/updatePlaylist/shot6.png");

	}

	@When("^I click on delete Playlists button$")
	public void i_click_on_delete_Playlists_button() throws Throwable {
//		driver.get(HomeNav.PlaylistURL);
//		createPlaylists playlist2 = PageFactory.initElements(driver, createPlaylists.class);
//		playlist2.viewtwoclick();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/deletePlaylist/shot1.png");
		Thread.sleep(2000);
		updatePlaylists playlist = PageFactory.initElements(driver, updatePlaylists.class);
		playlist.deleteclick();
		Thread.sleep(2000);
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/deletePlaylist/shot2.png");


	}

	@Then("^i can delete that Playlists entry$")
	public void i_can_delete_that_Playlists_entry() throws Throwable {
		
		String expected = HomeNav.PlaylistURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);
	}
	
	
	@When("^I click on a linked track$")
	public void i_click_on_a_linked_track() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/trackNav/shot1.png");
		Thread.sleep(2000);
		updatePlaylists playlist = PageFactory.initElements(driver, updatePlaylists.class);
		playlist.tracklinkclick();
		Thread.sleep(2000);
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/trackNav/shot2.png");
	
	}

	@Then("^i an taken to that tracks page$")
	public void i_an_taken_to_that_tracks_page() throws Throwable {
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("tracks view one");
		System.out.println(result);
		
		assertEquals(expected, result);
	}
	
	@Given("^I can access the homepage$")
	public void i_can_access_the_homepage() throws Throwable {
		driver.get(HomeNav.HomeURL);
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/homepageSearch/shot1.png");
		

	}

	@When("^i search for a playlist$")
	public void i_search_for_a_playlist() throws Throwable {
		HomeNav search = PageFactory.initElements(driver, HomeNav.class);
		search.searchplaylist("te");
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/homepageSearch/shot2.png");

	}

	@Then("^only that playlists details are displayed$")
	public void only_that_playlists_details_are_displayed() throws Throwable {
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);

	}
	


}
