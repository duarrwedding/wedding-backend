<template>
  <div class="all-section">
    <section-one name="cover" />
    <section-two name="countdown" />
    <section-three name="ayat" />
    <section-four name="mempelai" />
    <section-five name="akad" />
    <section-six name="undangan" />
    <section-seven name="listDoa" />
  </div>
</template>

<script>
import SectionOne from "../sections/SectionOne.vue";
import SectionTwo from "../sections/SectionTwo.vue";
import SectionThree from "../sections/SectionThree.vue";
import SectionFour from "../sections/SectionFour.vue";
import SectionFive from "../sections/SectionFive.vue";
import SectionSix from "../sections/SectionSix.vue";

export default {
  name: "WeddingContent",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      // We will fill in the callback later...
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
          entry.target.classList.add("animate__delay-1s");
        }
      });
    });

    // Tell the observer which elements to track
    observer.observe(document.querySelector(".count-down-component"));
    observer.observe(document.querySelector(".rr-table-3"));

    observer.observe(document.querySelector(".rr-an-nur"));
    observer.observe(document.querySelector(".surat-4"));

    observer.observe(document.querySelector(".title-content-5"));
    observer.observe(document.querySelector(".description-content-5"));
    observer.observe(document.querySelector(".mempelai-5"));
    observer.observe(document.querySelector(".description-footer-5"));
    observer.observe(document.querySelector(".footer-content-5"));

    observer.observe(document.querySelector(".title-6"));
    observer.observe(document.querySelector(".title-description-6"));
    observer.observe(document.querySelector(".button-content-6"));
    observer.observe(document.querySelector(".photo-description-6"));

    observer.observe(document.querySelector(".foto-undangan"));
    observer.observe(document.querySelector(".title-7"));
    observer.observe(document.querySelector(".form-7"));
    observer.observe(document.querySelector(".button-send"));
  },
};
</script>

<style>
.animate__delay-1s {
  --animate-delay: 0.75s;
}
.all-section {
  max-width: 100%;
  overflow-x: hidden;
}
</style>
