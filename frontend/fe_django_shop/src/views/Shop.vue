<template>
  <div class="shop-box">
    <van-search
      v-model="productname"
      show-action
      placeholder="請輸入搜尋商品"
      @search="onSearchname"
      @clear="clear"
    >
      <template #action>
        <div @click="onSearchname">搜尋</div>
      </template>
    </van-search>
    <van-dropdown-menu>
      <van-dropdown-item
        v-model="productclassify"
        :options="option1"
        @close="onSearchclassify"
      />
    </van-dropdown-menu>
    <div class="box-main">
      <a class="item" v-for="item in dataList" :key="item.id">
        <div class="img">
          <router-link :to="{ name: 'Product', params: { id: item.id } }">
            <img :src="item.imgs[0]" alt="" />
            <span class="info">{{ item.name }}</span
            ><br />
            <span class="info">TWD {{ item.price }}</span>
          </router-link>
        </div>
      </a>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import { ajax } from "@/utils/ajax";
import { ProductsApis } from "@/utils/apis";
export default {
  data() {
    return {
      productname: "",
      dataList: [],
      productclassify: "All",
      option1: [
        { text: "All", value: "All" },
        { text: "Sports", value: "Sports" },
        { text: "Smart", value: "Smart" },
        { text: "Classic", value: "Classic" },
        { text: "Other", value: "Other" },
      ],
    };
  },
  components: {
    Footer,
  },
  methods: {
    onSearchname() {
      if (!this.productname) {
        this.$toast("請輸入");
        return;
      }
      this.dataList = [];
      this.getDataListname();
    },
    onSearchclassify() {
      this.dataList = [];
      this.getDataListclassify();
    },
    getDataListname() {
      ajax
        .get(ProductsApis.ShopUrl, {
          params: {
            name: this.productname,
          },
        })
        .then(({ data }) => {
          this.dataList = data.objects;
        });
    },
    getDataListclassify() {
      ajax
        .get(ProductsApis.ShopUrl, {
          params: {
            classify: this.productclassify,
          },
        })
        .then(({ data }) => {
          this.dataList = data.objects;
        });
    },
    clear() {
      this.dataList = [];
      this.getDataListclassify();
    },
  },
  created() {
    this.getDataListclassify();
  },
};
</script>
<style lang="less">
.shop-box {
  .box-main {
    width: 100%;
  }

  .item {
    float: left;
    padding: 0 0 0 6.5vw;
    .img {
      width: 150px;
      padding-bottom: 55px;

      img {
        width: 150px;
        height: 225px;
      }

      .info {
        font-size: 15px;
        color: #000;
      }
    }
  }
}
</style>
