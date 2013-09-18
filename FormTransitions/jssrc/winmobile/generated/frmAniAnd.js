//Form JS File
function frmAniAnd_segAndroid_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onClickOfFrmAniAndSeg.call(this, eventobject);
};

function addWidgetsfrmAniAnd() {
    var segAndroidbox = new kony.ui.Box({
        "id": "segAndroidbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segAndroid = new kony.ui.SegmentedUI2({
        "id": "segAndroid",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblAndroid": "lblAndroid"
        },
        "data": [{
            "lblAndroid": "bottom-top"
        }, {
            "lblAndroid": "from left"
        }, {
            "lblAndroid": "from right"
        }, {
            "lblAndroid": "to right"
        }, {
            "lblAndroid": "to left"
        }, {
            "lblAndroid": "from center"
        }, {
            "lblAndroid": "topright-bottom"
        }, {
            "lblAndroid": "bottomleft-top"
        }, {
            "lblAndroid": "bottom-top style1"
        }],
        "rowTemplate": segAndroidbox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "sknSeg2NormalSampleApp",
        "rowFocusSkin": "sknSeg2FocusSampleApp",
        "alternateRowSkin": "sknSeg2NormalSampleApp",
        "sectionHeaderSkin": "sknSeg2HeaderSampleApp",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmAniAnd_segAndroid_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    var lblAndroid = new kony.ui.Label({
        "id": "lblAndroid",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 13
    }, {});
    segAndroidbox.add(
    lblAndroid);
    frmAniAnd.add(
    segAndroid);
};

function frmAniAndGlobals() {
    var MenuId = [];
    frmAniAnd = new kony.ui.Form2({
        "id": "frmAniAnd",
        "title": "Transitions",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmAniAnd
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["segAndroid"]
    });
};