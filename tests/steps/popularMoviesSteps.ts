import {
    expect,
    Page,
    Browser,
    chromium,
    Locator,
    test,
  } from "@playwright/test";
  import { createBdd, DataTable } from "playwright-bdd";
  import BasePage from "../pages/basePage";
  import { Given, When, Then, Fixture } from "playwright-bdd/decorators";
  
  export default
  @Fixture<typeof test>("popularMoviesSteps")
  class popularMoviesSteps {
    constructor(page: Page) {
      this.page = page;
    }
  
    // -------------------------------------------------- variables --------------------------------------------------------------------
  
    private page: Page;
    private browser: Browser;
    public basePage: BasePage;
    private storedElementsTexts: Record<string, string> = {};
  
    //---------------------------------------------------- functions -------------------------------------------------------------------
  
    @Given(/^User navigate to (.+)$/)
    async navigateToPage(urlString: string): Promise<void> {
      this.browser = await chromium.launch({ headless: false });
      this.page = await this.browser.newPage();
      await this.page.goto(urlString);
      this.basePage = new BasePage(this.page);
    }
  
    
  }
  