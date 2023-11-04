$(document).ready(function() {
    // Function to animate the timeline events
    function animateTimeline() {
        // Get all elements with class "event"
        let events = $(".event");

        // Iterate through each event
        events.each(function(index) {
            // Get the year associated with the event
            let year = $(this).data("year");

            // Set initial styles for events (hidden)
            $(this).css({
                opacity: 0,
                transform: "translateY(20px)",
            });

            // Check if the event is within the viewport
            if ($(window).scrollTop() > $(this).offset().top - $(window).height() + 100) {
                // Use setTimeout to stagger the animations
                setTimeout(function() {
                    // Animate opacity and transform
                    $(events[index]).animate({
                        opacity: 1,
                        transform: "translateY(0)",
                    }, 800);
                }, index * 300); // Delay increases with each event
            }
        });
    }

    // Call the function to animate timeline initially
    animateTimeline();

    // Add a scroll event listener to trigger animations while scrolling
    $(window).scroll(function() {
        animateTimeline();
    });
});
