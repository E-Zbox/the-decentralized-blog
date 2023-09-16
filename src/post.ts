import {
  PostCreated as PostCreatedEvent,
  PostDeleted as PostDeletedEvent,
  PostEdited as PostEditedEvent
} from "../generated/Post/Post"
import { PostCreated, PostDeleted, PostEdited } from "../generated/schema"

export function handlePostCreated(event: PostCreatedEvent): void {
  let entity = new PostCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Post_id = event.params.id
  entity.author = event.params.author
  entity.content = event.params.content
  entity.title = event.params.title

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostDeleted(event: PostDeletedEvent): void {
  let entity = new PostDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Post_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostEdited(event: PostEditedEvent): void {
  let entity = new PostEdited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Post_id = event.params.id
  entity.content = event.params.content
  entity.title = event.params.title

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
