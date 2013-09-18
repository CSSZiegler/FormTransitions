//Form JS File
function frmAniWin_segWindows_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onClickOfFrmAniWinSeg.call(this, eventobject);
};

function addWidgetsfrmAniWin() {
    var lblHeaderWin = new kony.ui.Label({
        "id": "lblHeaderWin",
        "isVisible": true,
        "text": "Transitions",
        "skin": "sknLblHeaderwin8"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {});
    var segWindowsbox = new kony.ui.Box({
        "id": "segWindowsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segWindows = new kony.ui.SegmentedUI2({
        "id": "segWindows",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblwindows": "lblwindows"
        },
        "data": [{
            "lblwindows": "Rotate3DDual"
        }, {
            "lblwindows": "Squeeze"
        }, {
            "lblwindows": "Pop"
        }, {
            "lblwindows": "Rotate3DSingle"
        }, {
            "lblwindows": "Slide"
        }],
        "rowTemplate": segWindowsbox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "sknSeg2NormalSampleApp",
        "rowFocusSkin": "sknSeg2FocusSampleApp",
        "alternateRowSkin": "sknSeg2NormalSampleApp",
        "sectionHeaderSkin": "sknSeg2NormalSampleApp",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmAniWin_segWindows_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "containerWeight": 45
    }, {});
    var lblwindows = new kony.ui.Label({
        "id": "lblwindows",
        "isVisible": true,
        "skin": "sknLblHeader"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerWeight": 13
    }, {});
    segWindowsbox.add(
    lblwindows);
    frmAniWin.add(
    lblHeaderWin, segWindows);
};

function frmAniWinGlobals() {
    var MenuId = [];
    frmAniWin = new kony.ui.Form2({
        "id": "frmAniWin",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmAniWin
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
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["segWindows", "lblHeaderWin"]
    });
};