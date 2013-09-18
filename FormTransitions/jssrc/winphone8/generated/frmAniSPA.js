//Form JS File
function frmAniSPA_segSPA_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onClickOfFrmAniSPASeg.call(this, eventobject);
};

function addWidgetsfrmAniSPA() {
    var segSPAbox = new kony.ui.Box({
        "id": "segSPAbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segSPA = new kony.ui.SegmentedUI2({
        "id": "segSPA",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblSPA": "lblSPA"
        },
        "data": [{
            "lblSPA": "Top "
        }, {
            "lblSPA": "Bottom "
        }, {
            "lblSPA": "Right "
        }, {
            "lblSPA": "Left "
        }],
        "rowTemplate": segSPAbox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "sknSeg2NormalSampleApp",
        "rowFocusSkin": "sknSeg2FocusSampleApp",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmAniSPA_segSPA_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [4, 0, 4, 0],
        "marginInPixel": false,
        "containerWeight": 45
    }, {});
    var lblSPA = new kony.ui.Label({
        "id": "lblSPA",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 1, 4, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "containerWeight": 13
    }, {});
    segSPAbox.add(
    lblSPA);
    frmAniSPA.add(
    segSPA);
};

function frmAniSPAGlobals() {
    var MenuId = [];
    frmAniSPA = new kony.ui.Form2({
        "id": "frmAniSPA",
        "title": "Transitions",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmAniSPA
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
        "directChildrenIDs": ["segSPA"]
    });
};