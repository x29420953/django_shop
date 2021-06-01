<template>
  <div class="order">
    <van-nav-bar
      title="訂單"
      left-text="返回"
      left-arrow
      fixed
      @click-left="goBack"
    />

    <van-tabs v-model="status" @click="tabChange">
      <van-tab
        v-for="(value, key, index) in constants.ORDER_STATUS"
        :title="value"
        :name="key"
        :key="index"
      ></van-tab>
    </van-tabs>

    <div class="order-list">
      <div class="order-item" v-for="item in dataList" :key="item.id">
        <router-link style="color: #000" :to="{name: 'OrderDetail', params: {id: item.id}}">
        <div class="order-head">
          <div class="order-num">訂單編號：{{ item.number }}</div>
          <div class="order-status text-warning">{{ constants.ORDER_STATUS[item.status] }}</div>
        </div>
        <div class="order-body">
          <div class="left">
            <van-image width="50" height="75" :src="item.order[0].img" />
          </div>
          <div class="right">
            <div class="name">{{ item.order[0].product | ellipsis }}</div>
            <div class="info">x {{ item.order[0].count }}</div>
            <div class="info">$ {{ item.order[0].price }}</div>
          </div>
        </div>
        <hr>
        <div class="order-footer">
          <div class="left">
            <div class="count">{{ item.total_count }} 件商品</div>
          </div>
          <div class="right">  
            <div class="price">訂單金額: ${{ item.total_price }}</div>
          </div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { OrderApis } from "@/utils/apis";
import { ajax } from "@/utils/ajax";
import * as constants from '@/utils/constants'
export default {
  data() {
    return {
      status: 0,
      dataList: [],
      constants
    };
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 15) {
        return value.slice(0, 15) + "...";
      }
      return value;
    },
  },
  methods: {
    getDataList() {
      ajax.get(OrderApis.TotalOrderUrl, {
          params: {
            status: this.status,
          },
        }).then(({ data }) => {
        this.dataList = data.objects;
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    tabChange () {
      this.getDataList()
    },
    loadData () {
      this.status = String(this.$route.params.status)
      this.dataList = []
      this.getDataList()
    },
  },
  created () {
    this.loadData()
  }
};
</script>
<style lang="less">
.order {
  padding-top: 40px;
  .order-list {
    padding: 10px;

    .order-item {
      background-color: rgba(235, 235, 235, 0.479);
      padding: 10px;
      padding-bottom: 25px;
      margin-bottom: 10px;

      .order-head {
        display: flex;
        justify-content: space-between;

        .order-num {
          font-size: 14px;
        }
        .order-status {
          font-size: 14px;
          color: rgb(235, 7, 7);
        }
      }
      .order-body {
        padding: 10px 0;
        display: flex;

        .left {
          width: 50px;
          height: 75px;
        }
        .right {
          flex: 1;
          text-align: right;
          padding-left: 10px;

          .name {
            font-size: 16px;
            padding: 5px 0;
          }
          .info {
            font-size: 12px;
            color: #999;
          }
        }
      }
      .order-footer {
        font-size: 14px;
        .left{
          float: left;
        }
        .right{
          float: right;
        }
      }
    }
  }
}
</style>
