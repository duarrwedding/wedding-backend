<template>
  <div>
    <div class="section-1">
      <spinner-dot v-if="spinner" />
      <template v-else>
        <div
          class="content-1 d-flex justify-content-center flex-column align-items-center"
        >
          <img
            class="rr-logo animate__animated animate__fadeIn animate__delay-1s"
            src="../assets/images/rr.png"
            alt="Rasta & Reyhan Wedding"
          />
          <p
            class="title-1 animate__animated animate__fadeIn animate__delay-1s"
          >
            Rasta & Reyhan
          </p>
          <p
            class="description-1 animate__animated animate__fadeIn animate__delay-1s"
          >
            WEDDING E-INVITATION
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <button
            class="btn-invitation-1 animate__animated animate__fadeIn animate__delay-1s"
            @click="invite"
          >
            OPEN INVITATION
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import SpinnerDot from "./SpinnerDot.vue";

export default {
  components: { SpinnerDot },
  name: "InvitationCard",
  Component: {
    SpinnerDot,
  },
  data() {
    return {
      spinner: true,
    };
  },
  mounted() {
    setTimeout(() => (this.spinner = false), 2000);
  },
  methods: {
    invite() {
      this.$emit("invite");
    },
  },
};
</script>

<style>
.section-1 {
  background-color: #212121;
  height: 100vh;
  color: white;
}

.content-1 {
  padding-top: 27vh;
}

.title-1 {
  color: #e5d8d8;
  font-size: 25px;
  font-family: "CaviarDreamsBold";
  letter-spacing: 8px;
}

.description-1 {
  color: #e5d8d8;
  font-size: 13px;
  font-family: "CaviarDreamsBold";
  letter-spacing: 5px;
  margin-bottom: 15vh;
}

button,
button:focus {
  outline: 0;
  border: none;
}

button:active {
  outline: 0;
}

button:hover {
  cursor: pointer;
}

.btn-invitation-1 {
  font-family: "CaviarDreamsBold";
  font-size: 13px;
  background-color: #e5d8d8;
  color: #212121;
  border-radius: 100vh;
  padding: 20px 34px;
  margin-top: 10vh;
  letter-spacing: 0.5vh;
  outline: none;
}

.rr-logo {
  width: 25vh;
}

.rr-logo.animate__animated.animate__fadeIn {
  --animate-delay: 0.5s;
}

.title-1.animate__animated.animate__fadeIn {
  --animate-delay: 1s;
}

.description-1.animate__animated.animate__fadeIn {
  --animate-delay: 1.5s;
}

.btn-invitation-1.animate__animated.animate__fadeIn {
  --animate-delay: 2s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
