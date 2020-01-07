<template>
  <view :style="viewStyle">
    <img src="./assets/logo.png"/>
    <p id="hello-text">Hello from vue-nodegui</p>
  </view>
</template>

<script>
export default {
  setup() {
    const viewStyle = {
      ["font-size"]: "24px",
      ["qproperty-alignment"]: "AlignHCenter"
    }

    return { viewStyle }
  }
}
</script>