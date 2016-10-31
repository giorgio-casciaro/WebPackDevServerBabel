<template lang="pug">
.userBox
  .avatar
    uiIcon.utente(icon="utente")
    uiIcon.impostazioni(icon="impostazioni")
  h3 Marco De Masi
  a segui
    strong 5+
  a segui
    strong 5+
</template>

<script >
export default {
  props:{
    auth:{
      required:true
    }
  }
}
</script>
<style>
@import "UI/cssVariables.css";
.userBox{}
.userBox .avatar{  width: 15rem; position: relative; margin: auto}
.userBox .avatar .utente{ display: block;background: rgba(0, 0, 0, 0.5); border-radius: 15rem; overflow: hidden; }
.userBox .avatar .utente:before{ width: auto; line-height: 15rem; height: 15rem; font-size: 15rem; display: block; margin-top: 2rem; margin-bottom: -2rem;}
.userBox .avatar .impostazioni{ position: absolute; top:0;line-height: 0; right:0}
</style>
