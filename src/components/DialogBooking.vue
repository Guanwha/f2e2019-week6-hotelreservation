<template>
  <div class="modal fade" :id="pID" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">預約時段</h5>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-6">
                <button type="submit" class="btn btn-secondary" data-dismiss="modal">取消</button>
              </div>
              <div class="col-6">
                <button type="submit" class="btn btn-primary">確定預約</button>
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
};
</script>

<style lang="scss" scoped>

</style>
