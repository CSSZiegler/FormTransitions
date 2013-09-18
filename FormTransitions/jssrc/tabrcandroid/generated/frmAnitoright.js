//Form JS File
function addWidgetsfrmAnitoright() {};

function frmAnitorightGlobals() {
    var MenuId = [];
    frmAnitoright = new kony.ui.Form2({
        "id": "frmAnitoright",
        "title": "to right",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAnitoright
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
            "formAnimation": 4
        },
        "outTransitionConfig": {
            "formAnimation": 4
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};