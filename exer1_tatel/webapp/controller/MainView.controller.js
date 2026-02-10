sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.training.exer1tatel.controller.MainView", {
        onInit() {
        },

        onAddItem: function () {
            // this.fnDisplayMsg("Add button pressed");

            // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            // var sMsg = oTextBundle.getText("addButtonMsg");
            // this.fnDisplayMsg(sMsg);

            // Instantiate the fragment

            // create dialog lazily
            if (!this.oDialog) {
                // By using loadFragment, we are adding the fragment as a dependent to the View
                // By doing so, we can use the functions inside the view's controller
                this.oDialog = this.loadFragment({
                    name: "com.training.exer1tatel.fragment.ProductDialog"
                });
            }
            this.oDialog.then(function (oDialog) {
                oDialog.open();
            });

        },

        onCloseDialog: function () {
            this.getView().byId("idProductDialog").close();
        },

        fnDisplayMsg: function (sMsg) {
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");

            var boolShowGcash = false;
            var boolShowCC = false;

            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var selectedMOP = "";

            // GCASH
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");

            // CC
            var oCardOwnerLabel = this.getView().byId("idLblCardOwner");
            var oCardOwnerInput = this.getView().byId("idInputCardOwner");

            var oCardNumLabel = this.getView().byId("idLblCardNum");
            var oCardNumInput = this.getView().byId("idInputCardNum");

            var oExpDateLabel = this.getView().byId("idLblExpDate");
            var oExpDateInput = this.getView().byId("idInputExpDate");

            var oCVCLabel = this.getView().byId("idLblCVC");
            var oCVCInput = this.getView().byId("idInputCVC");

            if (sSelectedKey === "GCASH") {
                // show the mobile field
                boolShowGcash = true;
                boolShowCC = false;
                selectedMOP = oTextBundle.getText("gcashTxt");

            } else if (sSelectedKey === "CC") {
                boolShowGcash = false;
                boolShowCC = true;
                selectedMOP = oTextBundle.getText("ccTxt");

            } else if (sSelectedKey === "COD") {
                boolShowGcash = false;
                boolShowCC = false;
                selectedMOP = oTextBundle.getText("codTxt");
            }

            oMobileLabel.setVisible(boolShowGcash);
            oMobileInput.setVisible(boolShowGcash);

            oCardOwnerLabel.setVisible(boolShowCC);
            oCardOwnerInput.setVisible(boolShowCC);

            oCardNumLabel.setVisible(boolShowCC);
            oCardNumInput.setVisible(boolShowCC);

            oExpDateLabel.setVisible(boolShowCC);
            oExpDateInput.setVisible(boolShowCC);

            oCVCLabel.setVisible(boolShowCC);
            oCVCInput.setVisible(boolShowCC);

            var mopMsg = oTextBundle.getText("selectedMOPMsg", [selectedMOP]);
            this.fnDisplayMsg(mopMsg);
        },

        onPressCheckout: function () {
            var oInputFName = this.getView().byId("idInptFName");
            var oInputLName = this.getView().byId("idInptLName");
            var oInputFNameValue = oInputFName.getValue();
            var oInputLNameValue = oInputLName.getValue();
            var oRouter = this.getOwnerComponent().getRouter();

            // Check if first name and last name is blank
            if (oInputFNameValue === "" || oInputLNameValue === "") {

                // set value state to Error
                oInputFName.setValueState("Error");
                oInputLName.setValueState("Error");
            } else {
                oInputFName.setValueState("None");
                oInputLName.setValueState("None");

                //Navigate to review page passing first
                oRouter.navTo("RouteReviewPage", {
                    firstName: oInputFNameValue
                });

            }

        },

    });

});

