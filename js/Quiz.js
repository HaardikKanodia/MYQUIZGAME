class Quiz {
  constructor(){
    this.input = createInput("Name")
    this.title = createElement('h2')
    this.button = createButton("PLAY GAME")
  }
  hide(){
      this.input.hide();
      this.title.hide();
      this.button.hide();
  }


  play(){
    //write code here to hide question elements
        question.hide();
        Contestant.getPlayerInfo();

    //write code to change the background color here
        for (var plr in allContestants) {
              var correctAns= "2";
              if ( correctAns===allContestants[plr].answer)
                fill ("GREEN");
                else 
                fill("RED");
        }

    //write code to show a heading for showing the result of Quiz
            textSize(20);
            text("THE PERSON who has won has been highlited ");
    


    //call getContestantInfo( ) here
      if( allContestants !==undefined) {
          fill("blue");
          textSize(20);
          text("*NOTE* : Contestants who answered correct are highlighted in green colour!", 130,230);

      }
  }



getState() {
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

}
