<template>
  <div class="account-login">
    <h2>登入</h2>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        type="text"
        label="帳號"
        placeholder="帳號"
        clearable
        maxlength="16"
        minlength="4"
        :rules="[{ required: true, message: '請填寫帳號' }]"
      />
      <van-field
        v-model="password"
        type="password"
        label="密碼"
        placeholder="密碼"
        clearable
        maxlength="16"
        minlength="4"
        :rules="[{ required: true, message: '請填寫密碼' }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#595959"
        >
          登入
        </van-button>
      </div>
    </van-form>

    <div class="tips">
      沒有帳號？
      <router-link style="color: #595959" :to="{ name: 'AccountRegister' }"
        >點擊註冊>></router-link
      >
    </div>
    <Footer />
  </div>
</template>
<script>
import { ajax } from "@/utils/ajax";
import { AccountsApis } from "@/utils/apis";
import Footer from "@/components/Footer";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {
    Footer,
  },
  methods: {
    onSubmit() {
      ajax
        .post(AccountsApis.LoginUrl, {
          username: this.username,
          password: this.password,
        })
        .then(({ data }) => {
          this.$store.commit("UpdateUserInfo", data);
          this.$toast("登入成功");
          this.$router.replace({ name: "Mine" });
        })
        .catch(({ response: { data } }) => {
          this.$toast(`${data.message}`);
        });
    },
  },
  created() {
    this.$toast("請登入");
  },
};
</script>
