# [SAP Fiori Capability] SAPUI5 Basic Training
## DAY 4 - Views and Controllers Activity

1. Convert the rest of our hardcoded text to i18n
    ![Image of i18n file](./images/sapui5_basic_day4_1_i18n.png)
    *Showing part of i18n file with the text*

<br>

2. Add a logic in our check out button that will check if both First Name and Last Name are blank, show an error.
    ![Image of the Main View page showing an error](./images/sapui5_basic_day4_2_btn_logic.png)
    *Upon clicking the Checkout button, if both First Name and Last Name are blank, an error message "Required field is blank" will pop up.*

<br>

3. Add another new field for Credit Card details in our form. If mode of payment is credit card, this new field is displayed.
    ![Image of part of the Main View page focusing on the Mode of Payment](./images/sapui5_basic_day4_3_dynamic_fields.png)
    *If Credit Card is chosen as Mode of Payment, additional fields will be displayed: Card Holder Name, Card Number, Expiration, and CVC.*

<br>

4. Add a logic in our event handler onChangeMOP. Show the text of the selected mode of payment in a MessageToast control. 
    ![Image of the Main View page showing that chosen MOP is in the pop up message](./images/sapui5_basic_day4_4_messageToast.png)
    *Chosen mode of payment is displayed in the MessageToast.*

<br>

5. Convert our footer from OverflowToolbar to floating toolbar
    
    *BEFORE: Overflow toolbar*
    ![Image of the Main View page overflow toolbar](./images/sapui5_basic_day4_5_overflow_toolbar.png)

    *AFTER: Floating toolbar*
    ![Image of the Main View page floating toolbar](./images/sapui5_basic_day4_5_floating_toolbar.png)

