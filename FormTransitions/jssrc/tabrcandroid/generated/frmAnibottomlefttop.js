//Form JS File
function addWidgetsfrmAnibottomlefttop() {};

function frmAnibottomlefttopGlobals() {
    var MenuId = [];
    frmAnibottomlefttop = new kony.ui.Form2({
        "id": "frmAnibottomlefttop",
        "title": "bottomleft-top",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAnibottomlefttop
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
            "formAnimation": 8
        },
        "outTransitionConfig": {
            "formAnimation": 8
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};