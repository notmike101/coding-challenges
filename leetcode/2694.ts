/**
 * Event Emitter
 * https://leetcode.com/problems/event-emitter/description/
 * Mike Orozco (notmike101)
 * 
 * Runtime: 59ms - Beats 57.14%
 * Memory:  44.28 MB - Beats 86.37%
 */

type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
  #handlers = new Map<string, Set<Callback>>();

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.#handlers.has(eventName)) {
      this.#handlers.set(eventName, new Set<Callback>());
    }

    this.#handlers.get(eventName)!.add(callback);

    return {
      unsubscribe: () => {
        this.#handlers.get(eventName)?.delete(callback);
      }
    };
  }
    
  emit(eventName: string, args: any[] = []): any[] {
    if (!this.#handlers.get(eventName)) return [];

    const handlers = this.#handlers.get(eventName)!;
    const outputs: any = [];

    for (const handler of handlers) {
      outputs.push(handler(...args));
    }

    return outputs;
  }
}

const test0 = () => {
  const emitter = new EventEmitter();
  let output: any;

  function onClickCallback() { return 99; }
  const sub = emitter.subscribe('onClick', onClickCallback);

  output = emitter.emit('onClick');
  console.assert(output[0] === 99, `Expected [99], got ${output}`);
  output = sub.unsubscribe();
  console.assert(output === undefined, `Expected undefined, got ${output}`);
  output = emitter.emit('onClick');
  console.assert(output.length === 0, `Expected [], got ${output}`);
};

test0();