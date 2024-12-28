import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

// const schema = defineSchema({
//     users: defineTable({
//         completed: v.boolean(),

//     })
// })

const schema = defineSchema({
    ...authTables,
})

export default schema;