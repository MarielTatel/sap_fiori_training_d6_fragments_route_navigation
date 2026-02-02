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

            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
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
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptLName").getValue();

            // Check if first name is blank
            if (oInputFNameValue === "" && oInputLNameValue === "") {
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = oTextBundle.getText("missingFldMsg");
                sap.m.MessageToast.show(sMsg);
            }
        },

    });

});

