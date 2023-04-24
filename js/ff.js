/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '857192ea00mshc49d22edeb2ed71p11c622jsne9582958efcc',
		'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
	}
};

fetch('https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=2018-12-01&federation=UEFA', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '857192ea00mshc49d22edeb2ed71p11c622jsne9582958efcc',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

*/
fetch('./js/data.json')
.then((response) => response.json())
.then((json) => {
  

  
  let standingst = json.matches;
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
          <a href="www.google.com" >   <div class="hoverd">
            
            <i class="fa-solid fa-circle-play "></i>
         
          </div> </a>
          <div class="card-body text-center m-1">
            <div class="row">
              <div class="col-4 p-0">
                <img class="match1" src="${tbj.homeTeam.crest}" atl="${tbj.homeTeam.tla}">
                ${tbj.homeTeam.name}
              </div>
              <div class="col-4 p-0">
                <span class="dateing">${dateString}</span>
                <br /><br />
              
             ${statust} 
                
               
             
      
              
            
      
              </div>
              <div class="col-4 p-0">
              ${tbj.awayTeam.name}
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
