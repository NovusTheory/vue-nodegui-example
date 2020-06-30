<template>
  <div :style="viewStyle">
    <img src="./assets/logo.png"/>
    <p id="hello-text">Hello from vue-nodegui</p>
    <p>Clicked Increment {{ count }} times</p>
    <button @click="inc">Increment</button>
  </div>
</template>

<script>
import { ref } from 'vue-nodegui'

export default {
  setup() {
    let count = ref(0)
    const inc = () => {
      count.value++
    }

    const viewStyle = {
      ["font-size"]: "24px",
      ["qproperty-alignment"]: "AlignHCenter"
    }

    return { viewStyle, count, inc }
  }
}
</script>