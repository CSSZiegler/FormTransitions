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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 9
        },
        "outTransitionConfig": {
            "formAnimation": 9
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};