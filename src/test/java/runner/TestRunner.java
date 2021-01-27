package runner;

import org.apache.poi.util.SystemOutLogger;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/cuke", tags="@albums, @artists, @genres", plugin = {"pretty",
"html:src/test/resources/reports/htmlReports"}, monochrome = true,  glue = {"stepdef"})
public class TestRunner {
	


}
