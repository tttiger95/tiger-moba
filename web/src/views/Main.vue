<template>
  <div>
    <!-- topbar -->
    <div class="topbar bg-black px-3 py-2 d-flex ai-center">
      <img src="../assets/logo.png" height="30" alt />
      <div class="px-2 flex-1">
        <div class="text-white mb-1">王者荣耀</div>
        <div class="text-grey-1 text-xs">团队成就更多</div>
      </div>

      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <!-- nav -->
    <div class="bg-primary pt-3 pb-2">
      <div class="d-flex jc-around nav nav-inverse">
        <div class="nav-item active">
          <router-link tag="div" to="/" class="nav-link">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link tag="div" to="/gonglue">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>

    <!-- 路由 -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>
