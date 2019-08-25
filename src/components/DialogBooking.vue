<template>
  <div class="modal fade" :id="pID" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-w-range" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">預約時段</h5>
        </div>
        <div class="modal-body">
          <form>
            <!-- name -->
            <div class="form-group row">
              <label for="inputName" class="col-md-4 col-form-label txt-l">姓名</label>
              <div class="col-md-8">
                <input type="text" class="form-control" id="inputName" placeholder="Name">
              </div>
            </div>
            <!-- phone -->
            <div class="form-group row">
              <label for="inputPhone" class="col-md-4 col-form-label txt-l">電話</label>
              <div class="col-md-8">
                <input type="tel" class="form-control" id="inputPhone" placeholder="Phone">
              </div>
            </div>
            <!-- date -->
            <div class="form-group row row-datepicker">
              <label for="inputPhone" class="col-md-4 col-form-label txt-l">預約起訖</label>
              <div class="col-md-8">
                <!-- <input type="tel" class="form-control" id="inputPhone" placeholder="Phone"> -->
                <v-date-picker id="inputDate"
                               mode="range"
                               :input-props='{
                                 class: "vc-appearance-none vc-border vc-rounded-none vc-border-gray-400 vc-w-full vc-py-2 vc-px-3 vc-text-gray-800 vc-bg-white vc-leading-tight focus:vc-outline-none focus:vc-shadow-outline"
                               }'
                               :popover='{ visibility: "focus" }'
                               v-model='dateRange'
                               is-expanded/>
              </div>
            </div>
            <!-- price detail -->
            <div class="form-group row row-price-bg flex-ccsb">
              <!-- normal days -->
              <div class="price-item flex-rsbc">
                <div class="name">平日時段</div>
                <div class="days">{{normalPriceDays}}</div>
              </div>
              <!-- holiday days -->
              <div class="price-item flex-rsbc">
                <div class="name">假日時段</div>
                <div class="days">{{holidayPriceDays}}</div>
              </div>
            </div>
            <!-- total price -->
            <div class="form-group row row-total-price">
              <div class="col-12 txt-r">{{totalPrice}}</div>
            </div>
            <!-- buttons -->
            <div class="form-group row row-buttons">
              <div class="col-6">
                <button type="button" class="btn btn-cancel" data-dismiss="modal">取消</button>
              </div>
              <div class="col-6">
                <button type="submit" class="btn btn-confirm">確定預約</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogBooking',
  props: {
    pID: String,
  },
  data() {
    return {
      dateRange: {},
    };
  },
  computed: {
    normalPriceDays() {
      return 'NT.xxxx (1夜)';
    },
    holidayPriceDays() {
      return 'NT.yyyy (1夜)';
    },
    totalPrice() {
      return 'NT.2850';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/mixins';
@import '../styles/variables';
$side-width: 2rem;

// modify bootstrap defaul
.modal-w-range {
  min-width: 280px;
  max-width: 400px;
}
.modal-content {
  border-radius: 0;
}
.modal-title {
  font-size: $f-size-4;
  color: $clr-black;
  letter-spacing: 2.51px;
  text-align: center;
}
.modal-body {
  padding: 1rem $side-width 2rem;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}

// custom
.row-datepicker {
  margin-bottom: 2rem;
}
.row-price-bg {
  background: $clr-gray-f0;
  @include mx(-$side-width);
  padding: 1rem 0;
}
.price-item {
  font-size: $f-size-1;
  line-height: 1.5;
  color: $clr-font-lv2;
  letter-spacing: 1.25px;
  margin: 0 10%;
}
.row-total-price {
  font-size: $f-size-4;
  line-height: 1.5;
  color: $clr-font-notice;
  letter-spacing: 2.72px;
  margin-bottom: 2rem;
}
.row-buttons {
  margin-bottom: 0;
}
.btn-cancel {
  font-size: $f-size-2;
  color: $clr-font-lv2;
  background: $clr-cancel;
  &:hover {
    background: $clr-cancel * 0.85;
  }
}
.btn-confirm {
  font-size: $f-size-2;
  color: $clr-white;
  background: $clr-confirm;
  &:hover {
    background: $clr-confirm * 0.1;
  }
  &:disabled {
    background: $clr-confirm * 1.5;
  }
}
</style>
