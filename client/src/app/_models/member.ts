import { Client } from "./client"

export interface Member {
    id: number
    userName: string
    clientName: string
    age: number
    created: string
    lastActive: string
    clients: Client[]
  }
  
