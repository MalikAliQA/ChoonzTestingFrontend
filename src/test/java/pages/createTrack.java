package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class createTrack {
	
	@FindBy(css = "#name")
	WebElement trackname;

	@FindBy(css = "#duration") 
	WebElement trackduration;
	
	@FindBy(css = "#lyrics")
	WebElement tracklyrics;
	
	@FindBy(css = "#albumId")
	WebElement albumsid;
	
	@FindBy(css = "#genreId")
	WebElement genresid;
	
	@FindBy(css = "#playlistId")
	WebElement playlistsid;
	
	@FindBy(css = "#create")
	WebElement createtrack;
	
	@FindBy(css = "#test > input[type=button]")
	WebElement viewone;

	
	
	public void createATrack(String name, int duration, String lyrics, int albumID, int genreID, int playlistID) {
		trackname.sendKeys(name);
		trackduration.sendKeys(String.valueOf(duration));
		tracklyrics.sendKeys(lyrics);
		albumsid.sendKeys(String.valueOf(albumID));
		genresid.sendKeys(String.valueOf(genreID));
		playlistsid.sendKeys(String.valueOf(playlistID));
		//createalbum.click();
	}
	
	public void createclick() {

		createtrack.click();
	}
	
	public void viewclick() {

		viewone.click();
	}
	

	

}
