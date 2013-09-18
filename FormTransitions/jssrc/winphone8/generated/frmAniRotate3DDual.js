//Form JS File
function addWidgetsfrmAniRotate3DDual() {
    frmAniRotate3DDual.add();
};

function frmAniRotate3DDualGlobals() {
    var MenuId = [];
    frmAniRotate3DDual = new kony.ui.Form2({
        "id": "frmAniRotate3DDual",
        "title": "Rotate3DDual",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmKolalaImgBG",
        "addWidgets": addWidgetsfrmAniRotate3DDual
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
            "inTransition": "Rotate3DDual",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Rotate3DDual",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": []
    });
};