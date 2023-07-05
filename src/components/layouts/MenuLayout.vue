<template>
    <div class="menu">
        <div class="menu-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .menu {
        /* position: relative; */
    }

    .menu-container {
        /* position: relative; */
        margin: 0 auto;
        padding: 20px;
        width: 100%;
        max-width: 216px;
        /* transform: translate(-50%, 0%);
        left: 50%; 
        top: 50%; */
    }
</style>
