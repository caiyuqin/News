<template>
  <div id="app">
    <loading v-if="loadingshow"></loading>
    <NavPage v-show="show"></NavPage>
   <div class="content">
      <transition name="slide-down">
        <keep-alive>
          <router-view class="router-view" ></router-view>
        </keep-alive>
    </transition>
   </div>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import NavPage from "./components/Nav.vue";
import FooterPage from "./components/Footer.vue";

import { mapGetters } from "vuex";
export default {
  name: "app",
  computed: mapGetters(["show", "loadingshow"]),
  watch: {
    $route(to) {
      let path = to.path.substring(1);
      this.headerChange(path);
    }
  },
  mounted() {
    let path = this.$route.path.substring(1);
    this.headerChange(path);
  },
  methods: {
    headerChange(path) {
      if (path == "user-info" || path == "user-login" || path == "user-reg") {
        this.$store.dispatch("HIDE_HEADER");
      } else {
        this.$store.dispatch("SHOW_HEADER");
      }
    }
  },
  components: {
    NavPage,
    FooterPage
  }
};
</script>

<style scoped>
@import "./assets/css/base.css";
@import "./assets/css/index.css";

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0, 1.2, 1, 0.5);
  opacity: 0.7;
  transform: translate3d(0, 6em, 0);
}
.slide-down-enter,
.slide-down-leave-to {
  opacity: 0.1;
  transform: translate3d(0, 6em, 0);
}
</style>
