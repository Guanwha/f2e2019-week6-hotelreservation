<template>
  <div class="wrap">
    <div class="a1-header position-relative">
      <!-- logo -->
      <div class="logo position-absolute" @click="back()">
        <img src="../assets/logo_block.svg" alt="">
      </div>
      <!-- images -->
      <div class="a1-images position-absolute fixed-top flex-rcc">
        <div class="img1 flex-2" :style="{ 'background-image': 'url(' + roomDetail.imageUrl[0] + ')' }"></div>
        <div class="img23 flex-1 flex-ccc">
          <div class="img2 flex-1" :style="{ 'background-image': 'url(' + roomDetail.imageUrl[1] + ')' }"></div>
          <div class="img3 flex-1" :style="{ 'background-image': 'url(' + roomDetail.imageUrl[2] + ')' }"></div>
        </div>
      </div>
    </div>
    <div class="container a1-content">
      <div class="row">
        <!-- room information -->
        <div class="col-12 col-lg-5 a2-info">
          <!-- room type -->
          <div class="mx-1 room-type txt-l">{{roomDetail.name}}</div>
          <!-- room info -->
          <div class="mx-1 room-info txt-l">
            <div>房客人數限制：{{roomDetail.descriptionShort.GuestMin}}～{{roomDetail.descriptionShort.GuestMax}} 人</div>
            <div>床型：{{roomDetail.descriptionShort.Bed[0]}}</div>
            <div>衛浴數量：{{roomDetail.descriptionShort['Private-Bath']}} 間</div>
            <div>房間大小：{{roomDetail.descriptionShort.Footage}} 平方公尺</div>
          </div>
          <!-- room description -->
          <div class="mx-1 room-desc txt-j">{{roomDetail.description}}</div>
          <!-- check-in & check-out -->
          <div class="row mx-1 room-inout">
            <div class="col-7 p-0 flex-ccl">
              <div class='title'>Check In</div>
              <div class='time'>{{roomDetail.checkInAndOut.checkInEarly}} ～ {{roomDetail.checkInAndOut.checkInLate}}</div>
            </div>
            <div class="col-5 p-0 flex-ccl">
              <div class='title'>Check Out</div>
              <div class='time'>{{roomDetail.checkInAndOut.checkOut}}</div>
            </div>
          </div>
          <!-- equipments -->
          <div class="row room-equip">
            <div class="col-6 col-md-4 col-lg-6 col-xl-4 amenity flex-rlc"
                 :class="[{ 'disabled': !roomDetail.amenities['Wi-Fi']}]">
              <img src='../assets/amenity_wifi.svg'>
              <p class='txt ml-3'>Wi-Fi</p>
            </div>
            <div class="col-6 col-md-4 col-lg-6 col-xl-4 amenity flex-rlc"
                 :class="[{ 'disabled': !roomDetail.amenities['Television']}]">
              <img src='../assets/amenity_television.svg'>
              <p class='txt ml-3'>電視</p>
            </div>
            <div class="col-6 col-md-4 col-lg-6 col-xl-4 amenity flex-rlc"
                 :class="[{ 'disabled': !roomDetail.amenities['Great-View']}]">
              <img src='../assets/amenity_great_view.svg'>
              <p class='txt ml-3'>漂亮的視野</p>
            </div>

            <div class="col-6 col-md-4 col-lg-6 col-xl-4 amenity flex-rlc"
                 :class="[{ 'disabled': !roomDetail.amenities['Breakfast']}]">
              <img src='../assets/amenity_breakfast.svg'>
              <p class='txt ml-3'>早餐</p>
            </div>
            <div class="col-6 col-md-4 col-lg-6 col-xl-4 amenity flex-rlc"
                 :class="[{ 'disabled': !roomDetail.amenities['Air-Conditioner']}]">
              <img src='../assets/amenity_air_conditioner.svg'>
              <p class='txt ml-3'>空調</p>
            </div>
            <div class="col-6 col-md-4 col-lg-6 col-xl-4 amenity flex-rlc"
                 :class="[{ 'disabled': !roomDetail.amenities['Smoke-Free']}]">
              <img src='../assets/amenity_smoke_free.svg'>
              <p class='txt ml-3'>禁止吸菸</p>
            </div>

            <div class="col-6 col-md-4 col-lg-6 col-xl-4 amenity flex-rlc"
                 :class="[{ 'disabled': !roomDetail.amenities['Mini-Bar']}]">
              <img src='../assets/amenity_mini_bar.svg'>
              <p class='txt ml-3'>Ｍini-Bar</p>
            </div>
            <div class="col-6 col-md-4 col-lg-6 col-xl-4 amenity flex-rlc"
                 :class="[{ 'disabled': !roomDetail.amenities['Refrigerator']}]">
              <img src='../assets/amenity_refrigerator.svg'>
              <p class='txt ml-3'>冰箱</p>
            </div>
            <div class="col-6 col-md-4 col-lg-6 col-xl-4 amenity flex-rlc"
                 :class="[{ 'disabled': !roomDetail.amenities['Child-Friendly']}]">
              <img src='../assets/amenity_child_friendly.svg'>
              <p class='txt ml-3'>適合兒童</p>
            </div>

            <div class="col-6 col-md-4 col-lg-6 col-xl-4 amenity flex-rlc"
                 :class="[{ 'disabled': !roomDetail.amenities['Room-Service']}]">
              <img src='../assets/amenity_room_service.svg'>
              <p class='txt ml-3'>Room Service</p>
            </div>
            <div class="col-6 col-md-4 col-lg-6 col-xl-4 amenity flex-rlc"
                 :class="[{ 'disabled': !roomDetail.amenities['Sofa']}]">
              <img src='../assets/amenity_sofa.svg'>
              <p class='txt ml-3'>沙發</p>
            </div>
            <div class="col-6 col-md-4 col-lg-6 col-xl-4 amenity flex-rlc"
                 :class="[{ 'disabled': !roomDetail.amenities['Pet-Friendly']}]">
              <img src='../assets/amenity_pet_friendly.svg'>
              <p class='txt ml-3'>寵物攜帶</p>
            </div>
          </div>
        </div>
        <!-- room price & booking -->
        <div class="col-12 col-lg-7 a2-book">
          <div class="row">
            <!-- price -->
            <div class="col-12 col-lg-4 room-price txt-r">
              <div class='price normal'>NT.{{roomDetail.normalDayPrice}}</div>
              <div class='txt'>平日(一~四)</div>
              <div style='height: 14px'/>
              <div class='price holiday'>NT.{{roomDetail.holidayPrice}}</div>
              <div class='txt'>假日(五~日)</div>
            </div>
            <!-- booked schedule -->
            <div class="col-12 col-lg-8 room-book">
              <div style='height: 400px; background: gray;'></div>
              <div style='height: 26px'/>
              <div class="button">預約時段</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'RoomInfo',
  data() {
    return {
      roomID: this.$route.params.id,
    };
  },
  mounted() {
    this.getRoom(this.$route.params.id);
  },
  methods: {
    back() {
      this.$router.back();
    },
    ...mapActions(['getRoom']),
  },
  computed: {
    ...mapGetters(['roomDetail', 'roomBooking']),
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.wrap {
  width: 100%;
  height: 100%;
  background: $clr-white;
}

// header
.a1-header {
  width: 100%;
  height: 33%;
  @media (min-width: $limit-w-pc) {
    height: 66%;
  }
}
.logo {
  top: 5.37%;
  left: 4%;
  z-index: 1;
  &:hover {
    filter: drop-shadow(0 0 9px $clr-white);
  }
}
.a1-images {
  width: 100%;
  height: 100%;
  z-index: 0;
}
.img1 {
  height: 100%;
  background-size: cover;
}
.img23 {
  height: 100%;
  .img2 {
    width: 100%;
    background-size: cover;
  }
  .img3 {
    width: 100%;
    background-size: cover;
  }
}

// content
.a1-content {
  margin-top: 4%;
}

// room information
.a2-info {
  // background: red;
  .room-type {
    font-size: $f-size-6;
    font-weight: bold;
  }
  .room-info {
    margin-top: 6.44%;
    font-size: $f-size-2;
    letter-spacing: 1.46px;
    line-height: 2;
  }
  .room-desc {
    margin-top: 3%;
    font-size: $f-size-2;
    letter-spacing: 1.25px;
    line-height: 2;
  }
  .room-inout {
    margin-top: 10.8%;
    .title {
      font-size: $f-size-2;
      letter-spacing: 1.46px;
      line-height: 1.5;
    }
    .time {
      font-size: $f-size-3;
      letter-spacing: 2.19px;
      line-height: 1.5;
    }
  }
  .room-equip {
    background: $clr-gray-f0;
    margin: 8.3% auto;
    .amenity {
      margin: 15px 0;
      img {
        width: 26px;
        height: 26px;
      }
      .txt {
        font-size: $f-size-1;
        letter-spacing: 1.25px;
        line-height: 1.5;
      }
    }
    .disabled {
      filter: invert(100%);
      color: #4c4c4c;
    }
  }
}

// price & booking
.a2-book {
  // background: blue;
  .room-price {
    // background: lightblue;
    line-height: 1.5;
    margin: 14px auto;

    .price {
      color: $clr-font-lv1;
    }
    .normal {
      font-size: $f-size-5;
      letter-spacing: 3.13px;
    }
    .holiday {
      font-size: $f-size-2;
      letter-spacing: 1.67px;
    }
    .txt {
      color: $clr-font-lv2;
      font-size: $f-size-1;
      letter-spacing: 1.46px;
    }
  }
  .room-book {
    // background: lightskyblue;
    .button {
      width: 118px;
      height: 53px;
      background: $clr-gray-57;
      color: $clr-white;
      line-height: 53px;
    }
  }
}
</style>
