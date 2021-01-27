package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class createArtist {
	
	@FindBy(css = "#name")
	WebElement artistname;
	
	@FindBy(css = "#create")
	WebElement createartist;
	
	@FindBy(css = "#main > div:nth-child(1) > input[type=button]")
	WebElement viewone;
	
	
	
	public void createAnArtist(String name) {
		artistname.sendKeys(name);

		//createalbum.click();
	}
	
	public void createclick() {

		createartist.click();
	}
	
	public void viewclick() {

		viewone.click();
	}
	
	

}
