<template>
  <div class="wrap flex-ccc">
    {{roomID}}
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
    ...mapActions(['getRoom']),
  },
  computed: {
    ...mapGetters(['roomDetail', 'roomBooking']),
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: lightseagreen;
}
</style>
