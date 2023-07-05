<template>
    <div class="content">
        <div class="content-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .content {
        /* position: relative; */
        width: 100%;
    }

    .content-container {
        /* position: absolute; */
        margin: 0 auto;
        padding: 0px;
        width: 100%;
        max-width: 500px;
        /* transform: translate(-50%, 0%); */
        /* left: 50%;  */
        /* top: 50%; */
    }
</style>
