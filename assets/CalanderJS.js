function toggleSidebar() {
    "use strict";
    document.getElementById("sidebar").classList.toggle('active');
}

//document.getElementById("Social-Drop").onclick = function() {SocialDropFun()};

      $(document).ready(function(){
  $("#AllEvents-checkbox").click(function(){
    if($('#AllEvents-checkbox').prop('checked')){
        /* Start Social */
        $('#AllSocial-checkbox').prop('checked', true);

        $('#PAC-checkbox').prop('checked', true);
        $('.PAC').show();

        $('#CAB-checkbox').prop('checked', true);
        $('.CAB').show();

        $('#PAC-checkbox').prop('checked', true);
        $('.PAC').show();

        $('#TableTopGames-checkbox').prop('checked', true);
        $('.TableTopGames-EVENTS').show();

        $('#ResidenceLife-checkbox').prop('checked', true);
        $('.ResidenceLife-EVENTS').show();

        $('#StudentLife-checkbox').prop('checked', true);
        $('.StudentLife-EVENTS').show();
        /* End Social */

        /* Start Sports */
        $('#AllSports-checkbox').prop('checked', true);

        $('#Soccer-checkbox').prop('checked', true);
        $('.Soccer-EVENTS').show();

        $('#Football-checkbox').prop('checked', true);
        $('.Football-EVENTS').show();

        $('#Volleyball-checkbox').prop('checked', true);
        $('.Volleyball-EVENTS').show();

        $('#Hockey-checkbox').prop('checked', true);
        $('.Hockey-EVENTS').show();

        $('#Baseball-checkbox').prop('checked', true);
        $('.Baseball-EVENTS').show();
        /* End Sports */

        /* Start Academics */
        $('#AllAcademics-checkbox').prop('checked', true);

        $('#AccountingClub-checkbox').prop('checked', true);
        $('.AccountingClub-EVENTS').show();

        $('#ACM-checkbox').prop('checked', true);
        $('.ACM-EVENTS').show();

        $('#GEMS-checkbox').prop('checked', true);
        $('.GEMS-EVENTS').show();

        $('#SignLanguage-checkbox').prop('checked', true);
        $('.SignLanguage-EVENTS').show();

        $('#EngineeringClub-checkbox').prop('checked', true);
        $('.EngineeringClub-EVENTS').show();
        /* End Academics */

        /* Start Religious */
        $('#AllReligious-checkbox').prop('checked', true);

        $('#7Thunders-checkbox').prop('checked', true);
        $('.7Thunders-EVENTS').show();

        $('#FaithLife-checkbox').prop('checked', true);
        $('.FaithLife-EVENTS').show();

        $('#MesaCatholic-checkbox').prop('checked', true);
        $('.MesaCatholic-EVENTS').show();

        $('#GrandValleyCM-checkbox').prop('checked', true);
        $('.GrandValleyCM-EVENTS').show();

        $('#YoungLife-checkbox').prop('checked', true);
        $('.YoungLife-EVENTS').show();
        /* End Religious */

        /* Start Other */
        $('#AllOther-checkbox').prop('checked', true);

        $('#FishWildlife-checkbox').prop('checked', true);
        $('.FishWildlife-EVENTS').show();

        $('#CMUTV-checkbox').prop('checked', true);
        $('.CMUTV-EVENTS').show();

        $('#Aggies-checkbox').prop('checked', true);
        $('.Aggies-EVENTS').show();

        $('#CircleK-checkbox').prop('checked', true);
        $('.CircleK-EVENTS').show();

        $('#Alumni-checkbox').prop('checked', true);
        $('.Alumni-EVENTS').show();
        /* End Other */



  } else {

      $('#AllSocial-checkbox').prop('checked', false);

        $('#PAC-checkbox').prop('checked', false);
        $('.PAC').hide();

        $('#CAB-checkbox').prop('checked', false);
        $('.CAB').hide();

        $('#TableTopGames-checkbox').prop('checked', false);
        $('.TableTopGames-EVENTS').hide();

        $('#ResidenceLife-checkbox').prop('checked', false);
        $('.ResidenceLife-EVENTS').hide();

        $('#StudentLife-checkbox').prop('checked', false);
        $('.StudentLife-EVENTS').hide();
        /* End Social */

        /* Start Sports */
        $('#AllSports-checkbox').prop('checked', false);

        $('#Soccer-checkbox').prop('checked', false);
        $('.Soccer-EVENTS').hide();

        $('#Football-checkbox').prop('checked', false);
        $('.Football-EVENTS').hide();

        $('#Volleyball-checkbox').prop('checked', false);
        $('.Volleyball-EVENTS').hide();

        $('#Hockey-checkbox').prop('checked', false);
        $('.Hockey-EVENTS').hide();

        $('#Baseball-checkbox').prop('checked', false);
        $('.Baseball-EVENTS').hide();
        /* End Sports */

        /* Start Academics */
        $('#AllAcademics-checkbox').prop('checked', false);

        $('#AccountingClub-checkbox').prop('checked', false);
        $('.AccountingClub-EVENTS').hide();

        $('#ACM-checkbox').prop('checked', false);
        $('.ACM-EVENTS').hide();

        $('#GEMS-checkbox').prop('checked', false);
        $('.GEMS-EVENTS').hide();

        $('#SignLanguage-checkbox').prop('checked', false);
        $('.SignLanguage-EVENTS').hide();

        $('#EngineeringClub-checkbox').prop('checked', false);
        $('.EngineeringClub-EVENTS').hide();
        /* End Academics */

        /* Start Religious */
        $('#AllReligious-checkbox').prop('checked', false);

        $('#7Thunders-checkbox').prop('checked', false);
        $('.7Thunders-EVENTS').hide();

        $('#FaithLife-checkbox').prop('checked', false);
        $('.FaithLife-EVENTS').hide();

        $('#MesaCatholic-checkbox').prop('checked', false);
        $('.MesaCatholic-EVENTS').hide();

        $('#GrandValleyCM-checkbox').prop('checked', false);
        $('.GrandValleyCM-EVENTS').hide();

        $('#YoungLife-checkbox').prop('checked', false);
        $('.YoungLife-EVENTS').hide();
        /* End Religious */

        /* Start Other */
        $('#AllOther-checkbox').prop('checked', false);

        $('#FishWildlife-checkbox').prop('checked', false);
        $('.FishWildlife-EVENTS').hide();

        $('#CMUTV-checkbox').prop('checked', false);
        $('.CMUTV-EVENTS').hide();

        $('#Aggies-checkbox').prop('checked', false);
        $('.Aggies-EVENTS').hide();

        $('#CircleK-checkbox').prop('checked', false);
        $('.CircleK-EVENTS').hide();

        $('#Alumni-checkbox').prop('checked', false);
        $('.Alumni-EVENTS').hide();
        /* End Other */

      }
  });
});

/* End All Check Functionalities */

/* Start Sublist Check Functionalities */
        /* Social Sublist */
        $(document).ready(function(){
  $("#AllSocial-checkbox").click(function(){
    if($('#AllSocial-checkbox').prop('checked')){

        $('#PAC-checkbox').prop('checked', true);
        $('.PAC').show();

        $('#CAB-checkbox').prop('checked', true);
        $('.CAB').show();

        $('#PAC-checkbox').prop('checked', true);
        $('.PAC').show();

        $('#TableTopGames-checkbox').prop('checked', true);
        $('.TableTopGames-EVENTS').show();

        $('#ResidenceLife-checkbox').prop('checked', true);
        $('.ResidenceLife-EVENTS').show();

        $('#StudentLife-checkbox').prop('checked', true);
        $('.StudentLife-EVENTS').show();


  } else {
      $('#AllEvents-checkbox').prop('checked', false);

       $('#PAC-checkbox').prop('checked', false);
        $('.PAC').hide();

        $('#CAB-checkbox').prop('checked', false);
        $('.CAB').hide();

        $('#PAC-checkbox').prop('checked', false);
        $('.PAC').hide();

        $('#TableTopGames-checkbox').prop('checked', false);
        $('.TableTopGames-EVENTS').hide();

        $('#ResidenceLife-checkbox').prop('checked', false);
        $('.ResidenceLife-EVENTS').hide();

        $('#StudentLife-checkbox').prop('checked', false);
        $('.StudentLife-EVENTS').hide();


      }
  });
});

         /* Sports Sublist */
        $(document).ready(function(){
  $("#AllSports-checkbox").click(function(){
    if($('#AllSports-checkbox').prop('checked')){

       $('#AllSports-checkbox').prop('checked', true);

        $('#Soccer-checkbox').prop('checked', true);
        $('.Soccer-EVENTS').show();

        $('#Football-checkbox').prop('checked', true);
        $('.Football-EVENTS').show();

        $('#Volleyball-checkbox').prop('checked', true);
        $('.Volleyball-EVENTS').show();

        $('#Hockey-checkbox').prop('checked', true);
        $('.Hockey-EVENTS').show();

        $('#Baseball-checkbox').prop('checked', true);
        $('.Baseball-EVENTS').show();


  } else {
      $('#AllEvents-checkbox').prop('checked', false);

       $('#AllSports-checkbox').prop('checked', false);

        $('#Soccer-checkbox').prop('checked', false);
        $('.Soccer-EVENTS').hide();

        $('#Football-checkbox').prop('checked', false);
        $('.Football-EVENTS').hide();

        $('#Volleyball-checkbox').prop('checked', false);
        $('.Volleyball-EVENTS').hide();

        $('#Hockey-checkbox').prop('checked', false);
        $('.Hockey-EVENTS').hide();

        $('#Baseball-checkbox').prop('checked', false);
        $('.Baseball-EVENTS').hide();


      }
  });
});

         /* Academic Sublist */
        $(document).ready(function(){
  $("#AllAcademics-checkbox").click(function(){
    if($('#AllAcademics-checkbox').prop('checked')){

       $('#AccountingClub-checkbox').prop('checked', true);
        $('.AccountingClub-EVENTS').show();

        $('#ACM-checkbox').prop('checked', true);
        $('.ACM-EVENTS').show();

        $('#GEMS-checkbox').prop('checked', true);
        $('.GEMS-EVENTS').show();

        $('#SignLanguage-checkbox').prop('checked', true);
        $('.SignLanguage-EVENTS').show();

        $('#EngineeringClub-checkbox').prop('checked', true);
        $('.EngineeringClub-EVENTS').show();


  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllAcademics-checkbox').prop('checked', false);

       $('#AccountingClub-checkbox').prop('checked', false);
        $('.AccountingClub-EVENTS').hide();

        $('#ACM-checkbox').prop('checked', false);
        $('.ACM-EVENTS').hide();

        $('#GEMS-checkbox').prop('checked', false);
        $('.GEMS-EVENTS').hide();

        $('#SignLanguage-checkbox').prop('checked', false);
        $('.SignLanguage-EVENTS').hide();

        $('#EngineeringClub-checkbox').prop('checked', false);
        $('.EngineeringClub-EVENTS').hide();


      }
  });
});

        /* Religious Sublist */
        $(document).ready(function(){
  $("#AllReligious-checkbox").click(function(){
    if($('#AllReligious-checkbox').prop('checked')){

        $('#AllReligious-checkbox').prop('checked', true);

        $('#7Thunders-checkbox').prop('checked', true);
        $('.7Thunders-EVENTS').show();

        $('#FaithLife-checkbox').prop('checked', true);
        $('.FaithLife-EVENTS').show();

        $('#MesaCatholic-checkbox').prop('checked', true);
        $('.MesaCatholic-EVENTS').show();

        $('#GrandValleyCM-checkbox').prop('checked', true);
        $('.GrandValleyCM-EVENTS').show();

        $('#YoungLife-checkbox').prop('checked', true);
        $('.YoungLife-EVENTS').show();


  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllReligious-checkbox').prop('checked', false);

        $('#7Thunders-checkbox').prop('checked', false);
        $('.7Thunders-EVENTS').hide();

        $('#FaithLife-checkbox').prop('checked', false);
        $('.FaithLife-EVENTS').hide();

        $('#MesaCatholic-checkbox').prop('checked', false);
        $('.MesaCatholic-EVENTS').hide();

        $('#GrandValleyCM-checkbox').prop('checked', false);
        $('.GrandValleyCM-EVENTS').hide();

        $('#YoungLife-checkbox').prop('checked', false);
        $('.YoungLife-EVENTS').hide();

      }
  });
});

        /* Other Sublist */
        $(document).ready(function(){
  $("#AllOther-checkbox").click(function(){
    if($('#AllOther-checkbox').prop('checked')){

        $('#AllOther-checkbox').prop('checked', true);

        $('#FishWildlife-checkbox').prop('checked', true);
        $('.FishWildlife-EVENTS').show();

        $('#CMUTV-checkbox').prop('checked', true);
        $('.CMUTV-EVENTS').show();

        $('#Aggies-checkbox').prop('checked', true);
        $('.Aggies-EVENTS').show();

        $('#CircleK-checkbox').prop('checked', true);
        $('.CircleK-EVENTS').show();

        $('#Alumni-checkbox').prop('checked', true);
        $('.Alumni-EVENTS').show();


  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllOther-checkbox').prop('checked', false);

        $('#FishWildlife-checkbox').prop('checked', false);
        $('.FishWildlife-EVENTS').hide();

        $('#CMUTV-checkbox').prop('checked', false);
        $('.CMUTV-EVENTS').hide();

        $('#Aggies-checkbox').prop('checked', false);
        $('.Aggies-EVENTS').hide();

        $('#CircleK-checkbox').prop('checked', false);
        $('.CircleK-EVENTS').hide();

        $('#Alumni-checkbox').prop('checked', false);
        $('.Alumni-EVENTS').hide();

      }
  });
});
/* End Sublist Check Functionalities */

/* Start Individual Functionalities */

/* Start Social Section */
$(document).ready(function(){
  $("#PAC-checkbox").click(function(){
    if($('#PAC-checkbox').prop('checked')){

        $('.PAC').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllSocial-checkbox').prop('checked', false);

        $('.PAC').hide();
      }
  });
});

$(document).ready(function(){
  $("#CAB-checkbox").click(function(){
    if($('#CAB-checkbox').prop('checked')){

        $('.CAB').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllSocial-checkbox').prop('checked', false);

        $('.CAB').hide();
      }
  });
});

$(document).ready(function(){
  $("#TableTopGames-checkbox").click(function(){
    if($('#TableTopGames-checkbox').prop('checked')){

        $('.TableTopGames-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllSocial-checkbox').prop('checked', false);

        $('.TableTopGames-EVENTS').hide();
      }
  });
});


   $(document).ready(function(){
  $("#ResidenceLife-checkbox").click(function(){
    if($('#ResidenceLife-checkbox').prop('checked')){

        $('.ResidenceLife-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllSocial-checkbox').prop('checked', false);

        $('.ResidenceLife-EVENTS').hide();
      }
  });
});

      $(document).ready(function(){
  $("#StudentLife-checkbox").click(function(){
    if($('#StudentLife-checkbox').prop('checked')){

        $('.StudentLife-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllSocial-checkbox').prop('checked', false);

        $('.StudentLife-EVENTS').hide();
      }
  });
});


        $(document).ready(function(){
  $("#Soccer-checkbox").click(function(){
    if($('#Soccer-checkbox').prop('checked')){

        $('.Soccer-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllSports-checkbox').prop('checked', false);

        $('.Soccer-EVENTS').hide();
      }
  });
});

        $(document).ready(function(){
  $("#Football-checkbox").click(function(){
    if($('#Football-checkbox').prop('checked')){

        $('.Football-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllSports-checkbox').prop('checked', false);

        $('.Football-EVENTS').hide();
      }
  });
});

          $(document).ready(function(){
  $("#Volleyball-checkbox").click(function(){
    if($('#Volleyball-checkbox').prop('checked')){

        $('.Volleyball-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllSports-checkbox').prop('checked', false);

        $('.Volleyball-EVENTS').hide();
      }
  });
});
        $(document).ready(function(){
  $("#Hockey-checkbox").click(function(){
    if($('#Hockey-checkbox').prop('checked')){

        $('.Hockey-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllSports-checkbox').prop('checked', false);

        $('.Hockey-EVENTS').hide();
      }
  });
});
         $(document).ready(function(){
  $("#Baseball-checkbox").click(function(){
    if($('#Baseball-checkbox').prop('checked')){

        $('.Baseball-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllSports-checkbox').prop('checked', false);

        $('.Baseball-EVENTS').hide();
      }
  });
});

$(document).ready(function(){
  $("#AccountingClub-checkbox").click(function(){
    if($('#AccountingClub-checkbox').prop('checked')){

        $('.AccountingClub-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllAcademics-checkbox').prop('checked', false);

      $('.AccountingClub-EVENTS').hide();
      }
  });
});

 $(document).ready(function(){
  $("#ACM-checkbox").click(function(){
    if($('#ACM-checkbox').prop('checked')){

        $('.ACM-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllAcademics-checkbox').prop('checked', false);

      $('.ACM-EVENTS').hide();
      }
  });
});
       $(document).ready(function(){
  $("#GEMS-checkbox").click(function(){
    if($('#GEMS-checkbox').prop('checked')){

        $('.GEMS-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllAcademics-checkbox').prop('checked', false);

      $('.GEMS-EVENTS').hide();
      }
  });
});

        $(document).ready(function(){
  $("#SignLanguage-checkbox").click(function(){
    if($('#SignLanguage-checkbox').prop('checked')){

        $('.SignLanguage-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllAcademics-checkbox').prop('checked', false);

      $('.SignLanguage-EVENTS').hide();
      }
  });
});

          $(document).ready(function(){
  $("#EngineeringClub-checkbox").click(function(){
    if($('#EngineeringClub-checkbox').prop('checked')){

        $('.EngineeringClub-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllAcademics-checkbox').prop('checked', false);

      $('.EngineeringClub-EVENTS').hide();
      }
  });
});

$(document).ready(function(){
  $("#7Thunders-checkbox").click(function(){
    if($('#7Thunders-checkbox').prop('checked')){

        $('.7Thunders-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllReligious-checkbox').prop('checked', false);

      $('.7Thunders-EVENTS').hide();
      }
  });
});

$(document).ready(function(){
  $("#FaithLife-checkbox").click(function(){
    if($('#FaithLife-checkbox').prop('checked')){

        $('.FaithLife-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllReligious-checkbox').prop('checked', false);

      $('.FaithLife-EVENTS').hide();
      }
  });
});
       $(document).ready(function(){
  $("#GrandValleyCM-checkbox").click(function(){
    if($('#GrandValleyCM-checkbox').prop('checked')){

        $('.GrandValleyCM-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllReligious-checkbox').prop('checked', false);

      $('.GrandValleyCM-EVENTS').hide();
      }
  });
});
         $(document).ready(function(){
  $("#MesaCatholic-checkbox").click(function(){
    if($('#MesaCatholic-checkbox').prop('checked')){

        $('.MesaCatholic-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllReligious-checkbox').prop('checked', false);

      $('.MesaCatholic-EVENTS').hide();
      }
  });
});
        $(document).ready(function(){
  $("#YoungLife-checkbox").click(function(){
    if($('#YoungLife-checkbox').prop('checked')){

        $('.YoungLife-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllReligious-checkbox').prop('checked', false);

      $('.YoungLife-EVENTS').hide();
      }
  });
});

$(document).ready(function(){
  $("#FishWildlife-checkbox").click(function(){
    if($('#FishWildlife-checkbox').prop('checked')){

        $('.FishWildlife-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllOther-checkbox').prop('checked', false);

      $('.FishWildlife-EVENTS').hide();
      }
  });
});
        $(document).ready(function(){
  $("#CMUTV-checkbox").click(function(){
    if($('#CMUTV-checkbox').prop('checked')){

        $('.CMUTV-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllOther-checkbox').prop('checked', false);

      $('.CMUTV-EVENTS').hide();
      }
  });
});

       $(document).ready(function(){
  $("#Aggies-checkbox").click(function(){
    if($('#Aggies-checkbox').prop('checked')){

        $('.Aggies-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllOther-checkbox').prop('checked', false);

      $('.Aggies-EVENTS').hide();
      }
  });
});

          $(document).ready(function(){
  $("#CircleK-checkbox").click(function(){
    if($('#CircleK-checkbox').prop('checked')){

        $('.CircleK-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllOther-checkbox').prop('checked', false);

      $('.CircleK-EVENTS').hide();
      }
  });
});

         $(document).ready(function(){
  $("#Alumni-checkbox").click(function(){
    if($('#Alumni-checkbox').prop('checked')){

        $('.Alumni-EVENTS').show();

  } else {
      $('#AllEvents-checkbox').prop('checked', false);

      $('#AllOther-checkbox').prop('checked', false);

      $('.Alumni-EVENTS').hide();
      }
  });
});
