package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class createAlbum {
	
	
	@FindBy(css = "#name")
	WebElement albumname;

	@FindBy(css = "#cover") 
	WebElement albumcover;
	
	@FindBy(css = "#artistid")
	WebElement artistid;
	
	@FindBy(css = "#create")
	WebElement createalbum;
	
	@FindBy(css = "#\\31  > input[type=button]")
	WebElement viewone;
	
	@FindBy(css = "#\\31  > button")
	WebElement delete;
	
	
	public void createAnAlbum(String name, String cover, int artist) {
		albumname.sendKeys(name);
		albumcover.sendKeys(cover);
		artistid.sendKeys(String.valueOf(artist));
		//createalbum.click();
	}
	
	public void createclick() {

		createalbum.click();
	}
	
	public void viewclick() {

		viewone.click();
	}
	
	public void deleteclick() {

		delete.click();
	}
	
	
}
