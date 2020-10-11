<template>
	<div>
<main>
  <article v-for="item in ids" :key="item.id">
    <img v-bind:src="images[item]" />
    <p>{{ids[item]}}</p>
    </article>
</main>
	</div>
</template>

<script>
export default {
	name: "Favorites",
	components: {},
	data() {
		return {
			ids: [],
			images: []
		};
	},
	methods: {
		// GET request
		async getImageList() {
			const res = await fetch("https://portal-tb.lynxx.co/api-test/image/list");
			const data = await res.json();
			this.data = data;
			for (var i = 0; i < data.length; i++) {
        this.ids.push(data[i].id);
			}
			console.log(this.ids);
			for (var x = 0; x < this.ids.length; x++) {
				console.log(this.ids[x]);
				this.getImage(this.ids[x]);
			}
			console.log(this.images);
		},
		getImage(title) {
			const imageAPI = "https://portal-tb.lynxx.co/api-test/image/";
			let imageTitle = title;
			this.images.push(imageAPI + imageTitle);
		}
	},
	created() {
		this.getImageList();
	}
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
main {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 20px;
  width: 100%; 
  display: grid;
  /* Define Auto Row size */
  grid-auto-rows: 100px; 
  /*Define our columns */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
  grid-gap: 10em;
}

article {
  padding: 0px;
  color: #fff;
}

article:nth-child(odd) {
  background-color: #55bae900;
}

article:nth-child(even) {
  background-color: #afbe2900;
}
img {
  max-width:300px;
  border-radius: 10px;
}
</style>
