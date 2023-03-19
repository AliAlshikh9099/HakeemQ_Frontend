<template>
  <div>
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --primary: #53a876;
  --primary-alt: #16a351;
  --section-background: #F2F6F8;
  --section-padding: 60px;
  --main-border-radius: 12px;
}
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.container {
  max-width: 90rem;
  padding-right: 30px;
  padding-left: 30px;
  margin: auto
}
</style>
