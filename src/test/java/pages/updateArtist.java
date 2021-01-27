package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class updateArtist {
	
	
	@FindBy(css = "#name")
	WebElement artistname;

	@FindBy(css = "#update")
	WebElement updateartist;
	
	@FindBy(css = "#main > div > button")
	WebElement delete;
	
	
	public void updateanArtist(String name) {
		artistname.clear();
		artistname.sendKeys(name);

	}
	
	public void updateclick() {

		updateartist.click();
	}
	
	public void deleteclick() {

		delete.click();
	}

}
