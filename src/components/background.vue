<template>
<div>
    <div class="outerStyle">
        <img src="../assets/bg-animation/swirl1.svg" class="style bgElements" :style="{ top: y[0] + 'px', left: x[0] + 'px' }" >
        <img src="../assets/bg-animation/swirl1.svg" class="style bgElements" :style="{ top: y[4] + 'px', left: x[6] + 'px' }" >
        <img src="../assets/bg-animation/swirl2.svg" class="style bgElements " :style="{ top: y[1] + 'px', left: x[1] + 'px' }" >
        <img src="../assets/bg-animation/small-flower.svg" class="style bgElements" :style="{ top: y[2] + 'px', left: x[2] + 'px' }" >
        <img src="../assets/bg-animation/swirl2.svg" class="style bgElements" :style="{ top: y[3] + 'px', left: x[3] + 'px' }" >
        <img src="../assets/bg-animation/swirl2.svg" class="style bgElements" :style="{ top: y[4] + 'px', left: x[4] + 'px' }" >
        <img src="../assets/bg-animation/swirl1.svg" class="style bgElements" :style="{ top: y[5] + 'px', left: x[5] + 'px' }" >
        <img src="../assets/bg-animation/small-flower.svg" class="style bgElements" :style="{ top: y[6] + 'px', left: x[6] + 'px' }" >
        <img src="../assets/bg-animation/swirl2.svg" class="style bgElements" :style="{ top: y[7] + 'px', left: x[7] + 'px' }" >
        <img src="../assets/bg-animation/swirl1.svg" class="style bgElements" :style="{ top: y[8] + 'px', left: x[8] + 'px' }" >
        <img src="../assets/bg-animation/small-flower.svg" class="style bgElements" :style="{ top: y[8] + 'px', left: x[18] + 'px' }" >
        <img src="../assets/bg-animation/swirl1.svg" class="style bgElements" :style="{ top: y[20] + 'px', left: x[3] + 'px' }" >
        <img src="../assets/bg-animation/swirl2.svg" class="style bgElements" :style="{ top: y[4] + 'px', left: x[4] + 'px' }" >
        <img src="../assets/bg-animation/small-flower.svg" class="style bgElements" :style="{ top: y[14] + 'px', left: x[11] + 'px' }" >
        <img src="../assets/bg-animation/swirl2.svg" class="style bgElements" :style="{ top: y[19] + 'px', left: x[19] + 'px' }" >
        <img src="../assets/bg-animation/swirl1.svg" class="style bgElements" :style="{ top: y[20] + 'px', left: x[20] + 'px' }" >

        <img src="../assets/bg-animation/small-flower.svg" class="style bgElements" :style="{ top: y[21] + 'px', left: x[21] + 'px' }" >
        <img src="../assets/bg-animation/swirl2.svg" class="style bgElements" :style="{ top: y[22] + 'px', left: x[22] + 'px' }" >
        <img src="../assets/bg-animation/swirl1.svg" class="style bgElements" :style="{ top: y[23] + 'px', left: x[23] + 'px' }" >
        <img src="../assets/bg-animation/swirl1.svg" class="style bgElements" :style="{ top: y[24] + 'px', left: x[24] + 'px' }" >
        <img src="../assets/bg-animation/swirl1.svg" class="style bgElements" :style="{ top: y[25] + 'px', left: x[25] + 'px' }" >
    <!-- <img v-for="y in y" :key="y.index" class="style" v-for="bgImage in bgImages" :key="bgImage.name" :src="bgImage.url " :style="{ top: y + 'px', left: x + 'px'}"> -->
    </div>

    <div class="outerStyle">
        <img src="../assets/bg-animation/main-flower3.svg" class="style fgElements" :style="{ top: y[9] + 'px', left: x[9] + 'px' }" >
        <img src="../assets/bg-animation/main-flower2.svg" class="style fgElements " :style="{ top: y[10] + 'px', left: x[10] + 'px' }" >
        <img src="../assets/bg-animation/main-flower1.svg" class="style fgElements" :style="{ top: y[11] + 'px', left: x[11] + 'px' }" >
        <img src="../assets/bg-animation/main-flower3.svg" class="style fgElements" :style="{ top: y[12] + 'px', left: x[12] + 'px' }" >
        <img src="../assets/bg-animation/main-flower1.svg" class="style fgElements" :style="{ top: y[13] + 'px', left: x[3] + 'px' }" >
        <img src="../assets/bg-animation/main-flower1.svg" class="style fgElements" :style="{ top: y[14] + 'px', left: x[14] + 'px' }" >
        <img src="../assets/bg-animation/main-flower1.svg" class="style fgElements" :style="{ top: y[15] + 'px', left: x[15] + 'px' }" >
        <img src="../assets/bg-animation/main-flower2.svg" class="style fgElements" :style="{ top: y[16] + 'px', left: x[16] + 'px' }" >
        <img src="../assets/bg-animation/main-flower3.svg" class="style fgElements" :style="{ top: y[17] + 'px', left: x[17] + 'px' }" >
        <img src="../assets/bg-animation/main-flower1.svg" class="style fgElements" :style="{ top: y[3] + 'px', left: x[2] + 'px' }" >
        <img src="../assets/bg-animation/main-flower2.svg" class="style fgElements" :style="{ top: y[8] + 'px', left: x[6] + 'px' }" >
        <img src="../assets/bg-animation/main-flower3.svg" class="style fgElements" :style="{ top: y[4] + 'px', left: x[13] + 'px' }" >
    </div>
</div>
</template>

<script>

import gsap from 'gsap'

export default {

  data: () => ({
    
    bgImages: [
        {
            name: "swirl1",
            url:  require("../assets/bg-animation/swirl1.svg"),

        },

        {
            name: "swirl2",
            url:  require("../assets/bg-animation/swirl2.svg"),
        },

        {
            name: "smallFlower",
            url:  require("../assets/bg-animation/small-flower.svg"),
        },
        
    ],

    y: [],
    x: []
  }),

 mounted: function(){



    const bgtl = gsap.timeline();

    bgtl.add();

    bgtl.fromTo('.bgElements', 6, {
      x:0,
      y:0,
      opacity:0.2,
      transformOrigin:"50% 50%",
      rotation:360,
      ease: 'power0'
    }, {
      x:0,
      y:0,
      transformOrigin:"50% 50%",
      rotation:-360,
      repeat:-1,
      ease:'power0'
    }, 0.5)

     bgtl.fromTo('.fgElements', 3, {
      x:0,
      y:0,
      opacity:0,
      scaleY:.55,
      scaleX:.55,
      transformOrigin:"50% 50%",
    }, {
      x:0,
      y:0,
      scaleY:1,
      scaleX:1,
      transformOrigin:"50% 50%",
      opacity:1,
      repeat:-1,
      ease:'power0',
      yoyo:true
    }, 0.5)

 },

  created() {

    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

     function getRandomNumber(min, max) {
        
        return Math.random() * (max - min) + min;
        
    }

    do {

        console.log("less")

        
        let randomTop = getRandomNumber(0, winHeight);
        let randomLeft = getRandomNumber(0, winWidth);

            
        console.log(randomTop +"px")
        console.log(randomLeft +"px")


        this.y.push(randomTop)
        this.x.push(randomLeft)
        console.log(this.y)

        getRandomNumber();

    } while (this.y.length <= 25 ) 


}
}

</script>

<style>

body {
  overflow:hidden;
}

.style {
    width: 50px;
    position:absolute;
    z-index: 0;
    padding:0.5em;

}


</style>