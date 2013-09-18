//Form JS File
function addWidgetsfrmAnitoleft() {};

function frmAnitoleftGlobals() {
    var MenuId = [];
    frmAnitoleft = new kony.ui.Form2({
        "id": "frmAnitoleft",
        "title": "to left",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAnitoleft
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
            "formAnimation": 5
        },
        "outTransitionConfig": {
            "formAnimation": 5
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};