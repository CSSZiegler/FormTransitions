//Form JS File
function addWidgetsfrmAnitoprightbottom() {};

function frmAnitoprightbottomGlobals() {
    var MenuId = [];
    frmAnitoprightbottom = new kony.ui.Form2({
        "id": "frmAnitoprightbottom",
        "title": "topright-bottom",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAnitoprightbottom
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
            "formAnimation": 7
        },
        "outTransitionConfig": {
            "formAnimation": 7
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};