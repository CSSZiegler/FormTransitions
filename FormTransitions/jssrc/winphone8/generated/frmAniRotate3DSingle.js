//Form JS File
function addWidgetsfrmAniRotate3DSingle() {
    frmAniRotate3DSingle.add();
};

function frmAniRotate3DSingleGlobals() {
    var MenuId = [];
    frmAniRotate3DSingle = new kony.ui.Form2({
        "id": "frmAniRotate3DSingle",
        "title": "Rotate3DSingle",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAniRotate3DSingle
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Rotate3DSingle",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Rotate3DSingle",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": []
    });
};