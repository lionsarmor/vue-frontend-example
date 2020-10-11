
<template>
  <div>
<blockquote>
<h3 class="title">Technical assignment for a Frontend
developer position</h3>
Create a simple Vue.js application that would
contain three pages.
• The first page - would contain a list of all available
images from the given API( added below). Each
image could be identified by its name.
 It is up to you how you would like to style that list. It
can be something simple, carousel, grid, etc. We are
curious about your creativity.
• The second page - would be a list of Favorite Views.
From the given API, you can find the necessary data
to display this list.
• Third page - clicking on selected images from the
favorite list or a simple list would redirect to a fullscreen image(third page). That page should contain
the name of the image and button to come back to
the list(previous page).
As mentioned below, there are no set rules for styling
here, so create it the way that you like it.
Important:
1. Application should be created in Vue.js
2. Application should not contain jQuery or
Bootstrap(or similar)
3. Consider responsiveness
4. Use localhost:4200 to avoid CORS issues 
Here is a link to REST API documentation: https://portaltb.lynxx.co/doc/test/api.html
If you have questions about this task, contact
mantas@lynxx.co 
</blockquote>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

},
  data() { return {

}
  },
  methods: {

  },

created() {

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  color: antiquewhite;
  margin: 100px;
  margin-right: 50px;
}
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
blockquote{
  font-size: 1.4em;
  width:60%;
  margin:50px auto;
  font-family:Open Sans;
  font-style:italic;
  color: #555555;
  padding:1.2em 30px 1.2em 75px;
  border-left:8px solid #262e92 ;
  line-height:1.6;
  position: relative;
  background:#EDEDED;
}

blockquote::before{
  font-family:Arial;
  content: "\201C";
  color:#78c0a800;
  font-size:4em;
  position: absolute;
  left: 10px;
  top:-10px;
}

blockquote::after{
  content: '';
}

blockquote span{
  display:block;
  color:#333333;
  font-style: normal;
  font-weight: bold;
  margin-top:1em;
}
.title{
  margin-bottom:4%;
  margin-left:-8%;
}
</style>
