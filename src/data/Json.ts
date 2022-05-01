export type Json = JsonPrimitive | JsonArray | JsonRecord

export type JsonPrimitive = string | number | boolean | null

export type JsonArray = readonly Json[]

export type JsonRecord = { readonly [key: string]: Json }
