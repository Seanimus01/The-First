var myGame = {
  config : {
      lives: 4,
      speed : 0.2,
      actionButton: 'leftmouse',
      endTrigger : 'Trigger.End',
      screenImages : [
        {
          src:'/images/start1.png',
          id : 'mainScreen'
        },
        {
          src : '/images/lose1.png',
          id : 'loseScreen'
        },
        {
          src : '/images/win1.png',
          id : 'winScreen'
        }
      ],
      livesImage : {
        src : '/images/heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 5,
          y : 0,
          z : -20
        },
        rotation : {
          x: 0,
          y: 0,
          z: 0
        }
      }
  },

  scripts : function(){
    //TODO this is where you can add your own game logic
  }
};

function start(){
    myGame.game = new A3D.Game.Scroller(myGame.config);
    myGame.game.loadScene('/scenes/','SomethingThatisHappening.babylon',myGame.scripts);
}

document.addEventListener( "DOMContentLoaded", start, false );
