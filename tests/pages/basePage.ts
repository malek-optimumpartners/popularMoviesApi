import { Page,Locator } from '@playwright/test';

export default class BasePage {
    private basePage:Page;

    //static identifier -----------------
    

    //Locators ------------
    

    constructor(page:Page) {
        this.basePage=page;
        //initialize locators ---------------
        
    }
}