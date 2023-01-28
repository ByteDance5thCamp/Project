<template>
  <el-container class="main-container">
    <el-header>
       头部组件：
      <top-tap />
      <tags-view v-if="needTagsView" />
    </el-header>
    <el-main class="app-main">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import TopTap from '@/layout/components/TopTap/index.vue';
import TagsView from '@/layout/components/TagsView/index.vue';

export default {
  name: 'Layout',
  components: { TopTap, TagsView },
  data() {
    return {
      // 这个属性以后要改造成store/modules/setting中的状态
      needTagsView: true,
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  /* 60= header  60  */
  min-height: calc(100vh - 60px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>
