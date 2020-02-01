$(document).ready(function () {


  var typed = new Typed('#start', {
    strings: ['Loading Platform...^500 <br>` `Installing components... ^500 <br>` `Connecting to server...^500 <br>` `Hacking your system...^500 <br>` `Welcome to <p class="me">SaberHosneyDev.ME</p>^1000`'],
    typeSpeed: 50,
    backSpeed: 0,
    onComplete: (self) => {
      $('.init').css("display", "none");
      $('body').css("background", "#eee");
      $('body').css("color", "black");
      mainContent();
    }
  });

});

function mainContent () {
    var typed2 = new Typed('#content', {
      strings: ['Hello my name is Saber^500', 'I love to play LeagueOfLegends^500', 'I design websites^500', 'I make some python and c++ scripts^500', 'Iam a nice person if you get to know me'  , 'you want to ?', 'check my social media below :)'],
      typeSpeed: 50,
      backSpeed: 20
    });
}