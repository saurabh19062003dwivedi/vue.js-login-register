<template>
  <div>
    <div class="sidebar sidebar-dark bg-dark">
      <ul class="list-unstyled">
          <div class="sidebar">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>    
      </ul>
    </div>
  <div class="content">
  <h2>Responsive Sidebar Example</h2>
  <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
  <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
  <h3>Resize the browser window to see the effect.</h3>
  </div>
  </div>

</template>
<style>
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>

<script>
import ROUTER from "router";
export default {
};
</script>