<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  background-color: #fceed1;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #7d3cff;
  font-size: 25px;
}

#nav ul {
  margin: 0;
  padding: 0;
  display: inline-block;
}

#nav a:hover {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23ff9800' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
  background-position: 0 100%;
  background-size: auto 6px;
  background-repeat: repeat-x;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ff8928;
}

body {
  margin: 0px;
  padding: 0px;
}

.container {
  width: 1200px;
  margin: 10px auto;
  columns: 4;
}
.container .gallery {
  width: 100%;
  margin: 0 0 20px;
  padding: 0px;
  overflow: hidden;
  
}

.container .gallery img {
  max-width: 100%;
  /* padding: 1px; */
  margin: 6px;
  border: 4px solid #7d3cff;
}

@media (max-width: 1200px) {
  .container {
    columns: 3;
    width: calc(100% - 40px);
    box-sizing: border-box;
    padding: 20px 20px 20px 0;
  }
}

@media (max-width: 768px) {
  .container {
    columns: 2;
  }
}

@media (max-width: 500px) {
  .container {
    columns: 1;
  }
}

.editor img{
width: 100%;
height: auto;
}

</style>
