import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { PostCreated } from "../generated/schema"
import { PostCreated as PostCreatedEvent } from "../generated/Post/Post"
import { handlePostCreated } from "../src/post"
import { createPostCreatedEvent } from "./post-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let author = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let content = "Example string value"
    let title = "Example string value"
    let newPostCreatedEvent = createPostCreatedEvent(id, author, content, title)
    handlePostCreated(newPostCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("PostCreated created and stored", () => {
    assert.entityCount("PostCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "PostCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "author",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "PostCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "content",
      "Example string value"
    )
    assert.fieldEquals(
      "PostCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
