import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { PostCreated, PostDeleted, PostEdited } from "../generated/Post/Post"

export function createPostCreatedEvent(
  id: BigInt,
  author: Address,
  content: string,
  title: string
): PostCreated {
  let postCreatedEvent = changetype<PostCreated>(newMockEvent())

  postCreatedEvent.parameters = new Array()

  postCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("content", ethereum.Value.fromString(content))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )

  return postCreatedEvent
}

export function createPostDeletedEvent(id: BigInt): PostDeleted {
  let postDeletedEvent = changetype<PostDeleted>(newMockEvent())

  postDeletedEvent.parameters = new Array()

  postDeletedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return postDeletedEvent
}

export function createPostEditedEvent(
  id: BigInt,
  content: string,
  title: string
): PostEdited {
  let postEditedEvent = changetype<PostEdited>(newMockEvent())

  postEditedEvent.parameters = new Array()

  postEditedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  postEditedEvent.parameters.push(
    new ethereum.EventParam("content", ethereum.Value.fromString(content))
  )
  postEditedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )

  return postEditedEvent
}
