<template>
    <div v-if="show">
        <div class="modal-container">
            
        </div>
        <div class="modal">
            <slot></slot>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            deafult: false
        }
    }
}
</script>

<style scope>
.modal-container {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0,0.5);
}

.modal {
    position: fixed;
    top: 50%;
    left: 10px;
    right: 10px;
    max-width: 400px;
    margin:0 auto;
    /* border: 1px solid gray; */
    /* border-radius: 5px; */
    background: rgb(43, 43, 43);
    box-sizing: border-box;
    /* box-shadow: 0px 0px 15px #888888; */
    transform: translateY(-50%);
    z-index: 3;
}

.modal-title,
.modal-content,
.modal-footer {
    width: 100%;
    box-sizing: border-box;
}

.modal-footer::before {
    content: "";
    display: block;
    position: relative;
    top:0px;
    border-bottom: 1px solid cornflowerblue;
}

.modal-title,
.modal-footer {
    height: 10%;
    padding: 3px 12px;
}

.modal-title {
    background-color: rgb(43, 43, 43)
}

.modal-footer {
    text-align: right;
}

.modal-content {
    max-height: 70%;
    padding: 20px 12px;
    overflow: auto;
}

/* .modal-content > * {
    color: black;
} */
</style>
