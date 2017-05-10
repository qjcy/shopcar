/**
 * Created by lqj on 2017/5/4.
 */
var vm = new Vue({
    el: "#app",
    data: {
        totalMoney:0,
        productList: []
    },
    filters: {

    },
    mounted: function () {
        this.cartView();
    },
    methods: {
        cartView: function () {
            var _this = this;
            this.$http.get("data/cartData.json",{"id":123}).then(function (res) {
                _this.productList = res.data.result.list;
                _this.totalMoney = res.data.result.totalMoney;
            });
        }
    }
})