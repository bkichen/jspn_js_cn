// JavaScript Document
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; 
  for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) 
  	x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document;
  if(d.images)
  {
	if(!d.MM_p) 
		d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; 
	for(i=0; i<a.length; i++)
    {  
	  if (a[i].indexOf("#")!=0)
	  {
		  d.MM_p[j]=new Image;
		  d.MM_p[j++].src=a[i];
	  }
	}
  }
}



function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


function MM_findObj(n, d) { //v4.01  
  var p,i,x;
  if(!d)
    d=document;
  if((p=n.indexOf("?"))>0&&parent.frames.length)
  {  
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);
  }  
  if(!(x=d[n])&&d.all)
    x=d.all[n]; 
  for (i=0;!x&&i<d.forms.length;i++)
  	x=d.forms[i][n];  
  for(i=0;!x&&d.layers&&i<d.layers.length;i++)
    x=MM_findObj(n,d.layers[i].document);  
  if(!x && d.getElementById) x=d.getElementById(n);
    return x;  
}  

function MM_showHideLayers() { //v6.0  
  var i,p,v,obj,args=MM_showHideLayers.arguments;  
  for (i=0; i<(args.length-2); i+=3)
   if ((obj=MM_findObj(args[i]))!=null)
   { 
     v=args[i+2];  
     if (obj.style) 
	 { 
	   obj=obj.style; 
	   v=(v=="show")?"visible":(v=="hide")?"hidden":v; 
	 }  
    obj.visibility=v;
   }  
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}




function changeInfoA(tdImgID)
{
	
	for(var i=1;i<=3;i++)
	{
		if(i==tdImgID)
		{
			document.getElementById("showInfoA_"+tdImgID).style.display="";
			document.getElementById("menuListA_"+tdImgID).className="textColumns_Y";
		}
		else
		{
			document.getElementById("showInfoA_"+i).style.display="none";
			document.getElementById("menuListA_"+i).className="textColumns_N";
		}
	}
}

function changeInfoB(tdImgID)
{
	
	for(var i=1;i<=4;i++)
	{
		if(i==tdImgID)
		{
			document.getElementById("showInfoB_"+tdImgID).style.display="";
			document.getElementById("menuListB_"+tdImgID).className="textColumns_Y";
		}
		else
		{
			document.getElementById("showInfoB_"+i).style.display="none";
			document.getElementById("menuListB_"+i).className="textColumns_N";
		}
	}
}


/********************************** 弹出DIV居中 开始 **********************************/
function showDiv(){
	document.getElementById('popDiv').style.display='block';
	document.getElementById('bg').style.display='block';
}
function closeDiv(){
	document.getElementById('popDiv').style.display='none';
	document.getElementById('bg').style.display='none';
}
/********************************** 弹出DIV居中 结束 **********************************/





/*
开始日：<input id="start" class="laydate-icon">
结束日：<input id="end" class="laydate-icon">
*/








