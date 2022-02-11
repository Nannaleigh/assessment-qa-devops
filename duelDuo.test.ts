
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});

// Check that clicking the Draw button displays the div with id = “choices”
test("Check that clicking the Draw button displays the div with id = choices", async () => {
    //find draw button and then click it
    await driver.findElement(By.id("draw")).click();
    //wait 2 seconds
    await driver.sleep(3000);
    //find choices
    const getChoices = await driver.findElement(By.id("choices"));
    //choices displayed
    const displayChoices = await getChoices.isDisplayed();
    //epect the choices displayed to be true
    expect(displayChoices).toBe(true);
  });