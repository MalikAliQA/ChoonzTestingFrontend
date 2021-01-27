package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class updateAlbum {
	
	@FindBy(css = "#name")
	WebElement albumname;

	@FindBy(css = "#cover") 
	WebElement albumcover;
	
	@FindBy(css = "#update")
	WebElement updatealbum;
	
	@FindBy(css = "#main > div > button")
	WebElement delete;
	
	
	public void updateanAlbum(String name, String cover) {
		albumname.clear();
		albumname.sendKeys(name);
		albumcover.clear();
		albumcover.sendKeys(cover);
		//createalbum.click();
	}
	
	public void updateclick() {

		updatealbum.click();
	}
	
	public void deleteclick() {

		delete.click();
	}

}
