<template>
<header>
  <h1 @click=changeTitle>{{title}}</h1>
</header>

</template>

<script>
import {bus} from '../main'
export default {
  props: ["title"],
  data() {
    return {
      newTitle: "From Header Vue Emitting"
    };
  },
  methods: {
    changeTitle() {
      // this.$emit("emitChangeTitle", this.newTitle);
      bus.$emit('emitToBus', this.newTitle)
    }
  }
};
</script>

<style scoped>
header {
  height: 70px;
  background: #2ca58d;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
}
</style>
