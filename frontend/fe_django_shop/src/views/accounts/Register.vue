<template>
  <div class="account-register">
    <h2>註冊</h2>
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        label="帳號"
        placeholder="帳號"
        type="test"
        clearable
        maxlength="16"
        minlength="4"
        :rules="[{ required: true, message: '請輸入帳號' }]"
      />
      <van-field
        v-model="form.password"
        label="密碼"
        placeholder="密碼"
        type="password"
        clearable
        maxlength="16"
        minlength="4"
        :rules="[{ required: true, message: '請輸入密碼' }]"
      />
      <van-field
        v-model="form.passwordRepeat"
        type="password"
        label="確認密碼"
        placeholder="確認密碼"
        :rules="[
          { required: true, message: '請再次輸入密碼' },
          {
            validator: () => this.form.password === this.form.passwordRepeat,
            message: '密碼輸入不一致',
          },
        ]"
      />
      <van-field
        v-model="form.email"
        label="電子信箱"
        placeholder="電子信箱"
        clearable
        :rules="requiredemail"
      />
      <van-field
        v-model="form.phone"
        label="手機"
        placeholder="手機"
        clearable
        maxlength="10"
        :rules="[
          { required: true, message: '請輸入手機' },
          {
            pattern: /09\d{8}/,
            message: '請輸入正確手機 ex:0987654321',
          },
        ]"
      />
      <van-field
        v-model="form.birth"
        label="生日"
        placeholder="生日"
        clearable
        :rules="[
          { required: true, message: '請輸入生日' },
          {
            pattern: /^[0-9]{4}[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/,
            message: '請輸入正確生日 ex:2000-01-01',
          },
        ]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#595959"
        >
          註冊
        </van-button>
      </div>
    </van-form>
    <div class="tips">
      已有帳號？
      <router-link style="color: #595959" :to="{ name: 'AccountLogin' }"
        >點擊登入>></router-link
      >
    </div>
  </div>
</template>
<script>
import { ajax } from "@/utils/ajax";
import { AccountsApis } from "@/utils/apis";
export default {
  data() {
    return {
      requiredemail: [
        {
          required: true,
          message: "請輸入電子信箱",
        },
        {
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "請輸入正確電子信箱",
        },
      ],
      form: {
        username: "",
        password: "",
        passwordRepeat: "",
        email: "",
        phone: "",
        birth: "",
      }
    };
  },
  methods: {
    onSubmit() {
      ajax
        .post(AccountsApis.RegisterUrl, {
          username: this.form.username,
          password: this.form.password,
          email: this.form.email,
          phone: this.form.phone,
          birth: this.form.birth,
        })
        .then(({ data }) => {
          this.$store.commit("UpdateUserInfo", data);
          this.$toast("註冊成功");
          this.$router.replace({ name: "Mine" });
        })
        .catch(({ response: { data } }) => {
          this.$toast(`${data.message}`);
        });
    },
  },
};
</script>
