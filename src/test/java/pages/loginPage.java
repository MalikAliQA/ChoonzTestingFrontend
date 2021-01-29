package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class loginPage {
	
	@FindBy(css = "#username")
	WebElement loginuser;

	@FindBy(css = "#password") 
	WebElement loginpass;
	
	@FindBy(css = "body > div > form > button")
	WebElement signinbtn;
	
	
	
	public void loguser(String user, String pass) {
		loginuser.sendKeys(user);
		loginpass.sendKeys(pass);
		signinbtn.click();
	}
	

}
