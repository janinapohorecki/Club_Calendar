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
        $('.TableTopGames').show();
        
        $('#ResidenceLife-checkbox').prop('checked', true);
        $('.ResidenceLife').show();
        
        $('#StudentLife-checkbox').prop('checked', true);
        $('.StudentLife').show();
        /* End Social */
        
        /* Start Sports */
        $('#AllSports-checkbox').prop('checked', true);
       
        $('#Soccer-checkbox').prop('checked', true);
        $('.Soccer').show();
        
        $('#Football-checkbox').prop('checked', true);
        $('.Football').show();
        
        $('#Volleyball-checkbox').prop('checked', true);
        $('.Volleyball').show();
        
        $('#Hockey-checkbox').prop('checked', true);
        $('.Hockey').show();
        
        $('#Baseball-checkbox').prop('checked', true);
        $('.Baseball').show();
        /* End Sports */
        
        /* Start Academics */
        $('#AllAcademics-checkbox').prop('checked', true);
       
        $('#AccountingClub-checkbox').prop('checked', true);
        $('.AccountingClub').show();
        
        $('#ACM-checkbox').prop('checked', true);
        $('.ACM').show();
        
        $('#GEMS-checkbox').prop('checked', true);
        $('.GEMS').show();
        
        $('#SignLanguage-checkbox').prop('checked', true);
        $('.SignLanguage').show();
        
        $('#EngineeringClub-checkbox').prop('checked', true);
        $('.EngineeringClub').show();
        /* End Academics */
        
        /* Start Religious */
        $('#AllReligious-checkbox').prop('checked', true);
       
        $('#7Thunders-checkbox').prop('checked', true);
        $('.7Thunders').show();
        
        $('#FaithLife-checkbox').prop('checked', true);
        $('.FaithLife').show();
        
        $('#MesaCatholic-checkbox').prop('checked', true);
        $('.MesaCatholic').show();
        
        $('#GrandValleyCM-checkbox').prop('checked', true);
        $('.GrandValleyCM').show();
        
        $('#YoungLife-checkbox').prop('checked', true);
        $('.YoungLife').show();
        /* End Religious */
        
        /* Start Other */
        $('#AllOther-checkbox').prop('checked', true);
       
        $('#FishWildlife-checkbox').prop('checked', true);
        $('.FishWildlife').show();
        
        $('#CMUTV-checkbox').prop('checked', true);
        $('.CMUTV').show();
        
        $('#Aggies-checkbox').prop('checked', true);
        $('.Aggies').show();
        
        $('#CircleK-checkbox').prop('checked', true);
        $('.CircleK').show();
        
        $('#Alumni-checkbox').prop('checked', true);
        $('.Alumni').show();
        /* End Other */
        
        
    
  } else {
      
      $('#AllSocial-checkbox').prop('checked', false);
        
        $('#PAC-checkbox').prop('checked', false);
        $('.PAC').hide();
    
        $('#CAB-checkbox').prop('checked', false);
        $('.CAB').hide();
        
        $('#TableTopGames-checkbox').prop('checked', false);
        $('.TableTopGames').hide();
        
        $('#ResidenceLife-checkbox').prop('checked', false);
        $('.ResidenceLife').hide();
        
        $('#StudentLife-checkbox').prop('checked', false);
        $('.StudentLife').hide();
        /* End Social */
        
        /* Start Sports */
        $('#AllSports-checkbox').prop('checked', false);
       
        $('#Soccer-checkbox').prop('checked', false);
        $('.Soccer').hide();
        
        $('#Football-checkbox').prop('checked', false);
        $('.Football').hide();
    
        $('#Volleyball-checkbox').prop('checked', false);
        $('.Volleyball').hide();
        
        $('#Hockey-checkbox').prop('checked', false);
        $('.Hockey').hide();
        
        $('#Baseball-checkbox').prop('checked', false);
        $('.Baseball').hide();
        /* End Sports */
        
        /* Start Academics */
        $('#AllAcademics-checkbox').prop('checked', false);
       
        $('#AccountingClub-checkbox').prop('checked', false);
        $('.AccountingClub').hide();
        
        $('#ACM-checkbox').prop('checked', false);
        $('.ACM').hide();
        
        $('#GEMS-checkbox').prop('checked', false);
        $('.GEMS').hide();
        
        $('#SignLanguage-checkbox').prop('checked', false);
        $('.SignLanguage').hide();
        
        $('#EngineeringClub-checkbox').prop('checked', false);
        $('.EngineeringClub').hide();
        /* End Academics */
        
        /* Start Religious */
        $('#AllReligious-checkbox').prop('checked', false);
       
        $('#7Thunders-checkbox').prop('checked', false);
        $('.7Thunders').hide();
        
        $('#FaithLife-checkbox').prop('checked', false);
        $('.FaithLife').hide();
        
        $('#MesaCatholic-checkbox').prop('checked', false);
        $('.MesaCatholic').hide();
        
        $('#GrandValleyCM-checkbox').prop('checked', false);
        $('.GrandValleyCM').hide();
        
        $('#YoungLife-checkbox').prop('checked', false);
        $('.YoungLife').hide();
        /* End Religious */
        
        /* Start Other */
        $('#AllOther-checkbox').prop('checked', false);
       
        $('#FishWildlife-checkbox').prop('checked', false);
        $('.FishWildlife').hide();
        
        $('#CMUTV-checkbox').prop('checked', false);
        $('.CMUTV').hide();
        
        $('#Aggies-checkbox').prop('checked', false);
        $('.Aggies').hide();
        
        $('#CircleK-checkbox').prop('checked', false);
        $('.CircleK').hide();
        
        $('#Alumni-checkbox').prop('checked', false);
        $('.Alumni').hide();
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
        $('.TableTopGames').show();
        
        $('#ResidenceLife-checkbox').prop('checked', true);
        $('.ResidenceLife').show();
        
        $('#StudentLife-checkbox').prop('checked', true);
        $('.StudentLife').show();
        
    
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
      
       $('#PAC-checkbox').prop('checked', false);
        $('.PAC').hide();
    
        $('#CAB-checkbox').prop('checked', false);
        $('.CAB').hide();
    
        $('#PAC-checkbox').prop('checked', false);
        $('.PAC').hide();
        
        $('#TableTopGames-checkbox').prop('checked', false);
        $('.TableTopGames').hide();
        
        $('#ResidenceLife-checkbox').prop('checked', false);
        $('.ResidenceLife').hide();
        
        $('#StudentLife-checkbox').prop('checked', false);
        $('.StudentLife').hide();
      
      
      }
  });
});
        
         /* Sports Sublist */
        $(document).ready(function(){
  $("#AllSports-checkbox").click(function(){
    if($('#AllSports-checkbox').prop('checked')){
        
       $('#AllSports-checkbox').prop('checked', true);
       
        $('#Soccer-checkbox').prop('checked', true);
        $('.Soccer').show();
        
        $('#Football-checkbox').prop('checked', true);
        $('.Football').show();
        
        $('#Volleyball-checkbox').prop('checked', true);
        $('.Volleyball').show();
        
        $('#Hockey-checkbox').prop('checked', true);
        $('.Hockey').show();
        
        $('#Baseball-checkbox').prop('checked', true);
        $('.Baseball').show();
        
    
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
      
       $('#AllSports-checkbox').prop('checked', false);
       
        $('#Soccer-checkbox').prop('checked', false);
        $('.Soccer').hide();
        
        $('#Football-checkbox').prop('checked', false);
        $('.Football').hide();
    
        $('#Volleyball-checkbox').prop('checked', false);
        $('.Volleyball').hide();
        
        $('#Hockey-checkbox').prop('checked', false);
        $('.Hockey').hide();
        
        $('#Baseball-checkbox').prop('checked', false);
        $('.Baseball').hide();
      
      
      }
  });
});
        
         /* Academic Sublist */
        $(document).ready(function(){
  $("#AllAcademics-checkbox").click(function(){
    if($('#AllAcademics-checkbox').prop('checked')){
        
       $('#AccountingClub-checkbox').prop('checked', true);
        $('.AccountingClub').show();
        
        $('#ACM-checkbox').prop('checked', true);
        $('.ACM').show();
        
        $('#GEMS-checkbox').prop('checked', true);
        $('.GEMS').show();
        
        $('#SignLanguage-checkbox').prop('checked', true);
        $('.SignLanguage').show();
        
        $('#EngineeringClub-checkbox').prop('checked', true);
        $('.EngineeringClub').show();
        
    
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
      
      $('#AllAcademics-checkbox').prop('checked', false);
      
       $('#AccountingClub-checkbox').prop('checked', false);
        $('.AccountingClub').hide();
        
        $('#ACM-checkbox').prop('checked', false);
        $('.ACM').hide();
        
        $('#GEMS-checkbox').prop('checked', false);
        $('.GEMS').hide();
        
        $('#SignLanguage-checkbox').prop('checked', false);
        $('.SignLanguage').hide();
        
        $('#EngineeringClub-checkbox').prop('checked', false);
        $('.EngineeringClub').hide();
      
      
      }
  });
});
        
        /* Religious Sublist */
        $(document).ready(function(){
  $("#AllReligious-checkbox").click(function(){
    if($('#AllReligious-checkbox').prop('checked')){
        
        $('#AllReligious-checkbox').prop('checked', true);
       
        $('#7Thunders-checkbox').prop('checked', true);
        $('.7Thunders').show();
        
        $('#FaithLife-checkbox').prop('checked', true);
        $('.FaithLife').show();
        
        $('#MesaCatholic-checkbox').prop('checked', true);
        $('.MesaCatholic').show();
        
        $('#GrandValleyCM-checkbox').prop('checked', true);
        $('.GrandValleyCM').show();
        
        $('#YoungLife-checkbox').prop('checked', true);
        $('.YoungLife').show();
        
    
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
      
      $('#AllReligious-checkbox').prop('checked', false);
       
        $('#7Thunders-checkbox').prop('checked', false);
        $('.7Thunders').hide();
        
        $('#FaithLife-checkbox').prop('checked', false);
        $('.FaithLife').hide();
        
        $('#MesaCatholic-checkbox').prop('checked', false);
        $('.MesaCatholic').hide();
        
        $('#GrandValleyCM-checkbox').prop('checked', false);
        $('.GrandValleyCM').hide();
        
        $('#YoungLife-checkbox').prop('checked', false);
        $('.YoungLife').hide();
      
      }
  });
});
        
        /* Other Sublist */
        $(document).ready(function(){
  $("#AllOther-checkbox").click(function(){
    if($('#AllOther-checkbox').prop('checked')){
        
        $('#AllOther-checkbox').prop('checked', true);
       
        $('#FishWildlife-checkbox').prop('checked', true);
        $('.FishWildlife').show();
        
        $('#CMUTV-checkbox').prop('checked', true);
        $('.CMUTV').show();
        
        $('#Aggies-checkbox').prop('checked', true);
        $('.Aggies').show();
        
        $('#CircleK-checkbox').prop('checked', true);
        $('.CircleK').show();
        
        $('#Alumni-checkbox').prop('checked', true);
        $('.Alumni').show();
        
    
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllOther-checkbox').prop('checked', false);
       
        $('#FishWildlife-checkbox').prop('checked', false);
        $('.FishWildlife').hide();
        
        $('#CMUTV-checkbox').prop('checked', false);
        $('.CMUTV').hide();
        
        $('#Aggies-checkbox').prop('checked', false);
        $('.Aggies').hide();
        
        $('#CircleK-checkbox').prop('checked', false);
        $('.CircleK').hide();
        
        $('#Alumni-checkbox').prop('checked', false);
        $('.Alumni').hide();
      
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
        
        $('.TableTopGames').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllSocial-checkbox').prop('checked', false);
        
        $('.TableTopGames').hide();
      }
  });
});
        

   $(document).ready(function(){
  $("#ResidenceLife-checkbox").click(function(){
    if($('#ResidenceLife-checkbox').prop('checked')){
        
        $('.ResidenceLife').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllSocial-checkbox').prop('checked', false);
        
        $('.ResidenceLife').hide();
      }
  });
});
        
      $(document).ready(function(){
  $("#StudentLife-checkbox").click(function(){
    if($('#StudentLife-checkbox').prop('checked')){
        
        $('.StudentLife').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllSocial-checkbox').prop('checked', false);
        
        $('.StudentLife').hide();
      }
  });
});

  
        $(document).ready(function(){
  $("#Soccer-checkbox").click(function(){
    if($('#Soccer-checkbox').prop('checked')){
        
        $('.Soccer').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllSports-checkbox').prop('checked', false);
        
        $('.Soccer').hide();
      }
  });
});
        
        $(document).ready(function(){
  $("#Football-checkbox").click(function(){
    if($('#Football-checkbox').prop('checked')){
        
        $('.Football').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllSports-checkbox').prop('checked', false);
        
        $('.Football').hide();
      }
  });
});
        
          $(document).ready(function(){
  $("#Volleyball-checkbox").click(function(){
    if($('#Volleyball-checkbox').prop('checked')){
        
        $('.Volleyball').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllSports-checkbox').prop('checked', false);
        
        $('.Volleyball').hide();
      }
  });
}); 
        $(document).ready(function(){
  $("#Hockey-checkbox").click(function(){
    if($('#Hockey-checkbox').prop('checked')){
        
        $('.Hockey').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllSports-checkbox').prop('checked', false);
        
        $('.Hockey').hide();
      }
  });
}); 
         $(document).ready(function(){
  $("#Baseball-checkbox").click(function(){
    if($('#Baseball-checkbox').prop('checked')){
        
        $('.Baseball').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllSports-checkbox').prop('checked', false);
        
        $('.Baseball').hide();
      }
  });
});   

$(document).ready(function(){
  $("#AccountingClub-checkbox").click(function(){
    if($('#AccountingClub-checkbox').prop('checked')){
        
        $('.AccountingClub').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllAcademics-checkbox').prop('checked', false);
        
      $('.AccountingClub').hide();
      }
  });
});         

 $(document).ready(function(){
  $("#ACM-checkbox").click(function(){
    if($('#ACM-checkbox').prop('checked')){
        
        $('.ACM').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllAcademics-checkbox').prop('checked', false);
        
      $('.ACM').hide();
      }
  });
}); 
       $(document).ready(function(){
  $("#GEMS-checkbox").click(function(){
    if($('#GEMS-checkbox').prop('checked')){
        
        $('.GEMS').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllAcademics-checkbox').prop('checked', false);
        
      $('.GEMS').hide();
      }
  });
}); 
        
        $(document).ready(function(){
  $("#SignLanguage-checkbox").click(function(){
    if($('#SignLanguage-checkbox').prop('checked')){
        
        $('.SignLanguage').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllAcademics-checkbox').prop('checked', false);
        
      $('.SignLanguage').hide();
      }
  });
}); 
        
          $(document).ready(function(){
  $("#EngineeringClub-checkbox").click(function(){
    if($('#EngineeringClub-checkbox').prop('checked')){
        
        $('.EngineeringClub').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllAcademics-checkbox').prop('checked', false);
        
      $('.EngineeringClub').hide();
      }
  });
}); 
        
$(document).ready(function(){
  $("#7Thunders-checkbox").click(function(){
    if($('#7Thunders-checkbox').prop('checked')){
        
        $('.7Thunders').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllReligious-checkbox').prop('checked', false);
        
      $('.7Thunders').hide();
      }
  });
}); 
        
$(document).ready(function(){
  $("#FaithLife-checkbox").click(function(){
    if($('#FaithLife-checkbox').prop('checked')){
        
        $('.FaithLife').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllReligious-checkbox').prop('checked', false);
        
      $('.FaithLife').hide();
      }
  });
});
       $(document).ready(function(){
  $("#GrandValleyCM-checkbox").click(function(){
    if($('#GrandValleyCM-checkbox').prop('checked')){
        
        $('.GrandValleyCM').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllReligious-checkbox').prop('checked', false);
        
      $('.GrandValleyCM').hide();
      }
  });
});
         $(document).ready(function(){
  $("#MesaCatholic-checkbox").click(function(){
    if($('#MesaCatholic-checkbox').prop('checked')){
        
        $('.MesaCatholic').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllReligious-checkbox').prop('checked', false);
        
      $('.MesaCatholic').hide();
      }
  });
});
        $(document).ready(function(){
  $("#YoungLife-checkbox").click(function(){
    if($('#YoungLife-checkbox').prop('checked')){
        
        $('.YoungLife').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllReligious-checkbox').prop('checked', false);
        
      $('.YoungLife').hide();
      }
  });
}); 

$(document).ready(function(){
  $("#FishWildlife-checkbox").click(function(){
    if($('#FishWildlife-checkbox').prop('checked')){
        
        $('.FishWildlife').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllOther-checkbox').prop('checked', false);
        
      $('.FishWildlife').hide();
      }
  });
});
        $(document).ready(function(){
  $("#CMUTV-checkbox").click(function(){
    if($('#CMUTV-checkbox').prop('checked')){
        
        $('.CMUTV').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllOther-checkbox').prop('checked', false);
        
      $('.CMUTV').hide();
      }
  });
});

       $(document).ready(function(){
  $("#Aggies-checkbox").click(function(){
    if($('#Aggies-checkbox').prop('checked')){
        
        $('.Aggies').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllOther-checkbox').prop('checked', false);
        
      $('.Aggies').hide();
      }
  });
});

          $(document).ready(function(){
  $("#CircleK-checkbox").click(function(){
    if($('#CircleK-checkbox').prop('checked')){
        
        $('.CircleK').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllOther-checkbox').prop('checked', false);
        
      $('.CircleK').hide();
      }
  });
});  
    
         $(document).ready(function(){
  $("#Alumni-checkbox").click(function(){
    if($('#Alumni-checkbox').prop('checked')){
        
        $('.Alumni').show();
        
  } else {
      $('#AllEvents-checkbox').prop('checked', false);
     
      $('#AllOther-checkbox').prop('checked', false);
        
      $('.Alumni').hide();
      }
  }); 
});  