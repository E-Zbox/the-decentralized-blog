import {
  UserRegistered as UserRegisteredEvent,
  UserUpdated as UserUpdatedEvent
} from "../generated/UserProfile/UserProfile"
import { UserRegistered, UserUpdated } from "../generated/schema"

export function handleUserRegistered(event: UserRegisteredEvent): void {
  let entity = new UserRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.name = event.params.name
  entity.email = event.params.email
  entity.profilePicture = event.params.profilePicture

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserUpdated(event: UserUpdatedEvent): void {
  let entity = new UserUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.name = event.params.name
  entity.email = event.params.email
  entity.profilePicture = event.params.profilePicture

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
