<template>
    <div v-if="show" class="loader">
        <div class="loader-box">
            <div class="loader-show">
                <div class="line"></div>
            </div>
            <div class="loader-show">
                <div class="line"></div>
            </div>
            <div class="loader-show">
                <div class="line"></div>
            </div>
            <div class="loader-show">
                <div class="line"></div>
            </div>
            <div class="loader-show">
                <div class="line"></div>
            </div>
        </div>
        <div :class="tipPosition==='top'?'loader-tip-top':'loader-tip-bottom'">
            {{tips}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ScreenLoading",
        data(){
            return{
                tips:"LOADING",
                show:false,
                tipPosition:'top'
            }
        }
    }
</script>

<style src="./css/ScreenLoading.css">

</style>
