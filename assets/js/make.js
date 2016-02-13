user();
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 1000
    });
});

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