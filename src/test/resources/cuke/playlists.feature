@playlists
Feature: Playlists Page



  Scenario: Create Playlists
  
    Given I can access the Playlists page
    When I enter Playlists details
    Then i can create an Playlists entry 

	Scenario: Read Playlists
  
    Given I can access the Playlists page
    Then i can read all the Playlists entries  
    
    #Scenario: Read One Playlists
  #
    #Given I can access the Playlists page    
    #When I click on view one Playlists 
    #Then i can read that Playlists details  
    #
      #
  #Scenario: Update Playlists
  #
    #Given I can access the Playlists view one page   
    #When I enter new Playlists details
    #Then i can update that Playlists entry   
    
 
  Scenario: Delete Playlists
  
    Given I can access the Playlists page    
    When I click on delete Playlists button 
    Then i can delete that Playlists entry 
