<template>
<layout>
    <article v-if="loaded">
        <post-header
            :title="post.title"
            :cover-image="post.featured_image"
            :date="post.published"
            :author="post.author"
            :categories="post.categories"
        ></post-header>
        <post-body :content="post.body"></post-body>
    </article>
</layout>
</template>

<script>
import { onMounted, ref, unref } from "vue"
import { useRoute } from "vue-router"

import { butter } from "@/buttercms.js"
import PostHeader from "@/components/PostHeader.vue"
import PostBody from "@/components/PostBody.vue"
import Layout from "@/components/Layout.vue"

export default {
    name: "BlogPost",
    components: {
        Layout,
        PostBody,
        PostHeader,
    },
    setup () {
        const post = ref([])
        const loaded = ref( false )
        const route = useRoute()

        onMounted( async () => {
            post.value = (
                await butter.post.retrieve( route.params.slug )
            ).data.data
            document.title = unref( post ).title
            loaded.value = true
        })

        return {
            loaded,
            post,
        }
    },
}
</script>
