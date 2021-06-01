<template>
  <div class="home-box">
    <h2>LEJ</h2>
    <div class="box-main">
      <a class="item" v-for="item in dataList" :key="item.id">
        <div class="img">
          <router-link :to="{ name: 'Product', params: { id: item.id } }">
            <img :src="item.imgs[0]" alt="" />
          </router-link>
        </div>
      </a>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer";
import { ajax } from "@/utils/ajax";
import { ProductsApis } from "@/utils/apis";

export default {
  data() {
    return {
      dataList: [],
    };
  },
  components: {
    Footer,
  },
  methods: {
    getDataList() {
      ajax.get(ProductsApis.IndexUrl).then(({ data }) => {
        this.dataList = data.objects;
      });
    },
  },
  created() {
    this.getDataList();
  },
};
</script>
<style lang="less">
.home-box {
  padding: 0 10px;

  .box-main {
    width: 100%;
    padding-bottom: 50px;
  }

  .item {
    .img {
      img {
        width: 300px;
        height: 450px;
      }
    }
  }
}
</style>
