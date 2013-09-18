//Form JS File
function addWidgetsfrmAnifromright() {};

function frmAnifromrightGlobals() {
    var MenuId = [];
    frmAnifromright = new kony.ui.Form2({
        "id": "frmAnifromright",
        "title": "from right",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAnifromright
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 3
        },
        "outTransitionConfig": {
            "formAnimation": 3
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};