user();
var b = document.body;
onload = function() {
    setTimeout(function() {
        b.className = b.className.replace(/\bis-loading\b/,'is-playing');
        setTimeout(function() {
           	b.className = b.className.replace(/\bis-playing\b/,'is-ready')
        },2500);
    },100)
};
if(navigator.userAgent.match(/(MSIE|rv:11\.0)/)) 
    b.className+=' is-ie';


function twitter (data) 
{
	$("#icons").append('<a href="https://twitter.com/' + data.user + '" class="tiny ui twitter button" target="_blank"><i class="twitter icon"></i>Twitter</a>');

}

function linkedin (data) 
{
	$("#icons").append('<a href="https://www.linkedin.com/in/aur%C3%A9lien-perrier-16989a100" alt="Aurélien PERRIER on Linkedin !" class="tiny ui linkedin button" target="_blank"><i class="linkedin icon"></i>Linkedin</a>');
}

function github (data) 
{	
	$("#icons").append('<a href="https://github.com/' + data.user + '" alt="' + data.user + ' on Github !" class="tiny ui github button" target="_blank"><i class="github icon"></i>Github</a>');
}

function perso (data) 
{
	$("#name").append(data[0].perso[0].name);
	$("#description").append(data[0].perso[0].description);

	var birthday = new Date(data[0].perso[0].old);
	var today = new Date();
	var years = today.getFullYear() - birthday.getFullYear();
	birthday.setFullYear(today.getFullYear());
	$("#adress-perso").append(data[0].perso[0].adress + ", " + years + " ans");

	$("#img").attr("src", "./assets/img/" + data[0].perso[0].img);
}

function user () 
{
	var social = new Array("github", "linkedin", "twitter");

	if ($.isArray(social)) 
	{
		$.get("./assets/data/data.json", function(data) 
		{
			perso(data.html);
			for (var i = 0; i < social.length; i++) 
			{
				switch (social[i]) 
				{
					case "github":
						github(data.api[0]);
					break;

					case "twitter":
						twitter(data.api[1]);
					break;

					case "linkedin":
						linkedin(data.api[2]);
					break;

					case "mail":
						mail(data.api[3]);
					break;

					default :
						alert("The network doesn't exist ! Sorry !");
				}
			}
		}, "json" );
	}
	else
		alert("It's not an array !");
}