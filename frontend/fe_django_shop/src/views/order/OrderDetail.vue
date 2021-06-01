<template>
  <div class="order-list">
    <van-nav-bar
      title="訂單明細"
      left-text="返回"
      left-arrow
      fixed
      @click-left="goBack"
    />
    <div class="order-list">
      <div class="order-item" v-for="item in dataList" :key="item.id">
        <div class="order-head">
          
        </div>
        <div class="order-body" v-for="orderitem in item.order" :key="orderitem.id">
          <div class="left">
            <router-link
            :to="{ name: 'Product', params: { id: orderitem.product_id } }"
          >
            <van-image width="50" height="75" :src="orderitem.img" />
            </router-link>
          </div>
          <div class="right">
            <div class="name">{{ orderitem.product | ellipsis }}</div>
            <div class="info">x {{ orderitem.count }}</div>
            <div class="info">$ {{ orderitem.price }}</div>
            <hr>
          </div>
        </div>
        <div class="order-m">
          <div class="left">
            <div>訂單件數: </div>
            <div>訂單金額: </div>
          </div>
        <div class="right">  
            <div>x {{ item.total_count }}</div>
            <div>${{ item.total_price }}</div>
        </div>
        </div>
        <hr>
        <van-cell-group>
            <van-cell title="訂單編號 :" :value=item.number />
            <van-cell title="訂單狀態 :" :value=constants.ORDER_STATUS[item.status] />
            <van-cell title="建立時間 :" :value=item.created_at />
            <van-cell title="更新時間 :" :value=item.update_at />
            <hr>
            <van-cell title="宅配方式 :" value='' />
            <van-cell title="付款方式 :" value='' />
            <hr>
            <van-cell title="收件人姓名 :" :value=item.name />
            <van-cell title="收件人手機 :" :value=item.phone />
            <van-cell title="收件人地址 :" :value=item.address />
        </van-cell-group>
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
      id: "",
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
    }
  },
  methods: {
    getDataList() {
      const url = OrderApis.TotalOrderDetailUrl.replace("#{id}", this.id);
      ajax.get(url).then(({ data }) => {
        this.dataList = data.objects;
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  created () {
    this.id = this.$route.params.id;
    this.getDataList()
  }
};
</script>
<style lang="less">
.order-list {
  padding-top: 40px;
  .order-list {
    padding: 10px;

    .order-item {
      background-color: rgba(235, 235, 235, 0.479);
      padding: 10px;
      padding-bottom: 40px;
      margin-bottom: 10px;

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
      .order-m {
        font-size: 12px;
        padding-bottom: 30px;
        .right{
            text-align: right;
            float: right;
        }
        .left{
            text-align: left;
            float: left;
        }
      }
    }
  }
}
</style>
