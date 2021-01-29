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
import pages.createGenre;
import pages.loginPage;
import pages.updateArtist;
import pages.updateGenre;

public class Genres {
	
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
	
	
	@Given("^navigated to the login page$")
	public void navigate_to_the_login_page() throws Throwable {
		driver.get(HomeNav.LoginURL);
	}

	@When("^userd enter the correct details$")
	public void user_enter_the_correct_details() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("user", "password");
		login.click();
	}

	@Then("^userd is logged in$")
	public void user_is_logged_in() throws Throwable {

		String expected = HomeNav.HomeURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);

	}

	@Given("^I can access the genres page$")
	public void i_can_access_the_genres_page() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Genre/createGenre/shot1.png");
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		nav.GenresPage();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/createGenre/shot2.png");


	}

	@When("^I enter genres details$")
	public void i_enter_genres_details() throws Throwable {
		createGenre genre = PageFactory.initElements(driver, createGenre.class);
		genre.createAGenre("genre", "creation");
		Helper.snapShot(driver, "src/test/resources/reports/Genre/createGenre/shot3.png");

	}

	@Then("^i can create an genres entry$")
	public void i_can_create_an_genres_entry() throws Throwable {
		createGenre genre = PageFactory.initElements(driver, createGenre.class);
		genre.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/createGenre/shot4.png");
		driver.navigate().refresh();
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.cssSelector("#main > div:nth-child(3) > input[type=button]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		Helper.snapShot(driver, "src/test/resources/reports/Genre/createGenre/shot5.png");


		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("genre");
		System.out.println(result);

		assertEquals(expected, result);
	}

	@Then("^i can read all the genres entries$")
	public void i_can_read_all_the_genres_entries() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Genre/readGenre/shot1.png");
		String expected = HomeNav.GenreURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);
	}

	@When("^I click on view one genres$")
	public void i_click_on_view_one_genres() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Genre/readOneGenre/shot1.png");
		createGenre genre = PageFactory.initElements(driver, createGenre.class);
		genre.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/readOneGenre/shot2.png");

	}

	@Then("^i can read that genres details$")
	public void i_can_read_that_genres_details() throws Throwable {

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Drum");
		System.out.println(result);

		assertEquals(expected, result);
	}

	@Given("^I can access the genres view one page$")
	public void i_can_access_the_genres_view_one_page() throws Throwable {
		driver.get(HomeNav.GenreURL);
		Helper.snapShot(driver, "src/test/resources/reports/Genre/updateGenre/shot1.png");
		createGenre genre = PageFactory.initElements(driver, createGenre.class);
		genre.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/updateGenre/shot2.png");

	}

	@When("^I enter new genres details$")
	public void i_enter_new_genres_details() throws Throwable {
		updateGenre genre = PageFactory.initElements(driver, updateGenre.class);
		genre.updateaGenre("update", "function");
		Helper.snapShot(driver, "src/test/resources/reports/Genre/updateGenre/shot3.png");

	}

	@Then("^i can update that genres entry$")
	public void i_can_update_that_genres_entry() throws Throwable {
		updateGenre genre = PageFactory.initElements(driver, updateGenre.class);
		genre.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/updateGenre/shot4.png");

		Helper.snapShot(driver, "src/test/resources/reports/Genre/updateGenre/shot5.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("update");


		assertEquals(expected, result);
		driver.get(HomeNav.GenreURL);
		Helper.snapShot(driver, "src/test/resources/reports/Genre/updateGenre/shot6.png");
	}

	@When("^I click on delete genres button$")
	public void i_click_on_delete_genres_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Genre/deleteGenre/shot1.png");
		updateGenre genre = PageFactory.initElements(driver, updateGenre.class);
		genre.deleteclick();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/deleteGenre/shot2.png");
		

	}

	@Then("^i can delete that genres entry$")
	public void i_can_delete_that_genres_entry() throws Throwable {
		
		String expected = HomeNav.GenreURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);

	}
	
	
	@When("^I click on a track in that genre$")
	public void i_click_on_a_track_in_that_genre() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Genre/trackNav/shot1.png");
		updateGenre genre = PageFactory.initElements(driver, updateGenre.class);
		genre.trackclick();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/trackNav/shot2.png");
	
	}

	@Then("^i am taken to that tracks page$")
	public void i_am_taken_to_that_tracks_page() throws Throwable {
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Tired");
		System.out.println(result);
		
		assertEquals(expected, result);
	}

	

}
