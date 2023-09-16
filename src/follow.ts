import {
  Followed as FollowedEvent,
  Unfollowed as UnfollowedEvent
} from "../generated/Follow/Follow"
import { Followed, Unfollowed } from "../generated/schema"

export function handleFollowed(event: FollowedEvent): void {
  let entity = new Followed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.follower = event.params.follower
  entity.followed = event.params.followed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnfollowed(event: UnfollowedEvent): void {
  let entity = new Unfollowed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.follower = event.params.follower
  entity.unfollowed = event.params.unfollowed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
