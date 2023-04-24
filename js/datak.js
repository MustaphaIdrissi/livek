const token = "bfe61f4d4a954c3eb20c5731c9e5c667"
let baseurl = "https://proxy.cors.sh/https://api.football-data.org/v4"


function getStandings() {
 


  const url = baseurl + "/matches/"
try{
  axios.get(url, {
    headers: {
      "X-Auth-Token": `${token}`

  }
  })


      .then((response) => {


       

    
    let standingst = response.data.matches;
    let standContentt = ``
    let rt = ""

    document.getElementById("bodymatch").innerHTML = " ";




    for (tbj of standingst) {
      const matchTime = new Date(tbj.utcDate);
      var utc=matchTime.getTime()+(matchTime.getTimezoneOffset()*60000);
		var nd=new Date(utc+(3600000*1));
    var mint=nd.getMinutes();
    if(nd.getMinutes()<10){
      mint="0"+nd.getMinutes();
    }
      const dateStringt = nd.getHours()+":"+mint;

      const dateString = dateStringt;
      
      var statust ="" ;

      if(tbj.status=="IN_PLAY"){
       
        statust="<span class='ativenow btn btn-secondary'>جارية الآن </span> "
      }else if(tbj.status=="TIMED"){

        statust="<span class='btn btn-secondary'>لم تبدا بعد </span> "
      }

    else if(tbj.status=="PAUSED"){

      statust="<span class='btn btn-secondary'> المبارة متوقفة</span> "
    }
    else if(tbj.status=="POSTPONED"){

      statust="<span class='btn btn-secondary'> المبارة مؤجل</span> "
    }
    else if(tbj.status=="SUSPENDED"){

      statust="<span class='btn btn-secondary'> المبارة معلق</span> "
    }
    else if(tbj.status=="FINISHED"){

      statust="<span class='btn btn-secondary'>انتهت المبارة </span> "
    }
    else if(tbj.status=="CANCELLED"){

      statust="<span class='btn btn-secondary'>ألغيت المبارة </span> "
    }
   
      
      standContentt += ` <div class="card match m-2">
            <a href="match.html" >   <div class="hoverd">
              
              <i class="fa-solid fa-circle-play "></i>
           
            </div> </a>
            <div class="card-body text-center m-1" style="height: 60px;">
              <div class="row">
                <div class="col-4 p-0">
                  <img class="match1" src="${tbj.homeTeam.crest}" atl="${tbj.homeTeam.tla}">
                  <span>${tbj.homeTeam.name}</span>
                </div>
                <div class="col-4 p-0">
                  <span class="dateing">${dateString}</span>
                  <br />
                
               ${statust} 
                  
                 
               
        
                
              
        
                </div>
                <div class="col-4 p-0">
               <span> ${tbj.awayTeam.name}</span>
                  <img class="match2" src="${tbj.awayTeam.crest}" atl="${tbj.awayTeam.tla}">
  
                </div>
              </div>
            </div>
            <div class="card-footer text-center">
              <div class="row">
                <div class="col-4 p-0">
                  <i class="fa-solid fa-microphone"></i> <span> mohamed hilali</span>
                </div>
                <div class="col-4 p-0">
                  <i class="fa-solid fa-tv"></i><span> bien sport hd 1</span>
                </div>
                <div class="col-4 p-0">
                  <i class="fa-solid fa-trophy"></i> <span>  ${tbj.competition.name} </span>
                </div>
              </div>
            </div>
          </div>
  `
    }








    document.getElementById("bodymatch").innerHTML += standContentt;







      });
    }catch(ex){
      console.log(ex.message);
    }
}




getStandings();




tomorow();
function tomorow(){
  const d1=new Date();
  let d3=new Date(d1);
  let d2=d3.getFullYear()+'-'+(d3.getMonth()+1)+'-'+(d3.getDate()-1);
  let d4=d3.getFullYear()+'-'+(d3.getMonth()+1)+'-'+(d3.getDate()+2);
  //console.log(d2);

  const urlL =  baseurl +"/matches?dateFrom="+d2+"&dateTo="+d4;
  try{


   

    axios.get(urlL, {
      headers: {
        "X-Auth-Token": `${token}`,
         "X-Unfold-Goals": 'true'
    }
    })
  
  
        .then((response) => {

          console.log(response);
        });


      }catch(ex){
        console.log(ex.message);
      }


}