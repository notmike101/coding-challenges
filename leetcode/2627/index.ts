type F = (...args: number[]) => void

const debounce = (fn: F, t: number): F => {
  let debounced: ReturnType<typeof setTimeout>;

  return function(...args) {
    clearTimeout(debounced);

    debounced = setTimeout(function() {
      fn(...args)
    }, t);
  };
};
