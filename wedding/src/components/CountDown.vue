<template>
  <div>
    <p class="to-the-event">TO THE EVENT</p>
    <div class="time-count">
      <div>
        <p class="time-label">DAYS</p>
        <p id="count-days" class="time-value"></p>
      </div>
      <div>
        <p class="time-label">HOURS</p>
        <p id="count-hours" class="time-value"></p>
      </div>
      <div>
        <p class="time-label">MINUTES</p>
        <p id="count-minutes" class="time-value"></p>
      </div>
      <div>
        <p class="time-label">SECOND</p>
        <p id="count-second" class="time-value"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountDown",
  mounted() {
    // Set the date we're counting down to
    var countDownDate = new Date("May 21, 2022 09:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("count-days").innerHTML =
        days < 10 ? `0${days}` : days;
      document.getElementById("count-hours").innerHTML =
        hours < 10 ? `0${hours}` : hours;
      document.getElementById("count-minutes").innerHTML =
        minutes < 10 ? `0${minutes}` : minutes;
      document.getElementById("count-second").innerHTML =
        seconds < 10 ? `0${seconds}` : seconds;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  },
};
</script>

<style>
.to-the-event {
  padding: 7.36vh 0 4.35vh 0;
  font-family: "CaviarDreamsBold";
  font-size: 18px;
  margin: 0;
}

.time-count {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2vh;
}

.time-label {
  font-family: "CaviarDreamsBold";
  margin: 0 0 2vh 0;
  font-size: 11px;
}

.time-value {
  font-family: "MontHeavy";
  font-size: 36px;
  margin: 0;
  padding-bottom: 10vh;
}

.description-2 {
  font-family: "CaviarDreamsBold";
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: bold;
}
</style>
