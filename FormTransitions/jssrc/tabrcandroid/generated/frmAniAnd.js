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
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmAniAnd_segAndroid_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
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
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
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