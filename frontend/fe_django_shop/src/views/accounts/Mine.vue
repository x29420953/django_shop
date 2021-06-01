<template>
  <div class="mine">
    <div class="user-header">
      <div class="user-img">
        <van-icon name="contact" size="80"/>
        <p>Hi : {{ user.username }}</p>
      </div>
    </div>
    <van-row class="user-links">
      <van-col span="6">
        <router-link :to="{name: 'Order', params: {status: constants.ORDER_STATUS_PAND}}">
          <van-icon name="logistics" />
          <span style="color: #000">待出貨</span>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link :to="{name: 'Order', params: {status: constants.ORDER_STATUS_SEND}}">
          <van-icon name="todo-list-o" />
          <span style="color: #000">待收貨</span>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link :to="{name: 'Order', params: {status: constants.ORDER_STATUS_DONE}}">
          <van-icon name="completed" />
          <span style="color: #000">已完成</span>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link :to="{name: 'Order', params: {status: constants.ORDER_STATUS_CANCEL}}">
          <van-icon name="failure" />
          <span style="color: #000">已取消</span>
        </router-link>
      </van-col>
    </van-row>
    <van-cell-group>
      <van-cell  value="基本資訊" :to="{name: 'Info'}"/>
      <van-cell  value="登出" @click="logout"/>
    </van-cell-group>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import { ajax } from "@/utils/ajax";
import { AccountsApis } from "@/utils/apis";
import { mapState } from "vuex";
import * as constants from '@/utils/constants'
export default {
  components: {
    Footer,
  },
  data() {
    return {
      constants   
    }   
  },
  methods: {
    getUserInfo() {
      ajax
        .get(AccountsApis.UserUrl)
        .then(({ data }) => {
          this.$store.commit("UpdateUserInfo", data);
        })
        .catch(({ response: { data } }) => {
          if (data.status == "401") {
            this.$toast(`${data.message}`);
          }
        });
    },
    logout() {
      ajax.get(AccountsApis.LogoutUrl).then(() => {
        this.$store.commit("DeleteUserInfo");
        this.$toast("登出");
        this.$router.push({ name: "Home" });
      });
    },
  },
  computed: mapState(["user"]),
  created() {
    this.getUserInfo();
  },
};
</script>
<style lang="less">
.mine {
  .user-header {
    background: rgb(224, 224, 224);

    .user-img {
      padding-top: 20px;
      padding-bottom: 10px;
    }
  }
  .user-links {
    padding: 15px 0;
    font-size: 12px;

    .van-icon {
      display: block;
      font-size: 24px;
      color: #000;
    }
  }
}
</style>
