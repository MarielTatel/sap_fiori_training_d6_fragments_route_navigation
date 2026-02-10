# [SAP Fiori Capability] SAPUI5 Basic Training
## DAY 6 - Fragments & Routes and Navigation Activity

*Continuation from DAY 4 - Views and Controllers Activity.*

### Fragments
* Clicking Add to Cart button, the Product Dialog will be displayed. Clicking the Close button will close the dialog.
    ![Image of the Product Dialog pop up](./images/sapui5_basic_day6_1_product_dialog.png)

<br>

* Shopping Cart fragment is reused for both the main view and review page.
    ![Image of fragment in the Main View highlighted with orange rectangle](./images/sapui5_basic_day6_2_shopping_cart_fragment_MainView.png)
    *Main View*

    <br>

    ![Image of fragment in the Review Page highlighted with orange rectangle](./images/sapui5_basic_day6_3_shopping_cart_fragment_ReviewPage.png)
    *Review Page*

<br>

### Routes and Navigation

With both First Name and Last Name filled in, clicking the Check Out button will navigate to the Review page.
![GIF of Check Out button function navigating from Main View to Review Page](./images/sapui5_basic_day6_4_checkout.gif)

<br>

In the Review Page, clicking the Back button will navigate back to the Main View with the input values still displayed.
![GIF of Back button function navigating from Review page to Main View](./images/sapui5_basic_day6_5_ReviewPage_back.gif)