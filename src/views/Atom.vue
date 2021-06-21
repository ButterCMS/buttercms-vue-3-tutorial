<template>
<!-- eslint-disable-next-line vue/no-multiple-template-root -->
{{ atom }}
</template>

<script>
import { onMounted, ref } from "vue"

import { butter } from "@/buttercms.js"

export default {
    name: "Atom",
    setup () {
        const atom = ref( "" )

        onMounted( async () => {
            atom.value = ( await butter.feed.retrieve( "atom" ) ).data.data
        })

        return {
            atom
        }
    },
}
</script>