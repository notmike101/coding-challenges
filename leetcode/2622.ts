/**
 * LeetCode Cache With Time Limit
 * https://leetcode.com/problems/cache-with-time-limit/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 49ms -  Beats 95.02%
 * Memory:  42.85MB - Beats 55.35%
 */

class TimeLimitedCache {
  #storage = new Map<number, [number, number]>();

  set(key: number, value: number, duration: number): boolean {
    const keyExists = this.#storage.has(key);

    this.#cleanupExpiredEntries();

    this.#storage.set(key, [value, Date.now() + duration]);

    return keyExists;
  }

  get(key: number): number {
    this.#cleanupExpiredEntries();

    return this.#storage.get(key)?.[0] ?? -1;
  }

  count(): number {
    this.#cleanupExpiredEntries();

    return this.#storage.size;
  }

  #cleanupExpiredEntries() {
    const currentDate = Date.now();

    for (const [key, [, expiration]] of this.#storage.entries()) {
      if (expiration >= currentDate) continue;

      this.#storage.delete(key);
    }
  }
}

// Custom tests because testControl is not set up to handle async

const wait = (timer: number) => {
  return new Promise((resolve) => setTimeout(resolve, timer));
};

const test = async () => {
  const timeLimitedCache = new TimeLimitedCache();

  timeLimitedCache.set(1, 1, 250);

  console.log(timeLimitedCache.get(1));
  console.log(timeLimitedCache.count());

  await wait(500);

  console.log(timeLimitedCache.get(1));
  console.log(timeLimitedCache.count());
};

test();
