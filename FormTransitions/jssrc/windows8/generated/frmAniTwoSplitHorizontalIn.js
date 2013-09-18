//Form JS File
function addWidgetsfrmAniTwoSplitHorizontalIn() {};

function frmAniTwoSplitHorizontalInGlobals() {
    var MenuId = [];
    frmAniTwoSplitHorizontalIn = new kony.ui.Form2({
        "id": "frmAniTwoSplitHorizontalIn",
        "title": "TwoSplitHorizontalIn",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAniTwoSplitHorizontalIn
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