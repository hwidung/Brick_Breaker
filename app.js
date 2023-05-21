import { gameManager } from "./gameManager.js";
import {Start} from "./start.js";

class App {
    constructor() {
        // test call
        console.log("App Loaded");
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.init();
        this.gm = null;
        this.inGame(1);
    }
    /*
    Author : 윤찬규
    Date : 2023-05-12
    Description: 초기화 함수

    맨 처음 한 번 실행시키는 함수입니다.
    */
    init() {
        // test call
        console.log("initialize complete");
    }

    /*
    Author : 윤찬규
    Date : 2023-05-12
    Description : 인게임 함수

    게임 플레이의 전제를 관장합니다.
    */
    inGame(difficulty) {
        this.gm = new gameManager(this.ctx, difficulty);

        this.gm.startGame();

        // test call
        console.log("inGame complete")
    }

    /*
    Author : 조휘원
    Date : 2023-05-20
    Description : 환경설정

    background change & level change
    */
    bindEventHandlers() {
        $("input[name='bgd']").change(() => {
          const selectedBackground = $("input[name='bgd']:checked").val();
          if (selectedBackground === "bgd1") {
            this.canvas.style.backgroundImage = "url('./images/In-Game/background1.jpg')";
          } else if (selectedBackground === "bgd2") {
            this.canvas.style.backgroundImage = "url('./images/In-Game/background2.jpg')";
          }
        });
    
        $("#level_1").click(() => {
          this.inGame(1); // 초급 난이도
        });
    
        $("#level_2").click(() => {
          this.inGame(2); // 중급 난이도
        });
    
        $("#level_3").click(() => {
          this.inGame(3); // 고급 난이도
        });
    }

}   

window.onload = () => {
    new App();
    new Start();
}