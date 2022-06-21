<template>
    <section class="main">
        <div class="card">
            <div class="head">
                <img src="@/assets/data.png" alt="logo">
                <h1>Sucess !</h1>
            </div>
            <div class="gobackButton">
                <input type="submit" value="Go Back!" class="goback" />
            </div>
        </div>
    </section>
</template>

<script>
    export default {
    name: "sucessPage",
}
</script>

<style lang="scss" scoped>
@import '@/views/sucess/sucess.scss';
</style>