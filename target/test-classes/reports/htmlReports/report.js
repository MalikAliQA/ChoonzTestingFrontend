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
  "duration": 5896806600,
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
  "duration": 3009324100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_the_user_name_and_passwird()"
});
formatter.result({
  "duration": 845686700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_login()"
});
formatter.result({
  "duration": 268711500,
  "status": "passed"
});
formatter.after({
  "duration": 576648900,
  "status": "passed"
});
formatter.before({
  "duration": 5314860100,
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
  "duration": 1136852900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.when_i_click_logout()"
});
formatter.result({
  "duration": 146449700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_logged_out()"
});
formatter.result({
  "duration": 330946000,
  "status": "passed"
});
formatter.after({
  "duration": 589264000,
  "status": "passed"
});
formatter.before({
  "duration": 5357879800,
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
  "duration": 408911600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_the_registration_details()"
});
formatter.result({
  "duration": 525955600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_login_with_the_details()"
});
formatter.result({
  "duration": 1575708500,
  "status": "passed"
});
formatter.after({
  "duration": 581254900,
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
  "duration": 5330864800,
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
  "duration": 228357300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 409491900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 16279300,
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
  "duration": 1011765100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_album_details()"
});
formatter.result({
  "duration": 411495300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_album_entry()"
});
formatter.result({
  "duration": 998638600,
  "status": "passed"
});
formatter.after({
  "duration": 578526400,
  "status": "passed"
});
formatter.before({
  "duration": 5322103100,
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
  "duration": 279729300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 409703800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 17317500,
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
  "duration": 693383700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_album_entries()"
});
formatter.result({
  "duration": 6308900,
  "status": "passed"
});
formatter.after({
  "duration": 582392500,
  "status": "passed"
});
formatter.before({
  "duration": 5352024400,
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
  "duration": 272911200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 347323600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 15118400,
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
  "duration": 687394700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_album()"
});
formatter.result({
  "duration": 632357200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_albums_details()"
});
formatter.result({
  "duration": 9748000,
  "status": "passed"
});
formatter.after({
  "duration": 583545600,
  "status": "passed"
});
formatter.before({
  "duration": 5340891600,
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
  "duration": 282227400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 402486700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 7438300,
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
  "duration": 757140500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_album_details()"
});
formatter.result({
  "duration": 1272142200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_albums_entry()"
});
formatter.result({
  "duration": 763961700,
  "status": "passed"
});
formatter.after({
  "duration": 610689000,
  "status": "passed"
});
formatter.before({
  "duration": 5315073600,
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
  "duration": 270384500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 416231300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 26066900,
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
  "duration": 688249400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_album_button()"
});
formatter.result({
  "duration": 987763600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_albums_entry()"
});
formatter.result({
  "duration": 6813700,
  "status": "passed"
});
formatter.after({
  "duration": 589235000,
  "status": "passed"
});
formatter.before({
  "duration": 5400815900,
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
  "duration": 262930100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 372905900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 14222400,
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
  "duration": 711108700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_the_artist_of_that_album()"
});
formatter.result({
  "duration": 1000397300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_artists_page()"
});
formatter.result({
  "duration": 11100300,
  "status": "passed"
});
formatter.after({
  "duration": 581032400,
  "status": "passed"
});
formatter.before({
  "duration": 5349860000,
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
  "duration": 772787200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 398251400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 19140600,
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
  "duration": 698604300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_track_in_that_album()"
});
formatter.result({
  "duration": 1321485300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_tracks_page()"
});
formatter.result({
  "duration": 10167800,
  "status": "passed"
});
formatter.after({
  "duration": 584785400,
  "status": "passed"
});
formatter.before({
  "duration": 5405056000,
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
  "duration": 285887600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 448381100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 18563100,
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
  "duration": 718433900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_album()"
});
formatter.result({
  "duration": 364369700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_albums_details_are_displayed()"
});
formatter.result({
  "duration": 9768800,
  "status": "passed"
});
formatter.after({
  "duration": 577044900,
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
  "duration": 5411339400,
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
  "duration": 242927700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 404724000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 14322900,
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
  "duration": 644471600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_Artists_details()"
});
formatter.result({
  "duration": 332167700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_Artists_entry()"
});
formatter.result({
  "duration": 620695000,
  "status": "passed"
});
formatter.after({
  "duration": 582976300,
  "status": "passed"
});
formatter.before({
  "duration": 5338531500,
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
  "duration": 235387700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 362460600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 7370700,
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
  "duration": 658412600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_Artists_entries()"
});
formatter.result({
  "duration": 269238100,
  "status": "passed"
});
formatter.after({
  "duration": 583541300,
  "status": "passed"
});
formatter.before({
  "duration": 5316152700,
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
  "duration": 236575700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 376733100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 24286100,
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
  "duration": 637467600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_Artists()"
});
formatter.result({
  "duration": 631854200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_Artists_details()"
});
formatter.result({
  "duration": 12698500,
  "status": "passed"
});
formatter.after({
  "duration": 583605000,
  "status": "passed"
});
formatter.before({
  "duration": 5346262300,
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
  "duration": 280244500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 380520300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 11058900,
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
  "duration": 678662200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_Artists_details()"
});
formatter.result({
  "duration": 383659900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_Artists_entry()"
});
formatter.result({
  "duration": 648547000,
  "status": "passed"
});
formatter.after({
  "duration": 587432600,
  "status": "passed"
});
formatter.before({
  "duration": 5365607900,
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
  "duration": 354961300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 339858500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 14728700,
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
  "duration": 679347700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_Artists_button()"
});
formatter.result({
  "duration": 565254600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_Artists_entry()"
});
formatter.result({
  "duration": 6066700,
  "status": "passed"
});
formatter.after({
  "duration": 582716100,
  "status": "passed"
});
formatter.before({
  "duration": 5412662900,
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
  "duration": 245747600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 393640800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 20132900,
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
  "duration": 672072000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_linked_album()"
});
formatter.result({
  "duration": 651244600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_an_taken_to_that_albums_page()"
});
formatter.result({
  "duration": 9367600,
  "status": "passed"
});
formatter.after({
  "duration": 588221100,
  "status": "passed"
});
formatter.before({
  "duration": 5321383700,
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
  "duration": 243497400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 416810000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 23829900,
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
  "duration": 645944200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_artist()"
});
formatter.result({
  "duration": 596991100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_artists_details_are_displayed()"
});
formatter.result({
  "duration": 8252400,
  "status": "passed"
});
formatter.after({
  "duration": 618799600,
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
  "duration": 5332505400,
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
  "duration": 241420800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 408221700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 24206700,
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
  "duration": 666234700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_genres_details()"
});
formatter.result({
  "duration": 415349800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_genres_entry()"
});
formatter.result({
  "duration": 709987000,
  "status": "passed"
});
formatter.after({
  "duration": 582530600,
  "status": "passed"
});
formatter.before({
  "duration": 5342841900,
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
  "duration": 238753600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 342489900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 7494200,
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
  "duration": 679450200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_genres_entries()"
});
formatter.result({
  "duration": 255362000,
  "status": "passed"
});
formatter.after({
  "duration": 582264500,
  "status": "passed"
});
formatter.before({
  "duration": 5346216000,
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
  "duration": 246417000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 363653200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 14831300,
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
  "duration": 646200100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_genres()"
});
formatter.result({
  "duration": 619564500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_genres_details()"
});
formatter.result({
  "duration": 9600300,
  "status": "passed"
});
formatter.after({
  "duration": 599338700,
  "status": "passed"
});
formatter.before({
  "duration": 5354808300,
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
  "duration": 264209600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 337600200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 12644400,
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
  "duration": 660475000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_genres_details()"
});
formatter.result({
  "duration": 519283600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_genres_entry()"
});
formatter.result({
  "duration": 619673200,
  "status": "passed"
});
formatter.after({
  "duration": 586388300,
  "status": "passed"
});
formatter.before({
  "duration": 5327453000,
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
  "duration": 242975700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 356326200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 14125400,
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
  "duration": 670699800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_genres_button()"
});
formatter.result({
  "duration": 579864600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_genres_entry()"
});
formatter.result({
  "duration": 5075400,
  "status": "passed"
});
formatter.after({
  "duration": 594574800,
  "status": "passed"
});
formatter.before({
  "duration": 5329464600,
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
  "duration": 232468000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 397170300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 23791700,
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
  "duration": 668800000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_track_in_that_genre()"
});
formatter.result({
  "duration": 610200900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_tracks_pagea()"
});
formatter.result({
  "duration": 8657900,
  "status": "passed"
});
formatter.after({
  "duration": 600860900,
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
  "duration": 5371374000,
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
  "duration": 240840700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 383914700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 13003200,
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
  "duration": 641278400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_Playlists_details()"
});
formatter.result({
  "duration": 453949300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_Playlists_entry()"
});
formatter.result({
  "duration": 628910700,
  "status": "passed"
});
formatter.after({
  "duration": 580247500,
  "status": "passed"
});
formatter.before({
  "duration": 5460810600,
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
  "duration": 239609000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 353805700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 7134900,
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
  "duration": 679879000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_Playlists_entries()"
});
formatter.result({
  "duration": 268066900,
  "status": "passed"
});
formatter.after({
  "duration": 579825000,
  "status": "passed"
});
formatter.before({
  "duration": 5336220600,
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
  "duration": 325046200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 341807400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 11291000,
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
  "duration": 659507600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_Playlists()"
});
formatter.result({
  "duration": 611071400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_Playlists_details()"
});
formatter.result({
  "duration": 9181900,
  "status": "passed"
});
formatter.after({
  "duration": 581518300,
  "status": "passed"
});
formatter.before({
  "duration": 5323274500,
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
  "duration": 261730600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 377958600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 20710200,
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
  "duration": 688603200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_Playlists_details()"
});
formatter.result({
  "duration": 575934900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_Playlists_entry()"
});
formatter.result({
  "duration": 632853900,
  "status": "passed"
});
formatter.after({
  "duration": 589523700,
  "status": "passed"
});
formatter.before({
  "duration": 5463709900,
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
  "duration": 241225300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 400335400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 20131400,
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
  "duration": 669301900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_Playlists_button()"
});
formatter.result({
  "duration": 574202500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_Playlists_entry()"
});
formatter.result({
  "duration": 5865900,
  "status": "passed"
});
formatter.after({
  "duration": 588413300,
  "status": "passed"
});
formatter.before({
  "duration": 5327832500,
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
  "duration": 247947100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 390915200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 5597500,
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
  "duration": 651798700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_linked_track()"
});
formatter.result({
  "duration": 615152200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_an_taken_to_that_tracks_page()"
});
formatter.result({
  "duration": 8949200,
  "status": "passed"
});
formatter.after({
  "duration": 591415900,
  "status": "passed"
});
formatter.before({
  "duration": 5346999700,
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
  "duration": 245575100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 444801400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 20811600,
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
  "duration": 308892600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_playlist()"
});
formatter.result({
  "duration": 334804600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_playlists_details_are_displayed()"
});
formatter.result({
  "duration": 8322100,
  "status": "passed"
});
formatter.after({
  "duration": 582339700,
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
  "duration": 5314891400,
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
  "duration": 242440300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 332854700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 14459700,
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
  "duration": 1009324600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_tracks_details()"
});
formatter.result({
  "duration": 651451000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_tracks_entry()"
});
formatter.result({
  "duration": 962259800,
  "status": "passed"
});
formatter.after({
  "duration": 610404800,
  "status": "passed"
});
formatter.before({
  "duration": 5325903200,
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
  "duration": 237630500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 355628500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 6885600,
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
  "duration": 667198600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_tracks_entries()"
});
formatter.result({
  "duration": 6064800,
  "status": "passed"
});
formatter.after({
  "duration": 568446700,
  "status": "passed"
});
formatter.before({
  "duration": 5328036500,
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
  "duration": 298525000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 347538200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 24432200,
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
  "duration": 659817500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_tracks()"
});
formatter.result({
  "duration": 618577700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_tracks_details()"
});
formatter.result({
  "duration": 7622700,
  "status": "passed"
});
formatter.after({
  "duration": 577508800,
  "status": "passed"
});
formatter.before({
  "duration": 5345820100,
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
  "duration": 249136700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 409814800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 23697700,
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
  "duration": 669385300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_tracks_details()"
});
formatter.result({
  "duration": 1221027700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_tracks_entry()"
});
formatter.result({
  "duration": 647216100,
  "status": "passed"
});
formatter.after({
  "duration": 585517900,
  "status": "passed"
});
formatter.before({
  "duration": 5335420800,
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
  "duration": 249759000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 335277000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 6031300,
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
  "duration": 678532800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_tracks_button()"
});
formatter.result({
  "duration": 950159400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_tracks_entry()"
});
formatter.result({
  "duration": 6282500,
  "status": "passed"
});
formatter.after({
  "duration": 595081700,
  "status": "passed"
});
formatter.before({
  "duration": 5420775800,
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
  "duration": 235671500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 360287500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 14077800,
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
  "duration": 674631800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_album_in_that_track()"
});
formatter.result({
  "duration": 939502800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_albums_page()"
});
formatter.result({
  "duration": 8715400,
  "status": "passed"
});
formatter.after({
  "duration": 582035600,
  "status": "passed"
});
formatter.before({
  "duration": 5318176700,
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
  "duration": 243136600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 346220300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 19741600,
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
  "duration": 687133900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_track()"
});
formatter.result({
  "duration": 337088900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_tracks_details_are_displayed()"
});
formatter.result({
  "duration": 8432900,
  "status": "passed"
});
formatter.after({
  "duration": 589799200,
  "status": "passed"
});
});