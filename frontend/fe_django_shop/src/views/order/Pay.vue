<template>
  <div class="pay">
    <van-nav-bar
      left-text="返回"
      left-arrow
      title="結帳"
      fixed
      @click-left="back"
    />
    <div class="table">
      <table>
        <tr>
          <th style="width: 150px">名稱</th>
          <th style="width: 90px">單價</th>
          <th style="width: 50px">數量</th>
          <th style="width: 90px">總價</th>
        </tr>
        <tr v-for="item in orderDetail" :key="item.id">
          <td>{{ item.product | ellipsis }}</td>
          <td>{{ item.product_price }}</td>
          <td>{{ item.count }}</td>
          <td>{{ item.count * item.product_price }}</td>
        </tr>
      </table>
      <hr />
      <table>
        <tr>
          <th style="width: 150px">總計</th>
          <th style="width: 90px"></th>
          <th style="width: 50px">{{ totalCount }}</th>
          <th style="width: 90px">{{ totalPrice }}</th>
        </tr>
      </table>
      <hr />
      <van-form @submit="onSubmit(user.id)">
      <van-field
        v-model="form.name"
        label="收件人姓名"
        placeholder="收件人姓名"
        type="test"
        clearable
        :rules="[{ required: true, message: '請輸入收件人姓名' }]"
      />
      <van-field
        v-model="form.address"
        label="收件人地址"
        placeholder="收件人地址"
        type="test"
        clearable
        :rules="[{ required: true, message: '請輸入收件人地址' }]"
      />
      <van-field
        v-model="form.phone"
        label="收件人手機"
        placeholder="收件人手機"
        clearable
        maxlength="10"
        :rules="[
          { required: true, message: '請輸入收件人手機' },
          {
            pattern: /09\d{8}/,
            message: '請輸入正確手機',
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
          付款
        </van-button>
      </div>
    </van-form>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import { OrderApis } from "@/utils/apis";
import { ajax } from "@/utils/ajax";
import { mapState } from "vuex";
export default {
  data() {
    return {
      orderDetail: [],
      form: {
        name: "",
        phone: "",
        address: "",
      }
    };
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 10) {
        return value.slice(0, 10) + "...";
      }
      return value;
    },
  },
  components: {
    Footer,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    onSubmit(user_id) {
      ajax
        .post(OrderApis.TotalOrderUrl, {
          name: this.form.name,
          phone: this.form.phone,
          address: this.form.address,
          user: user_id,
        })
        .then(() => {
          this.$toast("付款成功");
          this.$router.replace({ name: "Mine" });
        })
        .catch(({ response: { data } }) => {
          this.$toast(`${data.message}`);
        });
    },
    getOrderDetail() {
      ajax
        .get(OrderApis.CartOrderlUrl)
        .then(({ data }) => {
          this.orderDetail = data.objects;
        })
        .catch(({ response: { data } }) => {
          if (data.status == "401") {
            this.$router.push({ name: "AccountLogin" });
            this.$toast(`${data.message}`);
          }
        });
    },
  },
  computed: {
    totalCount() {
      var totalCount = 0;
      for (let i = 0; i < this.orderDetail.length; i++) {
        totalCount += this.orderDetail[i].count;
      }
      return totalCount;
    },
    totalPrice() {
      var totalPrice = 0;
      for (let i = 0; i < this.orderDetail.length; i++) {
        totalPrice += this.orderDetail[i].price;
      }
      return totalPrice;
    },
    ...mapState(["user"])
  },
  created() {
    this.getOrderDetail();
  },
};
</script>
<style lang="less">
.pay {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 10px;
}
</style>
