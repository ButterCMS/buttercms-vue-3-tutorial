<template>
<div class="max-w-2xl mx-auto">
    <div
        class="prose"
        v-html="content"
    ></div>
</div>
</template>


<script>
export default {
    name: "PostBody",
    props: {
        content: {
            type: String,
            default: "",
        },
    },
}
</script>