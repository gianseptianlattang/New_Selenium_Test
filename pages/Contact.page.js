import { By, until } from "selenium-webdriver";

export const Contact = {
  clickConversationTracking: async (driver) => {
    await driver
      .findElement(By.css(`a#tracking-btn.text-blue-500.font-bold`))
      .click();
    await driver.wait(until.elementLocated(By.css(`span.mx-auto`)), 10000);
    await driver.sleep(1000);
  },

  clickButtonTrack: async (driver) => {
    await driver.findElement(By.css(`span.mx-auto`)).click();
    await driver.wait(
      until.elementLocated(
        By.css(`div.ml-4.text-lg.text-gray-500.uppercase.tracking-wider`)
      ),
      10000
    );
    await driver.sleep(1000);
  },

  showError500: async (driver) => {
    return await driver
      .findElement(
        By.css(`div.ml-4.text-lg.text-gray-500.uppercase.tracking-wider`)
      )
      .isDisplayed();
  },
};
