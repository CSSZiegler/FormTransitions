//Form JS File
function addWidgetsfrmAniMoveInFromTop() {};

function frmAniMoveInFromTopGlobals() {
    var MenuId = [];
    frmAniMoveInFromTop = new kony.ui.Form2({
        "id": "frmAniMoveInFromTop",
        "title": "MoveInFromTop",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAniMoveInFromTop
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