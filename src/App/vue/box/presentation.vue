<template lang="pug">
div.presentation
  section
    //div: img(src='~CivilStyle/Images/LogoIconWhite.png')
    p crea e organizza la tua community
      br
      | o segui quella più vicina a te
    div: uiButton.green(type="primary") Scopri di più
</template>

<script >
var data={

};
export default {
  data(){ return data; },
  components:{}
}
</script>

<style >

@import "UI/cssVariables.css";

.presentation {
  color: var(--color_white);
  background: var(--color_2);
  background: linear-gradient(to bottom, var(--color_2) 0%, color(var(--color_2) hue(-20%)  saturation(+30%)  )  100%);
  padding:2.5rem;
	text-align: center;

}
.presentation p{
white-space: pre;
margin-top:0;
text-shadow: 0 1px 1px  color(var(--color_1) saturation(-10%) blackness(+30%))
}

</style>
