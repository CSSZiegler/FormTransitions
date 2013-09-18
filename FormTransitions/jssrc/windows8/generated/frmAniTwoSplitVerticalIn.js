//Form JS File
function addWidgetsfrmAniTwoSplitVerticalIn() {};

function frmAniTwoSplitVerticalInGlobals() {
    var MenuId = [];
    frmAniTwoSplitVerticalIn = new kony.ui.Form2({
        "id": "frmAniTwoSplitVerticalIn",
        "title": "TwoSplitVerticalIn",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAniTwoSplitVerticalIn
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "layout": constants.Vertical,
        "titleBar": true,
        "directChildrenIDs": [],
        "viewConfig": {
            "referenceHeight": 0,
            "referenceWidth": 0
        }
    });
};