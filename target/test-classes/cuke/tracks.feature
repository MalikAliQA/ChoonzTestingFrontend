@tracks
Feature: tracks Page



  Scenario: Create tracks
  
    Given I can access the tracks page
    When I enter tracks details
    Then i can create an tracks entry 

	Scenario: Read tracks
  
    Given I can access the tracks page
    Then i can read all the tracks entries  
    
    Scenario: Read One tracks
  
    Given I can access the tracks page    
    When I click on view one tracks 
    Then i can read that tracks details  
    
      
  Scenario: Update tracks
  
    Given I can access the tracks view one page   
    When I enter new tracks details
    Then i can update that tracks entry   
    
 
  Scenario: Delete tracks
  
    Given I can access the tracks page    
    When I click on delete tracks button 
    Then i can delete that tracks entry 