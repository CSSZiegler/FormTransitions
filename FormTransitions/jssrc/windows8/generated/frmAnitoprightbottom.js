//Form JS File
function addWidgetsfrmAnitoprightbottom() {};

function frmAnitoprightbottomGlobals() {
    var MenuId = [];
    frmAnitoprightbottom = new kony.ui.Form2({
        "id": "frmAnitoprightbottom",
        "title": "topright-bottom",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAnitoprightbottom
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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