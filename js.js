$(document).ready(function () {
  let interval;
  let minutes = 25;
  let seconds = 0;

  /* Inside the callback function, we check if the seconds variable is 0. If so, it means a minute has passed and we need to decrement the minutes variable. If the minutes variable is also 0, it means the timer has reached 0 and we stop the timer, play the notification sound, and return from the callback function.

If the seconds variable is not 0, we simply decrement the seconds variable. */

  function startTimer() {
    interval = setInterval(function () {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          $("#notification")[0].play();
          return;
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }

      /* After updating the minutes and seconds, we update the corresponding HTML elements with the new values using jQuery's text() function. We also add leading zeros to the values if they are less than 10. */

      $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
      $("#seconds").text(seconds < 10 ? "0" + seconds : seconds);
    }, 1000);
  }

  function resetTimer() {
    clearInterval(interval);
    minutes = parseInt($("#timer-length").val(), 10);
    seconds = 0;
    $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
    $("#seconds").text("00");
  }

  $("#start").click(startTimer);
  $("#reset").click(resetTimer);
});
