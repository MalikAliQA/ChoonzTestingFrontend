package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class updateTrack {
	
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
	
	@FindBy(css = "#update")
	WebElement updatetrack;

	
	
	public void updateaTrack(String name, int duration, String lyrics){//, int albumID, int genreID, int playlistID) {
		trackname.clear();
		trackname.sendKeys(name);
		trackduration.clear();
		trackduration.sendKeys(String.valueOf(duration));
		tracklyrics.clear();
		tracklyrics.sendKeys(lyrics);
//		albumsid.clear();
//		albumsid.sendKeys(String.valueOf(albumID));
//		genresid.clear();
//		genresid.sendKeys(String.valueOf(genreID));
//		playlistsid.clear();
//		playlistsid.sendKeys(String.valueOf(playlistID));
		//createalbum.click();
	}
	
	public void updateclick() {

		updatetrack.click();
	}
	
	

	

}
