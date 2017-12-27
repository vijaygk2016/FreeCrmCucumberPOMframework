$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/laxman_kouja/Documents/05Dec/FreeCrmCucumberPOMframework/src/main/java/com/qa/feature/freecrm.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Free CRM Home Page Test",
  "description": "",
  "id": "free-crm-login-feature;validate-free-crm-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate logged in username",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 6913482873,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_Page()"
});
formatter.result({
  "duration": 20995057,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 6926784583,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_home_page_title()"
});
formatter.result({
  "duration": 4675278,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_username()"
});
formatter.result({
  "duration": 23179343,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[contains(text(),\u0027User: Laxman Koujalagi\u0027)]\"}\n  (Session info: chrome\u003d63.0.3239.84)\n  (Driver info: chromedriver\u003d2.33.506106 (8a06c39c4582fbfbab6966dbb1c38a9173bfb1a2),platform\u003dMac OS X 10.12.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027M270967DZG3QD\u0027, ip: \u0027fe80:0:0:0:18bd:32bc:9be5:849a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506106 (8a06c39c4582fbfbab6966dbb1c38a9173bfb1a2), userDataDir\u003d/var/folders/bm/t8745g9965sgwztd4qjb03d5fl90wh/T/.org.chromium.Chromium.X8AskD}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d63.0.3239.84, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bf0155742313792644319178adee11c2\n*** Element info: {Using\u003dxpath, value\u003d//td[contains(text(),\u0027User: Laxman Koujalagi\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy14.isDisplayed(Unknown Source)\n\tat com.qa.pages.HomePage.verifyCorrectUserName(HomePage.java:39)\n\tat com.qa.stepDefinitions.HomePageSteps.validate_logged_in_username(HomePageSteps.java:45)\n\tat ✽.Then validate logged in username(/Users/laxman_kouja/Documents/05Dec/FreeCrmCucumberPOMframework/src/main/java/com/qa/feature/freecrm.feature:9)\n",
  "status": "failed"
});
});