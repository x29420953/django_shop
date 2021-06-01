<template>
  <div class="userinfo">
    <van-nav-bar
      title="會員基本訊息"
      left-text="返回"
      left-arrow
      fixed
      right-text="修改資料"
      @click-left="back"
      @click-right="onClickRight"
    />
    <van-cell-group >
      <van-cell title="姓名" :value=dataList.username />
      <van-cell title="手機" :value=dataList.phone />
      <van-cell title="信箱" :value=dataList.email />
      <van-cell title="生日" :value=dataList.birth />
    </van-cell-group>
  </div>
</template>
<script>
import { ajax } from "@/utils/ajax";
import { AccountsApis } from "@/utils/apis";
import { mapState } from "vuex";
export default {
  data() {
    return {
      dataList: [],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getUserInfo() {
      ajax.get(AccountsApis.UserUrl).then(({ data }) => {
        this.dataList = data;
      });
    },
    onClickRight() {
      this.$router.push({ name: "Modify" });
    },
  },
  computed: mapState(["user"]),
  created() {
    this.getUserInfo();
  },
};
</script>
<style lang="less">
.userinfo {
  padding-top: 50px;
}
</style>
