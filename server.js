import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()

const database = new DatabaseMemory()

server.listen({
    port: 3333,
})

server.post("/videos", (request, reply) => {
    const { title, description, duration } = request.body

    database.create({
        title, 
        description, 
        duration
    })
    return reply.status(201).send()
})

server.put("/videos/:id", (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body

    database.update(videoId, {
        title,
        description,
        duration
    })
    
    return reply.status(204).send()

})

server.get("/videos", (request) => {
    const search = request.query.search
    const videos = database.list(search)
    return videos
})

server.delete("/videos/:id", (request, reply) => {
    const videoId = request.params.id
    database.delete(videoId)

    reply.status(204).send()
})