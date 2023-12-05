import { Builder } from "selenium-webdriver";
import { Contact } from "../pages/Contact.page.js";
import { Common } from "../pages/Common.page.js";
import { Dashboard } from "../pages/Dashboard.page.js";
import { expect } from "chai";

describe("Contact Javan Cipta Solusi", () => {
  let driver;
  describe("Negatif Case Contact Javan Cipta Solusi", () => {
    before(async () => {
      driver = await new Builder().forBrowser("chrome").build();
      driver.manage().window().maximize();
    });
    after(async () => {
      await driver.close();
    });

    it("As a user, I can see error 500 Server Error when I track conversation using empty Tracking ID", async function () {
      await Dashboard.openDashboardPage(driver);
      await Dashboard.clickContactUs(driver);
      await Contact.clickConversationTracking(driver);
      await Contact.clickButtonTrack(driver);
      await Common.wait(driver, 5000);

      // assertion
      const error500 = await Contact.showError500(driver);
      expect(error500).to.be.true;
    });
  });
});
