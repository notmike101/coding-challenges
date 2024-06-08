/**
 * Design Twitter
 * https://leetcode.com/problems/design-twitter/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 59ms - Beats 47.22%
 * Memory:  51.00 MB - Beats 87.96%
 */

import { ITest } from "../testControl.ts";

class Twitter {
  #tweets: [number, number][] = [];
  #followers = new Map<number, Set<number>>();

  constructor() {}

  postTweet(userId: number, tweetId: number): void {
      this.#tweets.unshift([userId, tweetId]);
  }

  getNewsFeed(userId: number): number[] {
      const returnTweets: number[] = [];

      if (this.#tweets.length === 0) return returnTweets;

      let posterId;
      let tweetId;
      let i = 0;

      while (this.#tweets[i] !== undefined && returnTweets.length < 10) {
          if (returnTweets.length === 10) break;

          [posterId, tweetId] = this.#tweets[i++];

          if (posterId === userId || this.#followers.get(userId)?.has(posterId)) {
              returnTweets.push(tweetId);
          }
      }

      return returnTweets;
  }

  follow(followerId: number, followeeId: number): void {
      if (!this.#followers.has(followerId)) {
          this.#followers.set(followerId, new Set());
      }

      this.#followers.get(followerId)!.add(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
      this.#followers.get(followerId)?.delete(followeeId);
  }
}
