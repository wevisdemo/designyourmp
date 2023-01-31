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
        px-3
      "
    >
      <div class="content text-center">
        <h4 class="header-4 text-white">
          บอกหน่อย.. <br />
          ส.ส. ที่ถูกใจคุณและน่าจะเลือกคนนี้ควรมี
        </h4>
        <h2 class="header-2 font-weight-bold blue">คุณสมบัติพื้นฐาน</h2>
        <h4 class="header-4 text-white">แบบไหน?</h4>
      </div>
      <div class="text-center go_down">
        <img :src="go_down" alt="go_down" />
      </div>
    </div>
    <div class="min-h-screen position-relative text-center">
      <div class="d-flex menu-box justify-content-center flex-wrap">
        <div
          v-for="(item, i) in menu"
          :key="i"
          class="menu"
          :class="{ active: menu_active == item }"
          @click="selectMenu(item, i)"
        >
          <p class="header-11 m-0">{{ item }}</p>
        </div>
      </div>
      <b-row class="min-h-screen" no-gutters>
        <b-col
          lg="6"
          class="
            bg-black-2
            d-flex
            justify-content-center
            align-items-center
            text-white
          "
        >
          <div>
            <p class="header-10">ส.ส. ในสภา<br />ที่ตรงกับความต้องการ</p>
            <div class="people-box d-flex flex-wrap my-3 my-lg-5">
              <div v-for="item in data" class="people"></div>
              <div
                v-for="item in fade_ppl"
                class="people faded"
                v-if="fade_ppl != 0"
              ></div>
            </div>

            <p class="header-11">
              ส.ส. ในสภาชุดที่ 25 ตั้งแต่ 10 ก.ค. 2562 - 17 ตุลาคม 2565
            </p>
          </div>
        </b-col>
        <b-col
          lg="6"
          class="bg-black d-flex justify-content-center align-items-center"
          ><div class="question-box">
            <p class="header-10 text-white mb-3">
              ออกแบบ ส.ส. ตามที่คุณต้องการ
            </p>
            <template v-if="current_quiz != null">
              <p class="header-7 font-weight-bold blue">
                {{ current_quiz.question }}
              </p>

              <div
                v-for="item in current_quiz.ans"
                class="choice mb-2"
                @click="answer(item)"
              >
                <p class="header-8 m-0">{{ item }}</p>
              </div></template
            >
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="min-h-screen bg-main result">
      <div class="result-box text-center min-h-screen">
        <h4 class="header-4 font-weight-bold kondolar">ยินดีด้วย!</h4>
        <h4 class="header-5 font-weight-bold kondolar">
          คุณสมบัติที่คุณเลือกใกล้เคียงกับ ส.ส. ที่มีอยู่ ดังนี้!
        </h4>
        <p class="header-11">
          *ข้อมูลนำมาวิเคราะห์คือ ส.ส. ในสภาชุดที่ 25 และในอนาคตอาจมีหรือไม่มี
          ตัวเลือกอื่นๆ ที่ใกล้เคียงกับคุณสมบัติของคุณกว่านี้ก็ได้
        </p>
        <b-row class="result-box-content">
          <b-col lg="6">1</b-col>
          <b-col lg="6">2</b-col>
        </b-row>
        <hr />
        <p class="header-11">แชร์ไปให้เพื่อนของคุณเล่น</p>
        <div class="share-box text-center">
          <div class="d-flex justify-content-center align-items-center">
            <p class="header-11 m-0">Share</p>

            <ShareNetwork
              network="facebook"
              title=""
              url="http://localbudgeting.actai.co/"
              class="share-btn pointer text-1 mx-2"
            >
              <img :src="facebook" alt="facebook" />
            </ShareNetwork>

            <ShareNetwork
              network="twitter"
              title=""
              url="http://localbudgeting.actai.co/"
              class="share-btn pointer text-1 mx-2"
            >
              <img :src="twitter" alt="twitter" />
            </ShareNetwork>
            <ShareNetwork
              network="line"
              title=""
              url="http://localbudgeting.actai.co/"
              class="share-btn pointer text-1 mx-2"
            >
              <img :src="line" alt="line" />
            </ShareNetwork>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as mp_data from "~/assets/data/mp_pro.json";

export default {
  name: "Quiz1",
  data() {
    return {
      choice_1: require("~/assets/images/choice_1.svg"),
      go_down: require("~/assets/images/go_down.svg"),
      facebook: require("~/assets/images/facebook.svg"),
      line: require("~/assets/images/line.svg"),
      twitter: require("~/assets/images/twitter.svg"),
      menu: [
        "อายุ",
        "การศึกษา",
        "สาขาที่จบ",
        "อาชีพเดิม",
        "เครือข่าย",
        "ยึดโยงพื้นที่",
      ],
      menu_active: "อายุ",
      current_quiz: null,
      quiz: [
        {
          id: 1,
          question: "อายุของ ส.ส. ควรอยู่ช่วงไหน?",
          ans: [
            "อายุ 18-30",
            "อายุ 31-40",
            "อายุ 41-50",
            "อายุ 51-60 ขึ้นไป",
            "ไม่กำหนดอายุ",
          ],
          current_ans: "",
        },
        {
          id: 2,
          question: "ต้องมีระดับการศึกษาควรอยู่ในระดับไหน?",
          ans: [
            "ต่ำกว่าปริญญาตรี",
            "ปริญญาตรี",
            "ปริญญาโท",
            "ปริญญาเอก",
            "ไม่กำหนด",
          ],
          current_ans: "",
        },
        {
          id: 3,
          question: "จบการศึกษาอะไร?",
          ans: [
            "เกี่ยวกับกฎหมาย",
            "เกี่ยวกับการเมือง",
            "เกี่ยวกับบริหารงานภาครัฐ",
            "เกี่ยวกับการบริหารธุรกิจ",
            "เกี่ยวกับการศึกษา",
            "อื่นๆ",
            "จบสาขาใดมาก็ได้",
          ],
          current_ans: "",
        },
        {
          id: 4,
          question: "อาชีพเดิมต้องทำงานแนวไหนมา?",
          ans: [
            "ทำงานสายกฎหมาย",
            "ทำงานสายการเมือง",
            "ทำงานสายบริหารงานภาครัฐ",
            "นักธุรกิจ",
            "นักวิชาการ",
            "ทำงานสาขาอื่นๆ",
            "ทำงานสายใดมาก็ได้",
          ],
          current_ans: "",
        },
        {
          id: 5,
          question: "ควรจะต้องมีเครือข่ายทางการเมืองไหม?",
          ans: ["ควร", "ไม่ควร", "ไม่จำเป็น"],
          current_ans: "",
        },
        {
          id: 6,
          question:
            "ส.ส. เขต ควรจะต้องเรียน หรืออาศัยอยู่หรือทำงาน ในจังหวัดที่ลงสมัครไหม?",
          ans: ["ควร", "ไม่ควร", "ไม่จำเป็น"],
          current_ans: "",
        },
      ],
      data: mp_data.default,
      fade_ppl: 0,
    };
  },
  mounted() {
    this.current_quiz = this.quiz[0];
  },
  methods: {
    selectMenu(menu, index) {
      this.menu_active = menu;
      this.current_quiz = this.quiz[index];
    },
    answer(ans) {
      console.log(ans);
      if (this.menu_active == "อายุ") this.onCheckQuestion1(ans);
      else if (this.menu_active == "การศึกษา") this.onCheckQuestion2(ans);
      else if (this.menu_active == "สาขาที่จบ") this.onCheckQuestion3(ans);
      else if (this.menu_active == "อาชีพเดิม") this.onCheckQuestion4(ans);
      else if (this.menu_active == "เครือข่าย") this.onCheckQuestion5(ans);
      else this.onCheckQuestion6(ans);
      this.fade_ppl = mp_data.length - this.data.length;
      console.log(this.data.length);
    },
    onCheckQuestion1(ans) {
      if (ans == "อายุ 18-30") this.data = mp_data.filter((x) => x.age18_30);
      else if (ans == "อายุ 31-40")
        this.data = mp_data.filter((x) => x.age31_40);
      else if (ans == "อายุ 41-50")
        this.data = mp_data.filter((x) => x.age41_50);
      else if (ans == "อายุ 51-60 ขึ้นไป")
        this.data = mp_data.filter((x) => x.age51_60);
      else this.data = mp_data.filter((x) => x.noneedage);
    },
    onCheckQuestion2(ans) {
      if (ans == "ต่ำกว่าปริญญาตรี")
        this.data = mp_data.filter((x) => x.below_bachelor_deg);
      else if (ans == "ปริญญาตรี")
        this.data = mp_data.filter((x) => x.bachelor_deg);
      else if (ans == "ปริญญาโท")
        this.data = mp_data.filter((x) => x.master_deg);
      else if (ans == "ปริญญาเอก") this.data = mp_data.filter((x) => x.phd);
      else this.data = mp_data.filter((x) => x.no_need_deg);
    },
    onCheckQuestion3(ans) {
      if (ans == "เกี่ยวกับกฎหมาย")
        this.data = mp_data.filter((x) => x.law_faculty);
      else if (ans == "เกี่ยวกับการเมือง")
        this.data = mp_data.filter((x) => x.politics_faculty);
      else if (ans == "เกี่ยวกับบริหารงานภาครัฐ")
        this.data = mp_data.filter((x) => x.public_admin_faculty);
      else if (ans == "เกี่ยวกับการบริหารธุรกิจ")
        this.data = mp_data.filter((x) => x.business_faculty);
      else if (ans == "เกี่ยวกับการศึกษา")
        this.data = mp_data.filter((x) => x.education_faculty);
      else if (ans == "อื่นๆ")
        this.data = mp_data.filter((x) => x.other_faculty);
      else this.data = mp_data.filter((x) => x.any_faculty);
    },
    onCheckQuestion4(ans) {
      if (ans == "ทำงานสายกฎหมาย")
        this.data = mp_data.filter((x) => x.law_work);
      else if (ans == "ทำงานสายการเมือง")
        this.data = mp_data.filter((x) => x.politics_work);
      else if (ans == "ทำงานสายบริหารงานภาครัฐ")
        this.data = mp_data.filter((x) => x.public_admin_work);
      else if (ans == "นักธุรกิจ")
        this.data = mp_data.filter((x) => x.business_work);
      else if (ans == "นักวิชาการ")
        this.data = mp_data.filter((x) => x.education_work);
      else if (ans == "ทำงานสาขาอื่นๆ")
        this.data = mp_data.filter((x) => x.other_work);
      else this.data = mp_data.filter((x) => x.any_work);
    },
    onCheckQuestion5(ans) {
      if (ans == "ควร")
        this.data = mp_data.filter((x) => x.has_connection_bloodline);
      else if (ans == "ไม่ควร")
        this.data = mp_data.filter((x) => x.no_connection_bloodline);
      else this.data = mp_data.filter((x) => x.no_need_connection_bloodline);
    },
    onCheckQuestion6(ans) {
      if (ans == "ควร")
        this.data = mp_data.filter((x) => x.live_in_own_province);
      else if (ans == "ไม่ควร")
        this.data = mp_data.filter((x) => x.not_live_in_own_province);
      else this.data = mp_data.filter((x) => x.noneed_live_in_own_province);
    },
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
  background-image: url("../assets/images/choice_1.svg");
  background-size: 850px;
  background-position: center;
  background-repeat: no-repeat;

  @media #{$mq-mini-mobile} {
    background-size: 300px;
  }
}

.result {
  background-image: url("../assets/images/papershoot.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 5%;

  @media #{$mq-lg} {
    padding: 10px;
    background-image: unset;
  }
}
.go_down {
  position: absolute;
  bottom: 60px;
  width: 100%;
}

.menu-box {
  position: absolute;
  z-index: 1;
  width: 100%;
  color: #ffffff;
  top: 60px;

  @media #{$mq-lg} {
    position: unset;
    background-color: #151515;
  }

  .menu {
    cursor: pointer;
    padding: 5px;

    p {
      opacity: 0.7;
    }
  }
}

.active {
  border-bottom: 3px solid #ffffff;
}

.people-box {
  max-width: 320px;
  margin: auto;

  @media #{$mq-mini-mobile} {
    max-width: 230px;
  }
}

.people {
  width: 12px;
  height: 12px;
  background: #51b4fa;
  border-radius: 50%;
  margin: 2px;

  @media #{$mq-mini-mobile} {
    width: 5px;
    height: 5px;
  }
}

.choice {
  // max-width: 216px;
  width: 100%;
  margin: auto;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 4px 10px;
  cursor: pointer;
  transition: 0.3s;
}

.choice:hover {
  background: #51b4fa;
}

.result-box {
  background: #ffffff;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 36px;

  @media #{$mq-lg} {
    // min-height: 100vh;
  }

  .result-box-content {
    max-width: 815px;
    margin: auto;
  }

  hr {
    max-width: 615px;
    border-top: 1px dashed #000000;
  }
}

.question-box {
  max-width: 385px;
}

.faded {
  opacity: 0.2;
}
</style>