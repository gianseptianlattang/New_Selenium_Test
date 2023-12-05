import { By, until } from "selenium-webdriver";

export const Dashboard = {
  openDashboardPage: async (driver) => {
    await driver.get(`https://javan.co.id/`);
    await driver.wait(
      until.elementLocated(By.css(`span.block.xl\\:inline`)),
      10000
    );
  },

  clickContactUs: async (driver) => {
    await driver
      .findElement(By.css(`a[href='/contact'].text-base.text-white`))
      .click();
    await driver.wait(
      until.elementLocated(By.css(`a#tracking-btn.text-blue-500.font-bold`)),
      10000
    );
    await driver.sleep(1000);
  },
};
