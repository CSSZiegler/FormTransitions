//Form JS File
function addWidgetsfrmAniFourSplitOut() {};

function frmAniFourSplitOutGlobals() {
    var MenuId = [];
    frmAniFourSplitOut = new kony.ui.Form2({
        "id": "frmAniFourSplitOut",
        "title": "FourSplitOut",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAniFourSplitOut
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