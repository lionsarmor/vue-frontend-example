<template>
	<div>
<main>
  <article v-for="item in ids" :key="item.images">
    <span style="cursor:pointer" @click="openNav(item)">
    <img v-bind:src="'https://portal-tb.lynxx.co/api-test/image/'+ [item]" class="img-small" />
    <p>Title: {{item}}</p>
    </span>
    </article>
</main>
<div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
  <div class="overlay-content">
    <img v-bind:src="'https://portal-tb.lynxx.co/api-test/image/'+ [number]" class="img-big" />
        <p>Title : {{number}}</p>
  </div>
</div>
	</div>
</template>

<script>
export default {
	name: "Favorites",
	components: {},
	data() {
		return {
			ids: [],
      images: [],
      number: 0
		};
	},
	methods: {
    openNav(number) {
    this.number = number;
    console.log(number)
    document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
    document.getElementById("myNav").style.width = "0%";
    },
	// GET request
	async getImageList() {
      const res = await fetch("https://portal-tb.lynxx.co/api-test/image/list");
			const data = await res.json();
      this.data = data;
			for (var i = 0; i < data.length; i++) {
		if (data[i].favourite == true) {
        this.ids.push(data[i].name)
		}
      }
    },
    
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
.img-small {
  max-width:300px;
  border-radius: 10px;
}
.img-big {
  width: 90%;
  height: auto;
}
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 5%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  color: #fff;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
}
</style>
