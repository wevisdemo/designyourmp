<template>
  <div>
    <div
    id="quiz-2"
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
    <div
      class="
        min-h-screen
        bg-main
        d-flex
        justify-content-center
        align-items-center
      "
    >
      <div class="content px-3 mx-auto">
        <p class="header-7 font-weight-bold green-2 m-0 text-center">
          ทักษะและลักษณะนิสัยที่จะพิจารณาเป็นพิเศษ
        </p>
        <p class="header-11 text-white text-center">
          (เรียงลำดับตามความสำคัญจากมากไปน้อย)
        </p>

        <draggable
          :list="list"
          :disabled="!enabled"
          class="list-group"
          ghost-class="ghost"
          @start="dragging = true"
          @end="dragging = false"
        >
          <div
            class="list-group-item header-9 mb-2 d-flex justify-content-between"
            v-for="(element, i) in list"
            :key="element.name"
          >
            <div class="content">
              <img
                :src="
                  require('~/assets/images/quiz_part2/icon_illus_' +
                    (i + 1) +
                    '.svg')
                "
                alt=""
              />
              {{ element.name }}
            </div>
            <div class="img-box">
              <div>
                <img :src="drag" alt="" />
              </div>
            </div>
          </div>
        </draggable>

        <button @click="submit">submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import firebase from "firebase";

export default {
  name: "Quiz1",
  components: {
    draggable,
  },
  data() {
    return {
      choice_2: require("~/assets/images/choice_2.svg"),
      go_down: require("~/assets/images/go_down.svg"),
      drag: require("~/assets/images/drag.svg"),
      enabled: true,
      list: [
        { name: "มีภาวะผู้นำ", id: 1 },
        { name: "มีทักษะการสื่อสารที่ดี", id: 2 },
        { name: "มีมนุษยสัมพันธ์ดี", id: 3 },
        { name: "มีความซื่อสัตย์ ไม่โกง", id: 4 },
        { name: "มีความรับผิดชอบต่อประชาชน", id: 5 },
        { name: "พูดจริง ทำจริง", id: 6 },
        { name: "ความคิดทันต่อการเปลี่ยนแปลง", id: 7 },
        { name: "พูดภาษาต่างประเทศได้", id: 8 },
        { name: "การคิดเชิงวิเคราะห์และเลือกตัดสินใจ", id: 9 },
        { name: "ความคิดสร้างสรรค์", id: 10 },
      ],
      dragging: false,
    };
  },
  created() {
    this.setData();
  },
  methods: {
    async setData(choice) {
      const ref = this.$fire.database.ref("quizzes/quiz2");
      try {
        const snapshots = await ref.once("value");
        console.log(snapshots.val());
      } catch (e) {
        alert(e);
      }
    },
    submit() {
      this.list.forEach((element, i) => {
        console.log(element, i);
        const ref = this.$fire.database.ref(
          "quizzes/quiz2/choice" + element.id
        );
        ref.set(firebase.database.ServerValue.increment(10 - i));
      });
    },
  },
};
</script>

<style lang="scss">
.list-group {
  max-width: 450px;
  margin: auto;
}

.list-group-item {
  border-radius: inherit !important;
  cursor: move;
  padding: 0;
  border: 1px solid #000000;

  .content {
    padding: 10px 20px;
  }

  .img-box {
    padding: 10px 5px;
    border-left: 1px solid #000000;
  }

  @media #{$mq-mini-mobile} {
    background-size: 300px;

    .content,
    .img-box {
      padding: 5px 7px;
    }
    font-size: 14px !important;
  }

  img {
    width: 34px;

    @media #{$mq-mini-mobile} {
      width: 22px;
    }
  }
}
</style>

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