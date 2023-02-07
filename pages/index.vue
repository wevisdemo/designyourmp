<template>
  <div>
    <WvNavbar :dark="true" title="DESIGN YOUR MP">
      <NuxtLink to="/" class="menu-link">
        <WvNavButton :dark="true"> Quiz </WvNavButton></NuxtLink
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
        ($store.state.isShowQuiz1 && $store.state.isShowQuiz2) ||
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
  data() {
    return {
      cookieOptions: ["Performance"],

      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content:
            "/og_title.png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content:
            "/og_title.png",
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
  methods: {
    onCookieAccept() {},
  },
};
</script>
