class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow")

    //write code to show a heading for showing the result of Quiz
    text("this is the result",20,200)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
     if(allContestants!=undefined){
    var y = 250
      for(var i in allContestants){
        if(allContestants[i].answer==="2"){
          fill ("green")




        }
        else{
      fill ("red")
     
         
        }
        text(allContestants[i].name+"--"+allContestants[i].answer,50,y)
   y = y+20;

    }


     }
    //write code to add a note here
  
    //write code to highlight contest who answered correctly
    
  }

}
