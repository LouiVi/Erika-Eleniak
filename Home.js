"use strict"

//Create a Home object.
function Home( path, layContent )
{
    //Get page states.
    this.IsVisible = function() { return lay.IsVisible() }
    this.IsChanged = function() { return false }
    
    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) lay.Animate("FadeIn");
        else lay.Animate( "FadeOut" );
    }
    
    this.Anim = function (text, newText)
{
		newText = newText.repeat(" ", 50);
	text.SetText(newText);
}

    //Create layout for app controls.
    var lay = app.CreateLayout( "Linear", "FillXY,VCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    //Add a logo.
	var img = app.CreateImage( "Img/Erika Eleniak.png", 0.75 );
	lay.AddChild( img );
	
	//Create a text with formatting.
    var text = "<p><font color=#4285F4><big>Welcome 'Bellacos'</big></font></p>" + 
    "I know that you have a huge load of cum for me! </p>";// + 
    //"<p>You can add links too - <a href=https://play.google.com/store>Play Store</a></p>" +
    //"<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Try swiping from the " + 
    //"left and choosing the <b>'New File'</b> option</font></p>";
    var txt = app.CreateText( text, 1, -1, "Html,Link" );
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 );
    txt.SetTextSize( 18 );
    txt.SetTextColor( "#444444" );
    lay.AddChild( txt );
}