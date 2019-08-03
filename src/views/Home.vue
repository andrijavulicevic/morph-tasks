<template>
  <div>
    todo: home page
  </div>
</template>

<script>
import { loadMostPopular } from '../api/';

export default {
  components: {
  },
  created() {
    loadMostPopular()
      .then(r => console.log(r))
      .catch(e => console.error(e));
  }
};
</script>
