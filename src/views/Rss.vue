<template>
<!-- eslint-disable-next-line vue/no-multiple-template-root -->
{{ rss }}
</template>

<script>
import { onMounted, ref } from "vue"

import { butter } from "@/buttercms.js"

export default {
    name: "Rss",
    setup () {
        const rss = ref( "" )

        onMounted( async () => {
            rss.value = ( await butter.feed.retrieve( "rss" ) ).data.data
        })

        return {
            rss
        }
    },
}
</script>