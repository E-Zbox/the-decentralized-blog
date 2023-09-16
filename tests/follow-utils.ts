import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { Followed, Unfollowed } from "../generated/Follow/Follow"

export function createFollowedEvent(
  follower: Address,
  followed: Address
): Followed {
  let followedEvent = changetype<Followed>(newMockEvent())

  followedEvent.parameters = new Array()

  followedEvent.parameters.push(
    new ethereum.EventParam("follower", ethereum.Value.fromAddress(follower))
  )
  followedEvent.parameters.push(
    new ethereum.EventParam("followed", ethereum.Value.fromAddress(followed))
  )

  return followedEvent
}

export function createUnfollowedEvent(
  follower: Address,
  unfollowed: Address
): Unfollowed {
  let unfollowedEvent = changetype<Unfollowed>(newMockEvent())

  unfollowedEvent.parameters = new Array()

  unfollowedEvent.parameters.push(
    new ethereum.EventParam("follower", ethereum.Value.fromAddress(follower))
  )
  unfollowedEvent.parameters.push(
    new ethereum.EventParam(
      "unfollowed",
      ethereum.Value.fromAddress(unfollowed)
    )
  )

  return unfollowedEvent
}
