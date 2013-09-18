//Form JS File
function addWidgetsfrmAniMoveInFromBottom() {};

function frmAniMoveInFromBottomGlobals() {
    var MenuId = [];
    frmAniMoveInFromBottom = new kony.ui.Form2({
        "id": "frmAniMoveInFromBottom",
        "title": "MoveInFromBottom",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAniMoveInFromBottom
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