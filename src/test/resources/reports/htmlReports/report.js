$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginLogout.feature");
formatter.feature({
  "line": 2,
  "name": "User registration, login and logout",
  "description": "",
  "id": "user-registration,-login-and-logout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@loginlogout"
    }
  ]
});
formatter.before({
  "duration": 5929317300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I wish to login to the system",
  "description": "",
  "id": "user-registration,-login-and-logout;i-wish-to-login-to-the-system",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "i go to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i enter the user name and passwird",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i can login",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_go_to_the_login_page()"
});
formatter.result({
  "duration": 3088030400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_the_user_name_and_passwird()"
});
formatter.result({
  "duration": 876345700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_login()"
});
formatter.result({
  "duration": 270136700,
  "status": "passed"
});
formatter.after({
  "duration": 571805000,
  "status": "passed"
});
formatter.before({
  "duration": 5356599500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "I wish to logout of the system",
  "description": "",
  "id": "user-registration,-login-and-logout;i-wish-to-logout-of-the-system",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "i can logina",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "when i click logout",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i am logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_logina()"
});
formatter.result({
  "duration": 1123384900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.when_i_click_logout()"
});
formatter.result({
  "duration": 141462700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_logged_out()"
});
formatter.result({
  "duration": 365410100,
  "status": "passed"
});
formatter.after({
  "duration": 580480800,
  "status": "passed"
});
formatter.before({
  "duration": 5255795800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I wish to register as a new user",
  "description": "",
  "id": "user-registration,-login-and-logout;i-wish-to-register-as-a-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "i can go to the register page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "i enter the registration details",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "i can login with the details",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_go_to_the_register_page()"
});
formatter.result({
  "duration": 385562600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_the_registration_details()"
});
formatter.result({
  "duration": 466328200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_login_with_the_details()"
});
formatter.result({
  "duration": 1518974200,
  "status": "passed"
});
formatter.after({
  "duration": 564254300,
  "status": "passed"
});
formatter.uri("albums.feature");
formatter.feature({
  "line": 2,
  "name": "Albums Page",
  "description": "",
  "id": "albums-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@albums"
    }
  ]
});
formatter.before({
  "duration": 5203535800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 237682800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 341581700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 10309500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create Album",
  "description": "",
  "id": "albums-page;create-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I can access the albums page from the artist",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter album details",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "i can create an album entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page_from_the_artist()"
});
formatter.result({
  "duration": 1019158600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_album_details()"
});
formatter.result({
  "duration": 405052200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_album_entry()"
});
formatter.result({
  "duration": 963541200,
  "status": "passed"
});
formatter.after({
  "duration": 585864500,
  "status": "passed"
});
formatter.before({
  "duration": 5302246900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 223381400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 380347400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 13041600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Read Album",
  "description": "",
  "id": "albums-page;read-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "i can read all the album entries",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 701625300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_album_entries()"
});
formatter.result({
  "duration": 6325800,
  "status": "passed"
});
formatter.after({
  "duration": 556539000,
  "status": "passed"
});
formatter.before({
  "duration": 5317198500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 221478600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 378598400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 13940800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Read One Album",
  "description": "",
  "id": "albums-page;read-one-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on view one album",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "i can read that albums details",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 670948500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_album()"
});
formatter.result({
  "duration": 604298100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_albums_details()"
});
formatter.result({
  "duration": 10050000,
  "status": "passed"
});
formatter.after({
  "duration": 571472700,
  "status": "passed"
});
formatter.before({
  "duration": 5258111200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 214214300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 331242400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 12835800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Update Album",
  "description": "",
  "id": "albums-page;update-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I enter new album details",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "i can update that albums entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 666896900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_album_details()"
});
formatter.result({
  "duration": 1120710000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_albums_entry()"
});
formatter.result({
  "duration": 704718300,
  "status": "passed"
});
formatter.after({
  "duration": 571624600,
  "status": "passed"
});
formatter.before({
  "duration": 5280302200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 219457200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 366976400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 13158700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Delete Album",
  "description": "",
  "id": "albums-page;delete-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on delete album button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "i can delete that albums entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 649164600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_album_button()"
});
formatter.result({
  "duration": 967041200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_albums_entry()"
});
formatter.result({
  "duration": 8455400,
  "status": "passed"
});
formatter.after({
  "duration": 555822300,
  "status": "passed"
});
formatter.before({
  "duration": 5251663300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 223186000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 388017200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 12380200,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "View artist linked to album",
  "description": "",
  "id": "albums-page;view-artist-linked-to-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I click on the artist of that album",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "i am taken to that artists page",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 673818200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_the_artist_of_that_album()"
});
formatter.result({
  "duration": 943382300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_artists_page()"
});
formatter.result({
  "duration": 8819100,
  "status": "passed"
});
formatter.after({
  "duration": 570981600,
  "status": "passed"
});
formatter.before({
  "duration": 5264329500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 214849600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 319327200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 14614000,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "View track linked to album",
  "description": "",
  "id": "albums-page;view-track-linked-to-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I click on a track in that album",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "ia am taken to that tracks page",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 641335900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_track_in_that_album()"
});
formatter.result({
  "duration": 1207254900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_tracks_page()"
});
formatter.result({
  "duration": 8643500,
  "status": "passed"
});
formatter.after({
  "duration": 572787300,
  "status": "passed"
});
formatter.before({
  "duration": 5310835900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 218915200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 322474200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 30849900,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Search for a album",
  "description": "",
  "id": "albums-page;search-for-a-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "i search for a album",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "only that albums details are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 651428800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_album()"
});
formatter.result({
  "duration": 326601600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_albums_details_are_displayed()"
});
formatter.result({
  "duration": 13309400,
  "status": "passed"
});
formatter.after({
  "duration": 571779800,
  "status": "passed"
});
formatter.uri("artists.feature");
formatter.feature({
  "line": 2,
  "name": "Artists Page",
  "description": "",
  "id": "artists-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@artists"
    }
  ]
});
formatter.before({
  "duration": 5327229300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 223206000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 332803600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 12305200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Create Artists",
  "description": "",
  "id": "artists-page;create-artists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I can access the Artists page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter Artists details",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "i can create an Artists entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_page()"
});
formatter.result({
  "duration": 610457400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_Artists_details()"
});
formatter.result({
  "duration": 326520600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_Artists_entry()"
});
formatter.result({
  "duration": 636553200,
  "status": "passed"
});
formatter.after({
  "duration": 585525300,
  "status": "passed"
});
formatter.before({
  "duration": 5231336100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 223462100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 334248300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 10882900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Read Artist",
  "description": "",
  "id": "artists-page;read-artist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I can access the Artists page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "i can read all the Artists entries",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_page()"
});
formatter.result({
  "duration": 632156300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_Artists_entries()"
});
formatter.result({
  "duration": 265542500,
  "status": "passed"
});
formatter.after({
  "duration": 561157600,
  "status": "passed"
});
formatter.before({
  "duration": 5290359800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 225580500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 330805400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 6716200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Read One Artists",
  "description": "",
  "id": "artists-page;read-one-artists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I can access the Artists page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on view one Artists",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "i can read that Artists details",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_page()"
});
formatter.result({
  "duration": 611937400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_Artists()"
});
formatter.result({
  "duration": 604849400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_Artists_details()"
});
formatter.result({
  "duration": 9335500,
  "status": "passed"
});
formatter.after({
  "duration": 559844500,
  "status": "passed"
});
formatter.before({
  "duration": 5299720600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 225770300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 316250600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 20337000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Update Artists",
  "description": "",
  "id": "artists-page;update-artists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I can access the Artists view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I enter new Artists details",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "i can update that Artists entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_view_one_page()"
});
formatter.result({
  "duration": 647423200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_Artists_details()"
});
formatter.result({
  "duration": 358370500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_Artists_entry()"
});
formatter.result({
  "duration": 625215500,
  "status": "passed"
});
formatter.after({
  "duration": 570244200,
  "status": "passed"
});
formatter.before({
  "duration": 5314918200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 221635400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 322196400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 13127800,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Delete Artists",
  "description": "",
  "id": "artists-page;delete-artists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "I can access the Artists view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on delete Artists button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "i can delete that Artists entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_view_one_page()"
});
formatter.result({
  "duration": 653830500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_Artists_button()"
});
formatter.result({
  "duration": 552693100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_Artists_entry()"
});
formatter.result({
  "duration": 6111400,
  "status": "passed"
});
formatter.after({
  "duration": 561332500,
  "status": "passed"
});
formatter.before({
  "duration": 5247631000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 225303800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 375786400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 6540200,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "view album from a single Artists",
  "description": "",
  "id": "artists-page;view-album-from-a-single-artists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "I can access the Artists view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I click on a linked album",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "i an taken to that albums page",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_view_one_page()"
});
formatter.result({
  "duration": 668643100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_linked_album()"
});
formatter.result({
  "duration": 591462200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_an_taken_to_that_albums_page()"
});
formatter.result({
  "duration": 8995200,
  "status": "passed"
});
formatter.after({
  "duration": 571786000,
  "status": "passed"
});
formatter.before({
  "duration": 5302969100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 225609700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 385280900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 15643900,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Search for a artist",
  "description": "",
  "id": "artists-page;search-for-a-artist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "I can access the Artists page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "i search for a artist",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "only that artists details are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_page()"
});
formatter.result({
  "duration": 603356300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_artist()"
});
formatter.result({
  "duration": 558982300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_artists_details_are_displayed()"
});
formatter.result({
  "duration": 7952100,
  "status": "passed"
});
formatter.after({
  "duration": 561139700,
  "status": "passed"
});
formatter.uri("genres.feature");
formatter.feature({
  "line": 2,
  "name": "genres Page",
  "description": "",
  "id": "genres-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@genres"
    }
  ]
});
formatter.before({
  "duration": 5256255000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userd enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "userd is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigated_to_the_login_page()"
});
formatter.result({
  "duration": 226098500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 337162800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 11031300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Create genres",
  "description": "",
  "id": "genres-page;create-genres",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I can access the genres page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter genres details",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "i can create an genres entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_genres_page()"
});
formatter.result({
  "duration": 634220600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_genres_details()"
});
formatter.result({
  "duration": 376666100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_genres_entry()"
});
formatter.result({
  "duration": 655359600,
  "status": "passed"
});
formatter.after({
  "duration": 557925000,
  "status": "passed"
});
formatter.before({
  "duration": 5244085100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userd enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "userd is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigated_to_the_login_page()"
});
formatter.result({
  "duration": 220319000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 323503100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 20442800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Read genres",
  "description": "",
  "id": "genres-page;read-genres",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I can access the genres page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "i can read all the genres entries",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_genres_page()"
});
formatter.result({
  "duration": 598798600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_genres_entries()"
});
formatter.result({
  "duration": 248956300,
  "status": "passed"
});
formatter.after({
  "duration": 565677200,
  "status": "passed"
});
formatter.before({
  "duration": 5294862100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userd enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "userd is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigated_to_the_login_page()"
});
formatter.result({
  "duration": 221324100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 363301500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 16385000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Read One genres",
  "description": "",
  "id": "genres-page;read-one-genres",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I can access the genres page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on view one genres",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "i can read that genres details",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_genres_page()"
});
formatter.result({
  "duration": 606229600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_genres()"
});
formatter.result({
  "duration": 607939800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_genres_details()"
});
formatter.result({
  "duration": 8348000,
  "status": "passed"
});
formatter.after({
  "duration": 560021200,
  "status": "passed"
});
formatter.before({
  "duration": 5225209300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userd enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "userd is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigated_to_the_login_page()"
});
formatter.result({
  "duration": 223313200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 378588200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 13858400,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Update genres",
  "description": "",
  "id": "genres-page;update-genres",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I can access the genres view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter new genres details",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "i can update that genres entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_genres_view_one_page()"
});
formatter.result({
  "duration": 631284000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_genres_details()"
});
formatter.result({
  "duration": 467495300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_genres_entry()"
});
formatter.result({
  "duration": 626001400,
  "status": "passed"
});
formatter.after({
  "duration": 579726700,
  "status": "passed"
});
formatter.before({
  "duration": 5303619500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userd enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "userd is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigated_to_the_login_page()"
});
formatter.result({
  "duration": 226025400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 315633800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 10919700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Delete genres",
  "description": "",
  "id": "genres-page;delete-genres",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I can access the genres view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I click on delete genres button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "i can delete that genres entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_genres_view_one_page()"
});
formatter.result({
  "duration": 655444700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_genres_button()"
});
formatter.result({
  "duration": 582230900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_genres_entry()"
});
formatter.result({
  "duration": 5852900,
  "status": "passed"
});
formatter.after({
  "duration": 563084200,
  "status": "passed"
});
formatter.before({
  "duration": 5240215200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userd enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "userd is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigated_to_the_login_page()"
});
formatter.result({
  "duration": 246352700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 340099800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 12753900,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "View track linked to genre",
  "description": "",
  "id": "genres-page;view-track-linked-to-genre",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I can access the genres view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I click on a track in that genre",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "i am taken to that tracks pagea",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_genres_view_one_page()"
});
formatter.result({
  "duration": 630376100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_track_in_that_genre()"
});
formatter.result({
  "duration": 611851000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_tracks_pagea()"
});
formatter.result({
  "duration": 8600100,
  "status": "passed"
});
formatter.after({
  "duration": 570516800,
  "status": "passed"
});
formatter.uri("playlists.feature");
formatter.feature({
  "line": 2,
  "name": "Playlists Page",
  "description": "",
  "id": "playlists-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@playlists"
    }
  ]
});
formatter.before({
  "duration": 5290306600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 261462300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 354013601,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 19452000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create Playlists",
  "description": "",
  "id": "playlists-page;create-playlists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I can access the Playlists page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter Playlists details",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "i can create an Playlists entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Playlists_page()"
});
formatter.result({
  "duration": 592688900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_Playlists_details()"
});
formatter.result({
  "duration": 449827700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_Playlists_entry()"
});
formatter.result({
  "duration": 598491199,
  "status": "passed"
});
formatter.after({
  "duration": 561555800,
  "status": "passed"
});
formatter.before({
  "duration": 5297440400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 216387001,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 327695000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 11848200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Read Playlists",
  "description": "",
  "id": "playlists-page;read-playlists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I can access the Playlists page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "i can read all the Playlists entries",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Playlists_page()"
});
formatter.result({
  "duration": 628549000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_Playlists_entries()"
});
formatter.result({
  "duration": 257460701,
  "status": "passed"
});
formatter.after({
  "duration": 556755000,
  "status": "passed"
});
formatter.before({
  "duration": 5236437500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 217161000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 319967901,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 14327400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Read One Playlists",
  "description": "",
  "id": "playlists-page;read-one-playlists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I can access the Playlists page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on view one Playlists",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "i can read that Playlists details",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Playlists_page()"
});
formatter.result({
  "duration": 622509500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_Playlists()"
});
formatter.result({
  "duration": 592055900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_Playlists_details()"
});
formatter.result({
  "duration": 8495500,
  "status": "passed"
});
formatter.after({
  "duration": 582087100,
  "status": "passed"
});
formatter.before({
  "duration": 5220931000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 221490700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 315046100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 11713799,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Update Playlists",
  "description": "",
  "id": "playlists-page;update-playlists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I can access the Playlists view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I enter new Playlists details",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "i can update that Playlists entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Playlists_view_one_page()"
});
formatter.result({
  "duration": 660209700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_Playlists_details()"
});
formatter.result({
  "duration": 549634100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_Playlists_entry()"
});
formatter.result({
  "duration": 617974000,
  "status": "passed"
});
formatter.after({
  "duration": 579687200,
  "status": "passed"
});
formatter.before({
  "duration": 5264001700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 220314600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 332093000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 6705700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Delete Playlists",
  "description": "",
  "id": "playlists-page;delete-playlists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I can access the Playlists view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on delete Playlists button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "i can delete that Playlists entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Playlists_view_one_page()"
});
formatter.result({
  "duration": 668298700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_Playlists_button()"
});
formatter.result({
  "duration": 547647900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_Playlists_entry()"
});
formatter.result({
  "duration": 5824100,
  "status": "passed"
});
formatter.after({
  "duration": 559875100,
  "status": "passed"
});
formatter.before({
  "duration": 5332252400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 217174500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 343326400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 6070900,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "view track from a single playlist",
  "description": "",
  "id": "playlists-page;view-track-from-a-single-playlist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I can access the Playlists view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I click on a linked track",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "i an taken to that tracks page",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Playlists_view_one_page()"
});
formatter.result({
  "duration": 640247200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_linked_track()"
});
formatter.result({
  "duration": 599842300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_an_taken_to_that_tracks_page()"
});
formatter.result({
  "duration": 8400300,
  "status": "passed"
});
formatter.after({
  "duration": 555516000,
  "status": "passed"
});
formatter.before({
  "duration": 5287740200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 217869100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 358315200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 5955900,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "search playlists from homepage",
  "description": "",
  "id": "playlists-page;search-playlists-from-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "I can access the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "i search for a playlist",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "only that playlists details are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_homepage()"
});
formatter.result({
  "duration": 330667100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_playlist()"
});
formatter.result({
  "duration": 323972000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_playlists_details_are_displayed()"
});
formatter.result({
  "duration": 7882900,
  "status": "passed"
});
formatter.after({
  "duration": 561702500,
  "status": "passed"
});
formatter.uri("tracks.feature");
formatter.feature({
  "line": 2,
  "name": "tracks Page",
  "description": "",
  "id": "tracks-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tracks"
    }
  ]
});
formatter.before({
  "duration": 5245589600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 212123200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 376336100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 20672900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Create tracks",
  "description": "",
  "id": "tracks-page;create-tracks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I can access the tracks page from the albums",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter tracks details",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "i can create an tracks entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page_from_the_albums()"
});
formatter.result({
  "duration": 977944400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_tracks_details()"
});
formatter.result({
  "duration": 669035600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_tracks_entry()"
});
formatter.result({
  "duration": 851517500,
  "status": "passed"
});
formatter.after({
  "duration": 561019000,
  "status": "passed"
});
formatter.before({
  "duration": 5249942500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 221146800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 324014700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 6319800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Read tracks",
  "description": "",
  "id": "tracks-page;read-tracks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I can access the tracks page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "i can read all the tracks entries",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page()"
});
formatter.result({
  "duration": 645661200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_tracks_entries()"
});
formatter.result({
  "duration": 5599300,
  "status": "passed"
});
formatter.after({
  "duration": 585396600,
  "status": "passed"
});
formatter.before({
  "duration": 5257955000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 220776900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 326694900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 22297200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Read One tracks",
  "description": "",
  "id": "tracks-page;read-one-tracks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I can access the tracks page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on view one tracks",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "i can read that tracks details",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page()"
});
formatter.result({
  "duration": 627384500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_tracks()"
});
formatter.result({
  "duration": 606079700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_tracks_details()"
});
formatter.result({
  "duration": 7980600,
  "status": "passed"
});
formatter.after({
  "duration": 561027300,
  "status": "passed"
});
formatter.before({
  "duration": 5272189700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 224884400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 307028900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 21136700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Update tracks",
  "description": "",
  "id": "tracks-page;update-tracks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I can access the tracks page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter new tracks details",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "i can update that tracks entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page()"
});
formatter.result({
  "duration": 634899900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_tracks_details()"
});
formatter.result({
  "duration": 1140218200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_tracks_entry()"
});
formatter.result({
  "duration": 633288500,
  "status": "passed"
});
formatter.after({
  "duration": 571746800,
  "status": "passed"
});
formatter.before({
  "duration": 5311747500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 223882900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 323535600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 24383200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Delete tracks",
  "description": "",
  "id": "tracks-page;delete-tracks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I can access the tracks page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on delete tracks button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "i can delete that tracks entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page()"
});
formatter.result({
  "duration": 629357700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_tracks_button()"
});
formatter.result({
  "duration": 890059500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_tracks_entry()"
});
formatter.result({
  "duration": 5748300,
  "status": "passed"
});
formatter.after({
  "duration": 574529400,
  "status": "passed"
});
formatter.before({
  "duration": 5252756500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 234674500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 319512700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 12567100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "View album linked to track",
  "description": "",
  "id": "tracks-page;view-album-linked-to-track",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "I can access the tracks page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I click on a album in that track",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "i am taken to that albums page",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page()"
});
formatter.result({
  "duration": 679477400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_album_in_that_track()"
});
formatter.result({
  "duration": 936009300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_albums_page()"
});
formatter.result({
  "duration": 8474900,
  "status": "passed"
});
formatter.after({
  "duration": 572799300,
  "status": "passed"
});
formatter.before({
  "duration": 5263082900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 224187500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 328717500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 14636400,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Search for a track",
  "description": "",
  "id": "tracks-page;search-for-a-track",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "I can access the tracks page",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "i search for a track",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "only that tracks details are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page()"
});
formatter.result({
  "duration": 664642100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_track()"
});
formatter.result({
  "duration": 319074600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_tracks_details_are_displayed()"
});
formatter.result({
  "duration": 8438600,
  "status": "passed"
});
formatter.after({
  "duration": 573548900,
  "status": "passed"
});
});