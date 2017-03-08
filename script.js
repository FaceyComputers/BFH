
var boolean = false;
var current_set = "";
var boolean_Academics = false;
var boolean_Options = false;
var boolean_Students = false;
var boolean_Athletics = false;
var boolean_Supports = false;
var boolean_Community = false;
var ifopen_cts = false;
var ifopen_other = false;
var ifopen_fa = false;
var ifopen_off = false;
var ifopen_second = false;

function onClick() {
    if(boolean == false)
    {
    document.getElementById("fdsa").style.visibility = "visible";
    document.getElementById("fdsa").style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.overflowY = "hidden";
    document.body.style.position = "fixed";
    document.body.height = "100%";
    boolean = true;
    }else{
    document.getElementById("fdsa").style.visibility = "hidden"; 
    document.getElementById("fdsa").style.display = "none";
    document.body.style.position = "relative";
    document.body.style.overflow = "visible";
    boolean_Academics = false;
    boolean_Options = false;
    boolean_Students = false;
    boolean_Athletics = false;
    boolean_Supports = false;    
    boolean = false;
    document.getElementById("scrolldownplease").style.height = "auto";   
    boolean_Academics = false;
    }
}

function Setup()
{
    var string = document.getElementsByClassName('active')[0].innerHTML;
    var int = string.search(">");
    string = string.substr(int + 1);
    var int = string.search("<");
    string = string.substring(int, -1);
    document.title = string + " | Bev Facey Open House";
    
}

function setHeight(text)
{
    var element = document.getElementById('scrolldownplease');
    var style = window.getComputedStyle(element);
    var top = style.getPropertyValue('height');
    
    boolean_Options = false;
    boolean_Students = false;
    boolean_Athletics = false;
    boolean_Supports = false;
    boolean_Community = false;
    
    
    if(boolean_Academics == true || boolean_Options == true || boolean_Students == true || boolean_Athletics == true || boolean_Supports == true)
    {
        boolean_Academics = true;
    }
    
    if(boolean_Academics == false)
    {
    var height = window.innerHeight;
    height = height - 100;
    var string = height + "px";
    document.getElementById("scrolldownplease").style.height = string; 
    boolean_Academics = true;
    }else{
    document.getElementById("scrolldownplease").style.height = "auto";   
    boolean_Academics = false;
    }
}

function setHeightOptions()
{
    var element = document.getElementById('scrolldownplease');
    var style = window.getComputedStyle(element);
    var top = style.getPropertyValue('height');
    
    boolean_Academics = false;
    boolean_Students = false;
    boolean_Athletics = false;
    boolean_Supports = false;
    boolean_Community = false;
    
    if(boolean_Options == false)
    {
    var height = window.innerHeight;
    height = height - 100;
    var string = height + "px";
    document.getElementById("scrolldownplease").style.height = string; 
    boolean_Options = true;
    }else{
    document.getElementById("scrolldownplease").style.height = "auto";   
    boolean_Options = false;
    }
}

function setHeightStudent()
{
    var element = document.getElementById('scrolldownplease');
    var style = window.getComputedStyle(element);
    var top = style.getPropertyValue('height');
    
    boolean_Academics = false;
    boolean_Options = false;
    boolean_Athletics = false;
    boolean_Supports = false;
    boolean_Community = false;
    
    if(boolean_Students == false)
    {
    var height = window.innerHeight;
    height = height - 100;
    var string = height + "px";
    document.getElementById("scrolldownplease").style.height = string; 
    boolean_Students = true;
    }else{
    document.getElementById("scrolldownplease").style.height = "auto";   
    boolean_Students = false;
    }
}

$(document).bind('mobileinit', function(){ 
    $.mobile.metaViewportContent = 'width=device-width'; 
}); 

/*$(document).bind('mobileinit', function(){ 
    $.mobile.metaViewportContent = 'width=device-width, minimum-scale=1, maximum-scale=2'; 
});

function setHeightAthletics()
{
    var element = document.getElementById('scrolldownplease');
    var style = window.getComputedStyle(element);
    var top = style.getPropertyValue('height');
    
    boolean_Academics = false;
    boolean_Options = false;
    boolean_Students = false;
    boolean_Supports = false;
    boolean_Community = false;
    
    if(boolean_Athletics == false)
    {
    var height = window.innerHeight;
    height = height - 100;
    var string = height + "px";
    document.getElementById("scrolldownplease").style.height = string; 
    boolean_Athletics = true;
    }else{
    document.getElementById("scrolldownplease").style.height = "auto";   
    boolean_Athletics = false;
    }
}

function setHeightSupports()
{
    var element = document.getElementById('scrolldownplease');
    var style = window.getComputedStyle(element);
    var top = style.getPropertyValue('height');
    
    boolean_Academics = false;
    boolean_Options = false;
    boolean_Students = false;
    boolean_Athletics = false;
    boolean_Community = false;
    
    if(boolean_Supports == false)
    {
    var height = window.innerHeight;
    height = height - 100;
    var string = height + "px";
    document.getElementById("scrolldownplease").style.height = string; 
    boolean_Supports = true;
    }else{
    document.getElementById("scrolldownplease").style.height = "auto";   
    boolean_Supports = false;
    }
}

function setHeightCommunity()
{
    var element = document.getElementById('scrolldownplease');
    var style = window.getComputedStyle(element);
    var top = style.getPropertyValue('height');
    
    boolean_Academics = false;
    boolean_Options = false;
    boolean_Students = false;
    boolean_Athletics = false;
    boolean_Supports = false;
    
    if(boolean_Community == false)
    {
    var height = window.innerHeight;
    height = height - 100;
    var string = height + "px";
    document.getElementById("scrolldownplease").style.height = string; 
    boolean_Community = true;
    }else{
    document.getElementById("scrolldownplease").style.height = "auto";   
    boolean_Community = false;
    }
}

$(function () {

    $('.notClose-cts').on('click', 'a', function (e) {
    event.stopPropagation();
        
        $(".thirds-cts").hide();
        $(".thirds-other").hide();
        $(".thirds-fa").hide();
        $(".thirds-off").hide();
        $(".thirds-second").hide();
        if(ifopen_cts == true || ifopen_other == true || ifopen_fa == true || ifopen_off == true || ifopen_second == true)
        {
        ifopen_other = false;
        ifopen_fa = false;
        ifopen_off = false;
        ifopen_second = false;
        }

    if(ifopen_cts == false)
    {
        $( this ).parents(".dropdown-submenus").addClass("open"); 
        $(".thirds-cts").show();
        ifopen_cts = true;
    }else{
        $( this ).find(".dropdown-submenus").removeClass("open");  
        $(".thirds-cts").hide();
        ifopen_cts = false;
    }
        
    });
});

$(function () {

    $('.notClose-other').on('click', 'a', function (e) {
    event.stopPropagation();
        
        $(".thirds-cts").hide();
        $(".thirds-other").hide();
        $(".thirds-fa").hide();
        $(".thirds-off").hide();
        $(".thirds-second").hide();
        if(ifopen_cts == true || ifopen_other == true || ifopen_fa == true || ifopen_off == true || ifopen_second == true)
        {
        ifopen_cts = false;
        ifopen_fa = false;
        ifopen_off = false;
        ifopen_second = false;
        }
        
        var target = this.hash,
             $target = $(target);

    if(ifopen_other == false)
    {
        $( this ).parents(".dropdown-submenus").addClass("open"); 
        $(".thirds-other").show();
        ifopen_other = true;
    }else{
        $( this ).find(".dropdown-submenus").removeClass("open");  
        $(".thirds-other").hide();
        ifopen_other = false;
    }
    });

});

$(function () {

    $('.notClose-fa').on('click', 'a', function (e) {
    event.stopPropagation();
        
        $(".thirds-cts").hide();
        $(".thirds-other").hide();
        $(".thirds-fa").hide();
        $(".thirds-off").hide();
        $(".thirds-second").hide();
        if(ifopen_cts == true || ifopen_other == true || ifopen_fa == true || ifopen_off == true || ifopen_second == true)
        {
        ifopen_cts = false;
        ifopen_other = false;
        ifopen_off = false;
        ifopen_second = false;
        }
        
    if(ifopen_fa == false)
    {
        $( this ).parents(".dropdown-submenus").addClass("open"); 
        $(".thirds-fa").show();
        ifopen_fa = true;
    }else{
        $( this ).find(".dropdown-submenus").removeClass("open");  
        $(".thirds-fa").hide();
        ifopen_fa = false;
    }
    });

});

$(function () {

    $('.notClose-off').on('click', 'a', function (e) {
    event.stopPropagation();
        
        $(".thirds-cts").hide();
        $(".thirds-other").hide();
        $(".thirds-fa").hide();
        $(".thirds-off").hide();
        $(".thirds-second").hide();
        
        if(ifopen_cts == true || ifopen_other == true || ifopen_fa == true || ifopen_off == true || ifopen_second == true)
        {
        ifopen_cts = false;
        ifopen_other = false;
        ifopen_fa = false;
        ifopen_second = false;
        }
        
    if(ifopen_off == false)
    {
        $( this ).parents(".dropdown-submenus").addClass("open"); 
        $(".thirds-off").show();
        ifopen_off = true;
    }else{
        $( this ).find(".dropdown-submenus").removeClass("open");  
        $(".thirds-off").hide();
        ifopen_off = false;
    }
    });

});

$(function () {

    $('.notClose-second').on('click', 'a', function (e) {
    event.stopPropagation();
        
        $(".thirds-cts").hide();
        $(".thirds-other").hide();
        $(".thirds-fa").hide();
        $(".thirds-off").hide();
        $(".thirds-second").hide();
        if(ifopen_cts == true || ifopen_other == true || ifopen_fa == true || ifopen_off == true || ifopen_second == true)
        {
        ifopen_cts = false;
        ifopen_other = false;
        ifopen_fa = false;
        ifopen_off = false;
        }
        
    if(ifopen_second == false)
    {
        $( this ).parents(".dropdown-submenus").addClass("open"); 
        $(".thirds-second").show();
        ifopen_second = true;
    }else{
        $( this ).find(".dropdown-submenus").removeClass("open");  
        $(".thirds-second").hide();
        ifopen_second = false;
    }
    });

});
