<template>
  <div>
    <div
      class="
        h-100vh
        bg-main
        intro
        d-flex
        justify-content-center
        align-items-center
      "
    >
      <div class="content text-center px-3">
        <h4 class="header-4 text-white">
          บอกหน่อย.. <br />
          ส.ส. ที่ถูกใจคุณและน่าจะเลือกคนนี้ควรมี
        </h4>
        <h2 class="header-2 font-weight-bold green-2">ทักษะและลักษณะนิสัย</h2>
        <h4 class="header-4 text-white">แบบไหน?</h4>
      </div>
      <div class="text-center go_down">
        <img :src="go_down" alt="go_down" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz1",
  data() {
    return {
      choice_2: require("~/assets/images/choice_2.svg"),
      go_down: require("~/assets/images/go_down.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #000;
}

.intro {
  background: #000;
  position: relative;
}

.content {
  position: relative;
  max-width: 790px;
}

.intro:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-image: url("../assets/images/choice_2.svg");
  background-size: 850px;
  background-position: center;
  background-repeat: no-repeat;

  @media #{$mq-mini-mobile} {
    background-size: 300px;
  }
}

.go_down {
  position: absolute;
  bottom: 60px;
  width: 100%;
}
</style>