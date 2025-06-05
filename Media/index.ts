import { anyone } from "@/access/anyone"
import type { CollectionConfig } from "payload"

export const Media: CollectionConfig = {
    slug: "media",
    access: {
        create: anyone,
        delete: anyone,
        read: anyone,
        update: anyone,
    },
    fields: [
        {
            name: "alt",
            type: "text",
            required: true,
        },
        // added by harsh
        {
            name: "caption",
            type: "text",
        },

        //added another field
        {
            name: "description",
            type: "text",
        },
        {
            name: "image",
            type: "upload",
        },
        {
            name: "video",
            type: "upload",
        },
        
    ],
    upload: true,
}