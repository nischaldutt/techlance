export function mergeObjects(A, B) {
  let res = {};

  Object.keys({ ...A, ...B }).map((key) => {
    res[key] = B?.[key] || A?.[key];
  });

  return res;
}
