
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays a div with class="bot-card outline"', async () => {
    await driver.findElement(By.id('draw')).click()
    driver.sleep(1500)
    const choices = await driver.findElement(By.css('bot-card outline'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Add to duo button displays a div with class="bot-card outline', async () => {
    await driver.findElement(By.css('bot-btn')).click
    driver.sleep(1500)
    const playerDuo = await driver.findElement(By.css('bot-card outline'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})