//Form JS File
function addWidgetsfrmAniTwoSplitHorizontalIn() {};

function frmAniTwoSplitHorizontalInGlobals() {
    var MenuId = [];
    frmAniTwoSplitHorizontalIn = new kony.ui.Form2({
        "id": "frmAniTwoSplitHorizontalIn",
        "title": "TwoSplitHorizontalIn",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAniTwoSplitHorizontalIn
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};