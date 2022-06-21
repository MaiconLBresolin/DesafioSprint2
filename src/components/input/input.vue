<template>
    <input :type="type" :placeholder="place" />
</template>

<script>

export default{
    name:"InputCont",
    props:{
        type:{
            type: String,
        },
        place:{
            type: String,
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/components/input/input.scss'
</style>