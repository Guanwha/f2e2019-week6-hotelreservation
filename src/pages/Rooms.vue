<template>
  <div class="wrap" :style="{ 'background-image': 'url(' + headerBg + ')' }">
    <div class="container">
      <div class="row a1-header">
        <!-- header -->
        <div class="col-12 flex-ccc">
          <!-- logo -->
          <img src='../assets/logo_white.svg'>
          <!-- contact -->
          <div class="flex-rcc a2-contact">
            <!-- social media -->
            <div class="flex-rcc">
              <img class="brand-icon" src="../assets/brand_instagram.svg" alt="">
              <img class="brand-icon" src="../assets/brand_facebook.svg" alt="">
            </div>
            <!-- line -->
            <div class="contact-line"/>
            <!-- contact information -->
            <div class="flex-ccl">
              <!-- info: phone -->
              <div class="flex-rlc contact-detail">
                <img class="icon" src="../assets/icon_phone.svg" alt="">
                <p>02-17264937</p>
              </div>
              <!-- info: envelope -->
              <div class="flex-rlc contact-detail">
                <img class="icon" src="../assets/icon_envelope.svg" alt="">
                <p>whitespace@whitespace.com.tw</p>
              </div>
              <!-- info: home -->
              <div class="flex-rlc contact-detail">
                <img class="icon" src="../assets/icon_home.svg" alt="">
                <p>台北市羅斯福路十段30號</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row a1-rooms"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rooms',
  data() {
    return {
      headerBg: 'https://images.unsplash.com/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',   // [Temp]
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.wrap {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
}
.a1-header {
  padding-top: 13%;
  padding-bottom: 155px;
}
.a2-contact {
  width: 100%;
  margin-top: 4%;
}
.brand-icon {
  height: $f-size-2 * 1.5;
  width: $f-size-2 * 1.5;
  margin: $f-size-1 * 0.5;
}
.contact-line {
  width: 1px;
  height: $f-size-3 * 1.5 * 3;
  margin: 0 $f-size-2 * 1.5;
  background: $clr-white;
}
.contact-detail {
  color: $clr-white;
  line-height: $f-size-3 * 1.5;
  .icon {
    height: $f-size-3;
    width: $f-size-3;
    margin: $f-size-3 * 0.25 0;
    margin-right: $f-size-3;
  }
}
</style>
