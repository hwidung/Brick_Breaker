class Start {
    constructor() {
        this.initialize();
        this.setupEventListeners();
    }

    initialize() {
        $("#background-img2").hide();
        $(".level").hide();
        $(".help-content").hide();
        $(".set-container").hide();
    }

    setupEventListeners() {
        $("#start-button").click(() => {
            this.startGame();
        });

        $(".level #back").click(() => {
            this.goBack();
        });

        $("#help-button").click(() => {
            this.showHelp();
        });

        $(".help-content #back").click(() => {
            this.goBack();
        });

        $(".button-style").hover(
            function() {
                $(this).css("background-color", "#FFA200");
                $(this).css("border-width", "8px");
            },
            function() {
                $(this).css("background-color", "");
                $(this).css("border-width", "");
            }
            );

        $("#set-button").click(()=>{
            this.showSetting();
        })
    }

    startGame() {
        $("#start-button").hide();
        $("#set-screen").hide();
        $("#help").hide();
        $("#background-img").hide();
        $("#background-img2").show();
        $(".level").show();
    }

    goBack() {
        location.reload();
    }

    showHelp() {
        $("#start-button").hide();
        $("#set-screen").hide();
        $("#help-button").hide();
        $("#background-img").hide();
        $("#background-img2").show();
        $(".help-content").show();
    }

    showSetting(){
        $("#start-button").hide();
        $("#set-button").hide();
        $("#help").hide();
        $("#background-img").hide();
        $("#background-img2").show();
        $(".set-container").show();

        // 선택한 오디오 파일 변경
        $("input[name='bgm']").change(function() {
            let selectedBGM = $("input[name='bgm']:checked").val();
            let audioElement = $("audio");
            audioElement.each(function() {
                this.pause();
                this.currentTime = 0;
            });
            if (selectedBGM !== "none") {
                let selectedAudioElement = $("#bgmAudio" + $("input[name='bgm']:checked").attr("id").substr(3));
                selectedAudioElement[0].play();
            }
        });

        // 공 색상 설정
        function colorSetting() {
            let red = $("#Red").val();
            let green = $("#Green").val();
            let blue = $("#Blue").val();
            let ballColor = `rgb(${red}, ${green}, ${blue})`;
            let canvas = document.getElementById('settingCanvas');
            let context = canvas.getContext('2d');
            context.fillStyle = ballColor;
            context.fillRect(0, 0, 50, 50);
        }

        // 공 색상 설정 이벤트 바인딩
        $("#Red, #Green, #Blue").on("input", colorSetting);
        }
}

$(document).ready(function() {
    new Start();
});
