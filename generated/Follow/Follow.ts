// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Followed extends ethereum.Event {
  get params(): Followed__Params {
    return new Followed__Params(this);
  }
}

export class Followed__Params {
  _event: Followed;

  constructor(event: Followed) {
    this._event = event;
  }

  get follower(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get followed(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Unfollowed extends ethereum.Event {
  get params(): Unfollowed__Params {
    return new Unfollowed__Params(this);
  }
}

export class Unfollowed__Params {
  _event: Unfollowed;

  constructor(event: Unfollowed) {
    this._event = event;
  }

  get follower(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get unfollowed(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Follow extends ethereum.SmartContract {
  static bind(address: Address): Follow {
    return new Follow("Follow", address);
  }

  getFollowerCount(_user: Address): BigInt {
    let result = super.call(
      "getFollowerCount",
      "getFollowerCount(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_getFollowerCount(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getFollowerCount",
      "getFollowerCount(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getFollowers(_user: Address): Array<Address> {
    let result = super.call(
      "getFollowers",
      "getFollowers(address):(address[])",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toAddressArray();
  }

  try_getFollowers(_user: Address): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getFollowers",
      "getFollowers(address):(address[])",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getFollowing(_user: Address): Array<Address> {
    let result = super.call(
      "getFollowing",
      "getFollowing(address):(address[])",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toAddressArray();
  }

  try_getFollowing(_user: Address): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getFollowing",
      "getFollowing(address):(address[])",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getFollowingCount(_user: Address): BigInt {
    let result = super.call(
      "getFollowingCount",
      "getFollowingCount(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_getFollowingCount(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getFollowingCount",
      "getFollowingCount(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isFollowing(_follower: Address, _followed: Address): boolean {
    let result = super.call(
      "isFollowing",
      "isFollowing(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_follower),
        ethereum.Value.fromAddress(_followed)
      ]
    );

    return result[0].toBoolean();
  }

  try_isFollowing(
    _follower: Address,
    _followed: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isFollowing",
      "isFollowing(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_follower),
        ethereum.Value.fromAddress(_followed)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class FollowCall extends ethereum.Call {
  get inputs(): FollowCall__Inputs {
    return new FollowCall__Inputs(this);
  }

  get outputs(): FollowCall__Outputs {
    return new FollowCall__Outputs(this);
  }
}

export class FollowCall__Inputs {
  _call: FollowCall;

  constructor(call: FollowCall) {
    this._call = call;
  }

  get _followed(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class FollowCall__Outputs {
  _call: FollowCall;

  constructor(call: FollowCall) {
    this._call = call;
  }
}

export class UnfollowCall extends ethereum.Call {
  get inputs(): UnfollowCall__Inputs {
    return new UnfollowCall__Inputs(this);
  }

  get outputs(): UnfollowCall__Outputs {
    return new UnfollowCall__Outputs(this);
  }
}

export class UnfollowCall__Inputs {
  _call: UnfollowCall;

  constructor(call: UnfollowCall) {
    this._call = call;
  }

  get _unfollowed(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UnfollowCall__Outputs {
  _call: UnfollowCall;

  constructor(call: UnfollowCall) {
    this._call = call;
  }
}
