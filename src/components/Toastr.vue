<template>
    <div>
        <div class="toastr-container noselect">
            <transition-group tag="div" name="slide-fade" >
                <div v-for="(item, i) in contents" :key="i">
                    <div class="toastr toastr-succ" v-if="item.state == true">
                        <i class="icon" :class="item.icon"></i>
                        <div style="display:inline-block">{{ item.msg }}</div>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            contents: [],
        }
    },
    methods: {
        excl: function (_content) {
            this.append(_content, 'icon-excl');
        },
        succ: function (_content) {
            this.append(_content, 'icon-succ');
        },
        err: function (_content) {
            this.append(_content, 'icon-err');
        },
        append: function (_content, _icon) {
            let index;

            index = this.contents.push({
                msg: _content,
                icon: _icon,
                state: true
            });
            setTimeout(() => {
                this.contents[index - 1].state = false;
                if(this.contents[this.contents.length - 1].state == false)
                    this.clear();
            }, 1000);
        },
        clear: function () {
            this.contents.splice(0);
        }
    }
}
</script>

<style scpoed>
    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
        not supported by any browser */
    }

    .toastr-container {
        position: fixed;
        float: left;
        z-index: 4;
        top: 100px;
        left: 50%;
    }

    .toastr {
        position: relative;
        top: 100px;
        left: -50%;
        padding: 20px;
    }

    .toastr-succ {
        color: white;
        background-color: rgb(46, 46, 46);
        border: 1px solid gray;
        border-radius: 3px;
    }

    .icon {
        position: relative;
        display: inline-block;
        width: 20px;
    }

    .icon-excl::before {
        content: "";
        position: absolute;
        top: -20px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 2.5px;
        height: 15px;
        border-radius: 2px;
    }

    .icon-excl::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 4px;
        height: 4px;
        border-radius: 10px;
    }

    .icon-excl::before,
    .icon-excl::after {
        border: 1px solid yellow;
        background: yellow;
    }

    .icon-succ::before {
        content: "";
        position: absolute;
        top: -13px;
        width: 5px;
        height: 10px;
        margin: 0 auto;
        border-right: 3px solid seagreen;
        border-bottom: 3px solid seagreen;
        transform: rotate(45deg);
    }

    .icon-err::before,
    .icon-err::after {
        content: "";
        position: absolute;
        top: -15px;
        width: 0px;
        height: 20px;
        margin: 0 auto;
    }

    .icon-err::before {
        border-left: 3px solid crimson;
        transform: rotate(45deg);
    }

    .icon-err::after {
        border-right: 3px solid crimson;
        transform: rotate(-45deg);
    }

    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(-10px);
        opacity: 0;
    }
    .slide-fade-leave-to {
        opacity: 0;
    }
</style>
