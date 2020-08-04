<template>
  <section class="page-logo">
    <div class="box-logo">
      <div class="r box">&nbsp;</div>
      <div class="g box">&nbsp;</div>
      <div class="b box">&nbsp;</div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.box-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  // background: red;
  border: 1px solid #000;
  box-sizing: border-box;
  .box {
    // border: 1px solid black;
    width: 160px;
    height: 500px;
    box-shadow: 0 0 80px 8px rgba(122, 122, 122, .2);
    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }
  .r {
    border-radius: 30px 0 0 30px;
    background: linear-gradient(90deg, rgb(250, 33, 33), rgb(255, 92, 92));
  }
  .g {
    background: linear-gradient(90deg, rgb(10, 124, 10), rgb(39, 148, 39));
  }
  .b {
    border-radius: 0 30px 30px 0;
    background: linear-gradient(90deg, rgb(25, 25, 180), rgb(73, 73, 179));
  }
}
</style>
