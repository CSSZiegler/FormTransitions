//Form JS File
function addWidgetsfrmAnifromleft() {};

function frmAnifromleftGlobals() {
    var MenuId = [];
    frmAnifromleft = new kony.ui.Form2({
        "id": "frmAnifromleft",
        "title": "from left",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAnifromleft
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
            "formAnimation": 2
        },
        "outTransitionConfig": {
            "formAnimation": 2
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};