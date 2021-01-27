@albums
Feature: Albums Page



  Scenario: Create Album
  
    Given I can access the albums page
    When I enter album details
    Then i can create an album entry 

	Scenario: Read Album
  
    Given I can access the albums page
    Then i can read all the album entries  
    
    Scenario: Read One Album
  
    Given I can access the albums page    
    When I click on view one album 
    Then i can read that albums details  
    
      
  Scenario: Update Album
  
    Given I can access the albums view one page   
    When I enter new album details
    Then i can update that albums entry   
    
 
  Scenario: Delete Album
  
    Given I can access the albums page    
    When I click on delete album button 
    Then i can delete that albums entry 
    