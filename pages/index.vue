<template>
  <div>
    <WvNavbar :dark="true" title="DESIGN YOUR MP">
      <WvNavButton :dark="true"> Quiz </WvNavButton>
      <WvNavButton :dark="true">Result</WvNavButton>
      <WvNavButton :dark="true">About</WvNavButton>
    </WvNavbar>
    <Intro />
    <Quiz1 />
      <Quiz2 />
    <Ending />
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
    };
  },
  methods: {
    onCookieAccept() {},
  },
};
</script>
