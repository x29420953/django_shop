<template>
  <div class="product-box">
    <van-nav-bar left-text="返回" left-arrow fixed @click-left="back" />
    <div class="box-main">
      <a class="item" v-for="item in dataList" :key="item.id">
        <div class="img">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="imgg in item.imgs" :key="imgg.id">
              <img :src="imgg" alt="" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <van-cell-group class="form-group">
          <van-cell title="商品名稱 : " :value="item.name" />
          <van-cell title="商品價格 : " :value="item.price" />
          <van-cell title="商品編號 : " :value="item.number" />
          <van-cell title="商品說明 : " :value="item.content" />
          <van-cell title="數量 : ">
            <van-stepper v-model="count" min="1" :max="item.count" />
          </van-cell>
          <van-cell
            center
            class="form-price"
            :title="'合計 : ' + count * item.price"
          >
            <van-button
              plain
              round
              block
              type="default"
              native-type="submit"
              @click="onSubmit"
              >加入購物車</van-button
            >
          </van-cell>
        </van-cell-group>
      </a>
    </div>
  </div>
</template>
<script>
import { ajax } from "@/utils/ajax";
import { ProductsApis } from "@/utils/apis";
import { OrderApis } from "@/utils/apis";
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: "",
      dataList: [],
      count: 1,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getDataList() {
      const url = ProductsApis.DetailUrl.replace("#{id}", this.id);
      ajax.get(url).then(({ data }) => {
        this.dataList = data.objects;
      });
    },
    onSubmit() {
      ajax
        .post(OrderApis.CartOrderlUrl, {
          product: this.id,
          count: this.count,
          user: this.user_id,
        })
        .then(() => {
          this.$toast.success("加入成功");
        })
        .catch(({ response: { data } }) => {
          this.$toast(`${data.message}`);
          if (data.status == "401") {
            this.$toast(`${data.message}`);
          }
        });
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.user_id = this.userid;
    this.getDataList();
  },
  computed: { ...mapState({ userid: (state) => state.user.id }) },
};
</script>
<style lang="less">
.product-box {
  padding: 0 10px;

  .box-main {
    width: 100%;
    padding-bottom: 40px;
  }

  .item {
    width: 100%;

    .form-group {
      margin-top: 10px;

      .van-cell__title {
        text-align: left;
      }

      .van-cell__value {
        text-align: left;
        white-space: pre-line;
        color: black;
      }
      .form-price {
        font-size: 20px;
      }
    }

    .img {
      img {
        width: 100%;
      }
    }
  }
}
</style>