//Form JS File
function addWidgetsfrmAnibottomtopstyle1() {};

function frmAnibottomtopstyle1Globals() {
    var MenuId = [];
    frmAnibottomtopstyle1 = new kony.ui.Form2({
        "id": "frmAnibottomtopstyle1",
        "title": "bottom-top style1",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAnibottomtopstyle1
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