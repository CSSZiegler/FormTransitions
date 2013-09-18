/*****************************************************************
*	Name    : goToFrmAni
*	Author  : Kony 
*	Purpose : To navigate to 'frmAni' from the animated form for iPhone platform
******************************************************************/

function goToFrmAni()
{
	frmAni.show();
}

/*****************************************************************
*	Name    : home
*	Author  : Kony 
*	Purpose : To navigate to the different forms from home form.
******************************************************************/

function home()
{
	if(kony.os.deviceInfo().name == "blackberry" )
	{
		alert("Not available in blackberry");
	}
	else if ( kony.os.deviceInfo().name == "android")
		frmAniAnd.show();
	else if (kony.os.deviceInfo().name == "thinclient")
		frmAniSPA.show();
	else if (kony.os.deviceInfo().name == "Windows 8")
		alert("Not Applicable for windows 8");
	else frmAni.show();
}

/*****************************************************************
*	Name    : onClickOfFrmAniAndSeg
*	Author  : Kony 
*	Purpose : To navigate to the appropriate animated forms from 'frmAniAnd' .This function is meant for android platform.
******************************************************************/

function onClickOfFrmAniAndSeg(eventobj)
{
	var focIn = eventobj.selectedIndex[1];
	if(focIn==0)
		frmAnibottomtop.show();
	else if(focIn==1)
		frmAnifromleft.show();
	else if(focIn==2)
		frmAnifromright.show();
	else if (focIn==3)
		frmAnitoright.show();
	else if(focIn==4) 
		frmAnitoleft.show();
	else if(focIn==5)
		frmAnifromcenter.show();
	else if(focIn==6)
		frmAnitoprightbottom.show();
	else if(focIn==7)
		frmAnibottomlefttop.show();
	else if(focIn==8)
		frmAnibottomtopstyle1.show();
	else
	   kony.print("no form shown");
 
}

/*****************************************************************
*	Name    : onClickOfFrmAniSPASeg
*	Author  : Kony 
*	Purpose : To navigate to the appropriate animated forms for SPA platform.
******************************************************************/

function onClickOfFrmAniSPASeg(eventobj)
{
	var focIn = eventobj.selectedIndex[1];
	if(focIn==0)
		frmAnitop.show();
	else if(focIn==1)
		frmAnibottom.show();
	else if(focIn==2)
		frmAniright.show();
	else if (focIn==3)
		frmAnileft.show();
	else
	   kony.print("no form shown");
 
}

/*****************************************************************
*	Name    : onClickOfFrmAniSeg
*	Author  : Kony 
*	Purpose : To navigate to the appropriate animated forms from 'frmAni' .This function is meant for iphone platform.
******************************************************************/

function onClickOfFrmAniSeg(eventobj)
{
	var focIn = eventobj.selectedIndex[1];
	if(focIn==0)
		frmAniFlip.show();
	else if(focIn==1)
		frmAniFade.show();
	else if(focIn==2)
		frmAniMoveIn.show();
	else if (focIn==3)
		frmAniPush.show();
	else if(focIn==4) 
		frmAniReveal.show();
	else if(focIn==5)
		frmAniCurl.show();
	else if(focIn==6)
		frmAniTwoSplitHorizontalIn.show();
	else if(focIn==7)
		frmAniTwoSplitVerticalIn.show();
	else if(focIn==8)
		frmAniFourSplitIn.show();
	else if(focIn==9)
		frmAniFourSplitRotateIn.show();
	else if(focIn==10)
		frmAniTwoSplitHorizontalOut.show();
	else if(focIn==11)
		frmAniTwoSplitVerticalOut.show();
	else if(focIn==12)
		frmAniFourSplitOut.show();
	else if(focIn==13)
		frmAniFourSplitRotateOut.show();
	else if(focIn==14)
		frmAniSwitchLeft.show();
	else if(focIn==15)
		frmAniSwitchRight.show();
	else if(focIn==16)
		frmAniCloth.show();
	else if(focIn==17)
		frmAniFlipRight.show();
	else if(focIn==18)
		frmAniFlipLeft.show();
	else if(focIn==19)
		frmAniDoor.show();
	else if(focIn==20)
		frmAniRotateExchange.show();
	else if(focIn==21)
		frmAniMoveInFromBottom.show();
	else if(focIn==22)
		frmAniMoveInFromTop.show();
	else		
	   kony.print("no form shown");
 
}
