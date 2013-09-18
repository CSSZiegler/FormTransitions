//Form JS File
function addWidgetsfrmAnifromcenter() {};

function frmAnifromcenterGlobals() {
    var MenuId = [];
    frmAnifromcenter = new kony.ui.Form2({
        "id": "frmAnifromcenter",
        "title": "from center",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAnifromcenter
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
            "formAnimation": 6
        },
        "outTransitionConfig": {
            "formAnimation": 6
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};