// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library SimpleCounter {
    struct Counter {
        uint256 value;
    }

    function current(Counter storage counter) internal view returns (uint256) {
        return counter.value;
    }

    function increment(Counter storage counter) internal {
        unchecked {
            // This is safe as overflow is reverted automatically since Solidity 0.8.x.
            counter.value += 1;
        }
    }

    function decrement(Counter storage counter) internal {
        uint256 value = counter.value;
        require(value > 0, "Counter: decrement overflow");
        unchecked {
            counter.value = value - 1;
        }
    }
}
