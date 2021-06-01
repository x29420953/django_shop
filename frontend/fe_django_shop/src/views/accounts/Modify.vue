<template>
  <div class="account-modify">
    <van-nav-bar
      title="修改會員基本訊息"
      left-text="返回"
      left-arrow
      fixed
      @click-left="back"
    />
    <van-form @submit="onSubmit">
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
            message: '請輸入正確手機',
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
            message: '請輸入正確生日',
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
          修改
        </van-button>
      </div>
    </van-form>
    <div class="tips">
    </div>
  </div>
</template>
<script>
import { ajax } from "@/utils/ajax";
import { AccountsApis } from "@/utils/apis";
import { mapState } from "vuex";
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
        password: "",
        passwordRepeat: "",
        email: "",
        phone: "",
        birth: "",
      }
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    onSubmit() {
      ajax
        .put(AccountsApis.UserUrl, {
          password: this.form.password,
          email: this.form.email,
          phone: this.form.phone,
          birth: this.form.birth,
          user: this.user.id
        })
        .then(() => {
          this.$toast("修改成功");
          this.$router.replace({ name: "Info" });
        })
        .catch(({ response: { data } }) => {
          this.$toast(`${data.message}`);
      });
    },
  },
  computed: mapState(["user"]),
};
</script>
<style lang="less">
.account-modify{
  padding-top: 45px;
}
</style>
