import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  UserRegistered,
  UserUpdated
} from "../generated/UserProfile/UserProfile"

export function createUserRegisteredEvent(
  userAddress: Address,
  name: string,
  email: string,
  profilePicture: string
): UserRegistered {
  let userRegisteredEvent = changetype<UserRegistered>(newMockEvent())

  userRegisteredEvent.parameters = new Array()

  userRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  userRegisteredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  userRegisteredEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  userRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "profilePicture",
      ethereum.Value.fromString(profilePicture)
    )
  )

  return userRegisteredEvent
}

export function createUserUpdatedEvent(
  userAddress: Address,
  name: string,
  email: string,
  profilePicture: string
): UserUpdated {
  let userUpdatedEvent = changetype<UserUpdated>(newMockEvent())

  userUpdatedEvent.parameters = new Array()

  userUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  userUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "profilePicture",
      ethereum.Value.fromString(profilePicture)
    )
  )

  return userUpdatedEvent
}
