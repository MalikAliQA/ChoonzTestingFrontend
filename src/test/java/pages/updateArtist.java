package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class updateArtist {
	
	
	@FindBy(css = "#name")
	WebElement artistname;

	
	
	@FindBy(css = "#update")
	WebElement updateartist;
	
	
	public void updateanAlbum(String name) {
		artistname.clear();
		artistname.sendKeys(name);

		//createalbum.click();
	}
	
	public void updateclick() {

		updateartist.click();
	}

}
