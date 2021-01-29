package stepdef;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;

import helper.Helper;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomeNav;
import pages.createAlbum;
import pages.createArtist;
import pages.loginPage;
import pages.updateAlbum;

public class Albums {

	private static WebDriver driver;

	@Before
	public static void init() {

		System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");

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

	@Given("^navigatea to the login page$")
	public void navigate_to_the_login_page() throws Throwable {
		driver.get(HomeNav.LoginURL);
	}

	@When("^user enter the correcta details$")
	public void user_enter_the_correct_details() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("user", "password");
		login.click();
	}

	@Then("^usera is logged in$")
	public void user_is_logged_in() throws Throwable {

		String expected = HomeNav.HomeURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);

	}

	@Given("^I can access the albums page from the artist$")
	public void i_can_access_the_albums_page_from_the_artist() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot1.png");
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		createArtist artistpage = PageFactory.initElements(driver, createArtist.class);
		nav.ArtistPage();
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot2.png");
		artistpage.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot3.png");
	}

	@When("^I enter album details$")
	public void i_enter_album_details() throws Exception {
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.createAnAlbum("testing", "testing");
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot4.png");

	}

	@Then("^i can create an album entry$")
	public void i_can_create_an_album_entry() throws Exception {
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot5.png");
		driver.get(HomeNav.HomeURL);
		nav.AlbumsPage();
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot6.png");

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot7.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@Given("^I can access the albums page$")
	public void i_can_access_the_albums_page() throws Throwable {
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		driver.get(HomeNav.HomeURL);
		Helper.snapShot(driver, "src/test/resources/reports/Album/readAlbum/shot1.png");
		nav.AlbumsPage();
		Helper.snapShot(driver, "src/test/resources/reports/Album/readAlbum/shot2.png");
	}

	@Then("^i can read all the album entries$")
	public void i_can_read_all_the_album_entries() throws Throwable {
		
		String expected = HomeNav.AlbumsURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);

	}

	@When("^I click on view one album$")
	public void i_click_on_view_one_album() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/readOneAlbum/shot1.png");
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/readOneAlbum/shot2.png");

	}

	@Then("^i can read that albums details$")
	public void i_can_read_that_albums_details() throws Throwable {

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Shelflife 4");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@When("^I enter new album details$")
	public void i_enter_new_album_details() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot1.png");
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot2.png");
		updateAlbum albumup = PageFactory.initElements(driver, updateAlbum.class);
		albumup.updateanAlbum("update", "function");
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot3.png");

	}

	@Then("^i can update that albums entry$")
	public void i_can_update_that_albums_entry() throws Throwable {
		updateAlbum album = PageFactory.initElements(driver, updateAlbum.class);
		album.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot4.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("update");
		System.out.println(result);

		assertEquals(expected, result);
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		driver.get(HomeNav.HomeURL);
		nav.AlbumsPage();
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot5.png");

	}

	@When("^I click on delete album button$")
	public void i_click_on_delete_album_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/deleteAlbum/shot1.png");
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/deleteAlbum/shot2.png");
		updateAlbum albumdel = PageFactory.initElements(driver, updateAlbum.class);
		albumdel.deleteclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/deleteAlbum/shot3.png");

	}

	@Then("^i can delete that albums entry$")
	public void i_can_delete_that_albums_entry() throws Throwable {

		String expected = HomeNav.AlbumsURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);

	}

	@When("^I click on the artist of that album$")
	public void i_click_on_the_artist_of_that_album() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/artistNav/shot1.png");
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewtwoclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/artistNav/shot2.png");
		updateAlbum album2 = PageFactory.initElements(driver, updateAlbum.class);
		album2.artistclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/artistNav/shot3.png");

	}

	@Then("^i am taken to that artists page$")
	public void i_am_taken_to_that_artists_page() throws Throwable {

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Edit Artist");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@When("^I click on a track in that album$")
	public void i_click_on_a_track_in_that_album() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/trackNav/shot1.png");
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewtwoclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/trackNav/shot2.png");
		updateAlbum album2 = PageFactory.initElements(driver, updateAlbum.class);
		JavascriptExecutor js = (JavascriptExecutor) driver;
    	WebElement Element = driver.findElement(By.cssSelector("#tracks > div:nth-child(1) > input[type=button]"));
    	js.executeScript("arguments[0].scrollIntoView();", Element);
		Helper.snapShot(driver, "src/test/resources/reports/Album/trackNav/shot3.png");
    	album2.trackclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/trackNav/shot4.png");

	}

	@Then("^ia am taken to that tracks page$")
	public void i_am_taken_to_that_tracks_page() throws Throwable {

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("tracks view one");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@When("^i search for a album$")
	public void i_search_for_a_album() throws Throwable {
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.searchAnAlbum("test");
		Helper.snapShot(driver, "src/test/resources/reports/Album/searchAlbum/shot1.png");

	}

	@Then("^only that albums details are displayed$")
	public void only_that_albums_details_are_displayed() throws Throwable {
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);

	}

}
