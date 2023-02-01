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

      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content:
            "https://wevisdemo.github.io/qualification-of-representative/og_title.png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content:
            "https://wevisdemo.github.io/qualification-of-representative/og_title.png",
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
