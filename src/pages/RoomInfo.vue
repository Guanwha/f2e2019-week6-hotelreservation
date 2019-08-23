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
        <div class="col-12 col-lg-6 a2-info">
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
          <div class="mx-1 room-desc txt-l">{{roomDetail.description}}</div>
          <!-- check-in & check-out -->
          <div class="row mx-1 room-inout">
            <div class="col-6 p-0 flex-ccl">
              <div>Check In</div>
              <div>{{roomDetail.checkInAndOut.checkInEarly}} ～ {{roomDetail.checkInAndOut.checkInLate}}</div>
            </div>
            <div class="col-6 p-0 flex-ccl">
              <div>Check Out</div>
              <div>{{roomDetail.checkInAndOut.checkOut}}</div>
            </div>
          </div>
          <!-- equipments -->
          <div class="row m-1 room-equip"></div>
        </div>
        <!-- room price & booking -->
        <div class="col-12 col-lg-6 a2-book">
          <div class="row">
            <!-- price -->
            <div class="col-12 col-lg-3 room-price txt-r">
              <div>NT.{{roomDetail.normalDayPrice}}</div>
              <div>平日(一~四)</div>
              <div>NT.{{roomDetail.holidayPrice}}</div>
              <div>假日(五~日)</div>
            </div>
            <!-- booked schedule -->
            <div class="col-12 col-lg-9 room-book">
              <div style='height: 200px; background: gray;'></div>
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
  height: 2000px;
  margin-top: 4%;
}

// room information
.a2-info {
  background: red;
  .room-type {
  }
  .room-info {
    margin-top: 6.44%;
  }
  .room-desc {
    margin-top: 3%;
  }
  .room-inout {
    margin-top: 10.8%;
  }
  .room-equip {
    width: 100%;
    height: 100px;
    background: $clr-gray-f0;
  }
}

// price & booking
.a2-book {
  background: blue;
  .room-price {
    background: lightblue;
  }
  .room-book {
    background: lightskyblue;
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
