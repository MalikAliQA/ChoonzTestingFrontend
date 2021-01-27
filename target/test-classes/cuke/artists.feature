@artists
Feature: Artists Page



  Scenario: Create Artists
  
    Given I can access the Artists page
    When I enter Artists details
    Then i can create an Artists entry 

	Scenario: Read Album
  
    Given I can access the Artists page
    Then i can read all the Artists entries  
    
    Scenario: Read One Artists
  
    Given I can access the Artists page    
    When I click on view one Artists 
    Then i can read that Artists details  
    
      
  Scenario: Update Artists
  
    Given I can access the Artists view one page   
    When I enter new Artists details
    Then i can update that Artists entry   
    
 
  Scenario: Delete Artists
  
    Given I can access the Artists page    
    When I click on delete Artists button 
    Then i can delete that Artists entry 