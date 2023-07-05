<template>
    <div :class="className" v-on:click="Click">
        <div class="menu-content">
            <i :class="icon"></i>
        </div>
        <span class="menu-label">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa fa-question fa-2x',
        },
    },
    computed: {
        className: function() {  
            return 'menu-block';
        }
    },
    methods: {
        Click: function () {
            this.$emit('click');
        }
    }
}
</script>

<style scoped>
    @media only screen and (max-width: 280px) {
        .menu-block {
            display: inline-block;
            vertical-align: middle;
            width: 100% !important;
        }
    }

    /* @media only screen and (min-width: 800px) {
        .menu-block {
            display: inline-block;
            vertical-align: middle;
            width: 208px !important;
            height: 208px !important;
        }
    } */

    .menu-block {
        position: relative;
        display: inline-block;
        margin: 2px;
        width:104px;
        height:104px;
        vertical-align: bottom;
        cursor: pointer;
    }

    .menu-block {
        background-color: rgb(0, 153, 255);
    }

    .menu-block-gray {
        background-color: gray;
    }

    .menu-block-red {
        background-color: crimson;
    }

    .menu-content {
        position: relative;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        right:50%;
        text-align: center;
        color: white;
    }

    .menu-label {
        position: absolute;
        left: 6px;
        bottom: 0px;
        color: white;
        max-width:90px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;
    }
</style>
