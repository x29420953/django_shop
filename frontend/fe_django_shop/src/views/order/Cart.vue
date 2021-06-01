<template>
  <div class="cart">
    <h3>---------</h3>
    <van-nav-bar
      title="購物車"
      right-text="去買單"
      fixed
      @click-right="onPay"
    />
    <div class="cart-info" v-for="item in orderDetail" :key="item.id">
      <div class="form-group">
        <div class="img">
          <router-link
            :to="{ name: 'Product', params: { id: item.product_id } }"
          >
            <img :src="item.img" alt="" />
          </router-link>
          <van-icon
            name="delete-o"
            @click="onCancelOrder(item.orderid)"
            size="20px"
            color="#ff8a7c"
          />
        </div>
        <div class="left">
          <span>商品名稱 : </span>
          <p>商品單價 :</p>
          <p>數量 :</p>
          <p>總價 :</p>
        </div>
        <div class="right">
          <span>{{ item.product | ellipsis }}</span>
          <p>{{ item.product_price }}</p>
          <van-stepper
            disable-input
            v-model="item.count"
            min="1"
            :max="item.product_count"
            @change="onSubmit(item.product_id, item.count, user.id)"
          />
          <p>{{ item.count * item.product_price }}</p>
        </div>
      </div>
    </div>
    <h3>---------</h3>
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
    onPay() {
      if (this.orderDetail.length == 0){
          this.$toast("購物車是空的");
      }else{
        this.$router.push({ name: "Pay" });
      }
    },
    onSubmit(item_product_id, item_count, user_id) {
      ajax
        .put(OrderApis.CartOrderlUrl, {
          product: item_product_id,
          count: item_count,
          user: user_id,
        })
        .then(() => {
          this.$toast.success("修改成功");
          this.getOrderDetail();
        })
        .catch(({ response: { data } }) => {
          this.$toast(`${data.message}`);
        });
    },
    onCancelOrder(item_id) {
      ajax
        .patch(OrderApis.CartOrderlUrl, {
          order: item_id,
        })
        .then(() => {
          this.$toast.success("刪除");
          this.getOrderDetail();
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
            this.$toast(`${data.message}`);
          }
        });
    },
  },
  computed: mapState(["user"]),
  created() {
    this.getOrderDetail();
  },
};
</script>
<style lang="less">
.cart {
  h3 {
    color: rgb(255, 255, 255);
  }
  .cart-info {
    .form-group {
      margin-bottom: 10px;
      margin-left: 5px;
      margin-right: 5px;
      float: left;
      width: 98%;
      background: rgb(248, 248, 248);

      .img {
        padding-left: 15px;
        width: 80px;
        float: left;
        margin-top: 5px;

        img {
          width: 100%;
        }
      }

      .left {
        margin-top: 5px;
        padding-left: 20px;
        float: left;
      }

      .right {
        padding-right: 10px;
        margin-top: 5px;
      }
    }
  }
}
</style>
