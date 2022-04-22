$(document).ready(function() {
    $("*:not(body)").hover(
        function(event) { //call when hover
            $(this).addClass("highlight")
            event.stopPropagation();
            document.addEventListener('keydown', function(e) {
                if (e.code == 'Space' || e.code == '' || e.code == 'Unidentified') {
                    console.log("Space Down");
                    e.preventDefault();
                    speechSynthesis.speak(new SpeechSynthesisUtterance($(".highlight").text()));
                    if ($(".highlight").attr("alt")) {
                        speechSynthesis.speak(new SpeechSynthesisUtterance($(".highlight").attr("alt")));
                    } else {
                        speechSynthesis.speak(new SpeechSynthesisUtterance($(".highlight").attr("src")));
                    }
                }
            })
            document.addEventListener('keyup', function(e) {
                if (e.code == 'Space' || e.code == '' || e.code == 'Unidentified') {
                    console.log("Space Up");
                    speechSynthesis.cancel();
                }
            })
        },
        function(event) { //call when stop hover
            $(this).removeClass("highlight")
            $(".highlight").removeClass('highlight')
            speechSynthesis.cancel();
        }

    )

})