import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { UserRegistered } from "../generated/schema"
import { UserRegistered as UserRegisteredEvent } from "../generated/UserProfile/UserProfile"
import { handleUserRegistered } from "../src/user-profile"
import { createUserRegisteredEvent } from "./user-profile-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let userAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let name = "Example string value"
    let email = "Example string value"
    let profilePicture = "Example string value"
    let newUserRegisteredEvent = createUserRegisteredEvent(
      userAddress,
      name,
      email,
      profilePicture
    )
    handleUserRegistered(newUserRegisteredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("UserRegistered created and stored", () => {
    assert.entityCount("UserRegistered", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "UserRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "userAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "UserRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "UserRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "email",
      "Example string value"
    )
    assert.fieldEquals(
      "UserRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "profilePicture",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
