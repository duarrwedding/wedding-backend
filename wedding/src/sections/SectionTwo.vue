<template>
  <div class="section-3">
    <img
      class="rr-bunga-3"
      src="../assets/images/rr-bunga.png"
      alt="Rasta & Reyhan Wedding"
    />
    <img
      class="rr-logo-3"
      src="../assets/images/rr-name.png"
      alt="Rasta & Reyhan Wedding"
    />
    <div
      class="content-3 d-flex justify-content-center flex-column align-items-center"
    >
      <count-down class="count-down-component" />
      <img
        class="rr-table-3"
        src="../assets/images/rr-table.png"
        alt="Rasta & Reyhan Wedding"
      />
    </div>
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
  height: 100vh;
  color: #212121;
}

.rr-bunga-3 {
  width: 20vh;
  position: absolute;
  left: 0;
  z-index: 99;
}

.rr-logo-3 {
  margin-top: 10vh;
  width: 12vh;
}

.rr-table-3 {
  width: 55vh;
}
</style>
