    //dark mood
    $(document).ready(function(){
        $(".mode").click(function(){
            $("body").toggleClass("dark-mode");
            if ($("body").hasClass("dark-mode")) {
                $(this).text("Light");
                $(this).css("color","white")
            } else {
                $(this).text("Dark");
                $(this).css("color","black")
            }
        });
    });

