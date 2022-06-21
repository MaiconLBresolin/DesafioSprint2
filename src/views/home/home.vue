<template>
    <div class="main">
        <form id="form">
            <div class="head">
                <img class="img" src="@/assets/data.png" alt="Header Image">
                <h1 class="title">Intern Sign Up</h1>
            </div>
            <section class="card">
                <div class="inputcontainer fullnameArea">
                    <label for="name">Full Name *</label>
                    <InputCont type="text" id="name" place="Name" />
                    <p id="name-err">Name Invalid</p>
                </div>

                <div class="inputcontainer emailArea">
                    <label for="email">Email *</label>
                    <InputCont type="email" id="email" place="foo@bar.com" />
                    <p id="email-err">Email Invalid</p>
                </div>

                <div class="inputcontainer phoneArea">
                    <label for="phone"> Phone *</label>
                    <InputCont type="text" id="phone" class="phoneInput" place="(00)00000-0000"/>
                    <p id="phone-err">Phone Invalid</p>
                </div>

                <div class="inputcontainer passwordArea">
                    <label for="password">Password *</label>
                    <InputCont type="password" id="password" place="Password" />
                    <p id="password-err">Password Invalid</p>
                </div>

                <div class="inputcontainer birthdayArea">
                    <label for="birthday" >Birthday *</label>
                    <InputCont type="date" id="birthday" place="Birthday" />
                    <p id="birthday-err">Birthday Invalid</p>
                </div>

                <div class="boxcontainer checkArea">
                    <InputCont type="checkbox" id="checkbox" place="Birthday" checked/>
                    <label for="checkbox" >I accept the terms and privacy</label>
                    <p id="check-err">You must accept the terms</p>
                </div>

                <div class="register">
                    <InputCont type="submit" value="Register" id="action-btn" class="btn-register" />
                </div>
            </section>
        </form>
    </div>
</template>

<script>
import InputCont from '@/components/input/input.vue'

export default {
    name: "homePage",
    components:{
        InputCont,
    }
};
</script>

<style lang="scss" scoped>
@import '@/views/home/home.scss';
</style>