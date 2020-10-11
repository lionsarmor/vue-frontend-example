
<template>
  <div>
<img src="images[1]" />
  </div>
</template>

<script>
export default {
  name: 'Favorites',
  components: {
},
  data() { 
    return {
      ids:[],
      images:[]
}
  },
  methods: {
  // GET request 
  async getImageList() {
      const res = await fetch('https://portal-tb.lynxx.co/api-test/image/list');
      const data = await res.json();
      this.data = data;

      for (var i = 0; i < data.length; i++){
              this.ids.push(data[i].id)
      }
        console.log(this.ids);
      for (var x = 0; x < this.ids.length; x++){
              console.log(this.ids[x]);
              this.getImage(this.ids[x]);
      }
        console.log(this.images)
    },

  getImage(title) {
      const imageAPI = 'https://portal-tb.lynxx.co/api-test/image/'
      let   imageTitle = title;
      let image
      fetch(imageAPI + imageTitle)
        .then(response => response.blob())
        .then(images => {
      image = URL.createObjectURL(images)






      console.log(image);
      this.images.push(image);
  })
  }
  },
created() {
this.getImageList();
}
}
</script>

<style scoped>

</style>
