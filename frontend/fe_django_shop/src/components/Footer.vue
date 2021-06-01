<template>
  <div>
    <van-tabbar v-model="active" route>
    <van-tabbar-item name="home" icon="wap-home-o" :to="{name: 'Home'}"></van-tabbar-item>
    <van-tabbar-item name="shop" icon="shop-o" :to="{name: 'Shop'}"></van-tabbar-item>
    <van-tabbar-item name="cart" icon="bag-o" :to="{name: 'Cart'}"></van-tabbar-item>
    <van-tabbar-item name="user" icon="user-o" :to="{name: 'Mine'}"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'home',
    };
  }
};
</script>