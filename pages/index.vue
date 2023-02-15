<template>
  <div>
    <div
      class="
        position-fixed
        loading
        d-flex
        justify-content-center
        align-items-center
      "
      v-if="isLoading"
    >
      <div class="text-center loading-box">
        <b-spinner
          style="width: 3rem; height: 3rem"
          label="Large Spinner"
        ></b-spinner>
      </div>
    </div>
    <WvNavbar :dark="true" title="DESIGN YOUR MP">
      <NuxtLink to="/#quiz" class="menu-link">
        <WvNavButton :dark="true"> Quiz </WvNavButton></NuxtLink
      >
      <NuxtLink to="/#result" class="menu-link">
        <WvNavButton :dark="true"> Result </WvNavButton></NuxtLink
      >
      <NuxtLink to="/about" class="menu-link">
        <!-- <WvNavButton :dark="true">Result</WvNavButton> -->
        <WvNavButton :dark="true">About</WvNavButton>
      </NuxtLink>
    </WvNavbar>

    <Intro />
    <template v-if="$store.state.selectedQuiz == 1">
      <Quiz1 v-if="$store.state.isShowQuiz1" />
      <ResultQuiz1 v-if="$store.state.isShowResultQuiz1" />
      <Quiz2 v-if="$store.state.isShowQuiz2" />
    </template>
    <template v-if="$store.state.selectedQuiz == 2">
      <Quiz2 v-if="$store.state.isShowQuiz2" />
      <Quiz1 v-if="$store.state.isShowQuiz1" />
      <ResultQuiz1 v-if="$store.state.isShowResultQuiz1" />
    </template>
    <template v-if="$store.state.selectedQuiz == 3"> <ResultQuiz1 /></template>
    <Ending
      v-if="
        ($store.state.isAnsQuiz1 && $store.state.isAnsQuiz2) ||
        $store.state.selectedQuiz == 3
      "
    />
    <WvFooter :dark="true" />
    <WvCookieConsent
      policyUrl="https://punchup.world"
      :cookieOptions="cookieOptions"
      :onAccept="onCookieAccept"
    />
  </div>
</template>

<script>
import WvNavbar from "@wevisdemo/ui/vue2/navbar";
import WvNavButton from "@wevisdemo/ui/vue2/nav-button";
import WvCookieConsent from "@wevisdemo/ui/vue2/cookie-consent";
import WvFooter from "@wevisdemo/ui/vue2/footer";

export default {
  name: "IndexPage",
  components: {
    WvNavbar,
    WvNavButton,
    WvCookieConsent,
    WvFooter,
  },
  head() {
    return {
      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content: require("~/assets/images/og_title.png"),
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content: require("~/assets/images/og_title.png"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "'ผู้แทน' แบบไหนที่เราอยากเห็น?",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "ร่วมออกแบบคุณสมบัติสมาชิกสภาผู้แทนราษฎร (ส.ส.)",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "'ผู้แทน' แบบไหนที่เราอยากเห็น?",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "ร่วมออกแบบคุณสมบัติสมาชิกสภาผู้แทนราษฎร (ส.ส.)",
        },
      ],
    };
  },
  data() {
    return {
      cookieOptions: ["Performance"],
      isLoading: true,
    };
  },
  created() {
    if (process.client) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      setTimeout(() => {
        document.getElementsByTagName("body")[0].style.overflow = "unset";
        this.isLoading = false;
        if (window.location.href.includes("result"))
          this.$store.commit("setSelectedQuiz", 3);
      }, 1000);

      setTimeout(() => {
        if (window.location.href.includes("quiz")) {
          document.getElementById("choose-wrapper").scrollIntoView();
        } else if (window.location.href.includes("result"))
          document.getElementById("quiz1-result").scrollIntoView();
      }, 1500);


    }
  },
  methods: {
    onCookieAccept() {},
  },
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  z-index: 9999999;
  height: 100vh;
  background: white;
}
</style>