<template>
<time dateTime="{dateString}">{{ humanDate }}</time>
</template>


<script>
import { ref, unref } from "vue"

import { parseISO, format } from "date-fns"

export default {
    name: "Date",
    props: {
        dateString: {
            type: String,
            default: "",
        },
    },
    setup ( props ) {
        const date = ref( parseISO( props.dateString ) )
        const humanDate = format( unref( date ), "LLLL	d, yyyy" )

        return {
            date,
            humanDate,
        }
    },
}
</script>