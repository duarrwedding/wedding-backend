<template>
  <div class="section-3">
    <div
      class="content-3 d-flex justify-content-center flex-column align-items-center"
    >
      <count-down class="count-down-component" />
    </div>
    <img
      class="rr-table-3"
      src="../assets/images/rr-table.png"
      alt="Rasta & Reyhan Wedding"
    />
  </div>
</template>

<script>
import CountDown from "../components/CountDown.vue";

export default {
  components: { CountDown },
};
</script>

<style>
.section-3 {
  background-color: white;
  min-height: 68.2vh;
}

.content-3 {
  background-color: #333333;
  color: #e4d7d7;
  height: 29.57vh;
}

.rr-bunga-3 {
  width: 15vh;
  position: absolute;
  left: 0;
  z-index: 99;
}

.rr-logo-3 {
  margin-top: 8vh;
  width: 15vh;
}

.rr-table-3 {
  margin-top: 6.13vh;
  width: 77.77vw;
}
</style>
