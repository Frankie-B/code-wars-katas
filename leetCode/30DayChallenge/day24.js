// LRU Cache - https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3309/

// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.list = [];
  this.capacity = capacity;
};
/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let index = this.list.indexOf(key);
    let removedKey = this.list[index];
    this.list.splice(index, 1);
    this.list.push(removedKey);
    return this.cache.get(key);
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.cache.has(key)) {
    if (this.cache.size === this.capacity) {
      let removedKey = this.list.shift();
      this.cache.delete(removedKey);
    }
    this.cache.set(key, value);
    this.list.push(key);
  } else {
    this.cache.set(key, value);
    this.get(key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// clean solution
// class LRUCache {
//   constructor(capacity) {
//     this.cache = new Map();
//     this.capacity = capacity;
//   }

//   get(key) {
//     if (!this.cache.has(key)) return -1;

//     const v = this.cache.get(key);
//     this.cache.delete(key);
//     this.cache.set(key, v);
//     return this.cache.get(key);
//   };

//   put(key, value) {
//     if (this.cache.has(key)) {
//       this.cache.delete(key);
//     }
//     this.cache.set(key, value);
//     if (this.cache.size > this.capacity) {
//       this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
//     }
//   };
// }

// clean solution two
// class LRUCache {
//   constructor(capacity) {
//     this.map = new Map();
//     this.capacity = capacity;
//   }
//   get(key) {
//     return this.map.has(key) ? this.put(key, this.map.get(key)) : -1;
//   }
//   put(key, value) {
//     if (this.map.has(key)) this.map.delete(key);

//     this.map.set(key, value);

//     if (this.map.size > this.capacity) {
//       this.map.delete(this.map.keys().next().value);
//     }
//     return value;
//   }
// }
