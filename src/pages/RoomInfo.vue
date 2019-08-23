<template>
  <div class="wrap">
    <div class="a1-header position-relative">
      <!-- logo -->
      <div class="logo position-absolute">
        <img src="../assets/logo_block.svg" alt="">
      </div>
      <!-- images -->
      <div class="a1-images position-absolute fixed-top flex-rcc">
        <div class="img1 flex-2"></div>
        <div class="img23 flex-1 flex-ccc">
          <div class="img2 flex-1"></div>
          <div class="img3 flex-1"></div>
        </div>
      </div>
    </div>
    <div class="container a1-content">
      <div class="row">
        <!-- room information -->
        <div class="col-12 col-lg-6 a2-info">
          <!-- room type -->
          <div class="mx-1 room-type">{{room.name}}</div>
          <!-- room info -->
          <div class="mx-1 room-info">
            <div>房客人數限制：{{room.descriptionShort.GuestMin}}～{{room.descriptionShort.GuestMax}} 人</div>
            <div>床型：{{room.descriptionShort.Bed[0]}}</div>
            <div>衛浴數量：{{room.descriptionShort.Private-Bath}} 間</div>
            <div>房間大小：{{room.descriptionShort.Footage}} 平方公尺</div>
          </div>
          <!-- room description -->
          <div class="mx-1 room-desc">{{room.description}}</div>
          <!-- check-in & check-out -->
          <div class="row mx-1 room-inout">
            <div class="col-6 p-0 flex-ccl">
              <div>Check In</div>
              <div>{{room.checkInAndOut.checkInEarly}} ～ {{room.checkInAndOut.checkInLate}}</div>
            </div>
            <div class="col-6 p-0 flex-ccl">
              <div>Check Out</div>
              <div>{{room.checkInAndOut.checkOut}}</div>
            </div>
          </div>
          <!-- equipments -->
          <div class="row m-1 room-equip"></div>
        </div>
        <!-- room price & booking -->
        <div class="col-12 col-lg-6 a2-book">
          <div class="row">
            <!-- price -->
            <div class="col-12 col-lg-3 room-price">
              <div>NT.{{room.normalDayPrice}}</div>
              <div>平日(一~四)</div>
              <div>NT.{{room.holidayPrice}}</div>
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
      room: {
        id: '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu',
        name: 'Single Room',
        imageUrl: [
          'https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
          'https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          'https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80',
        ],
        normalDayPrice: 1380,
        holidayPrice: 1500,
        descriptionShort: {
          GuestMin: 1,
          GuestMax: 1,
          Bed: [
            'Single',
          ],
          'Private-Bath': 1,
          Footage: 18,
        },
        description: 'Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom.',
        checkInAndOut: {
          checkInEarly: '15:00',
          checkInLate: '19:00',
          checkOut: '10:00',
        },
        amenities: {
          'Wi-Fi': true,
          Breakfast: true,
          'Mini-Bar': false,
          'Room-Service': false,
          Television: true,
          'Air-Conditioner': true,
          Refrigerator: true,
          Sofa: false,
          'Great-View': false,
          'Smoke-Free': true,
          'Child-Friendly': false,
          'Pet-Friendly': true,
        },
      },
    };
  },
  mounted() {
    this.getRoom(this.$route.params.id);
  },
  methods: {
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
}
.a1-images {
  width: 100%;
  height: 100%;
  z-index: 0;
}
.img1 {
  height: 100%;
  background: red;
}
.img23 {
  height: 100%;
  .img2 {
    width: 100%;
    background: green;
  }
  .img3 {
    width: 100%;
    background: blue;
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
    text-align: left;
  }
  .room-info {
    text-align: left;
    margin-top: 6.44%;
  }
  .room-desc {
    text-align: left;
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
    text-align: right;
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
