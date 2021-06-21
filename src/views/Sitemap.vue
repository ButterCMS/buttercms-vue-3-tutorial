<template>
<!-- eslint-disable-next-line vue/no-multiple-template-root -->
{{ sitemap }}
</template>

<script>
import { onMounted, ref } from "vue"

import { butter } from "@/buttercms.js"

export default {
    name: "Sitemap",
    setup () {
        const sitemap = ref( "" )

        onMounted( async () => {
            sitemap.value = ( await butter.feed.retrieve( "sitemap" ) ).data.data
        })

        return {
            sitemap
        }
    },
}
</script>