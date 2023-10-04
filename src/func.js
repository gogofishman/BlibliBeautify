export function Print (text) {
  console.log(`[B站美化] - ${text}`);
}

export function sleep (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 异步执行当某个元素出现时立马某个动作
 * @param {function} element 返回指定元素的函数
 * @param {function} action 执行动作,参数为element得到的元素,默认remove
 * @param {number} num action执行次数，默认1次，-1为不限定次数直到超时才停止
 * @param {number} step 每次检查间隔时间 ms
 * @param {number} timeOut 超时时间 ms
 * @returns {Promise<void>}
 * @constructor
 */
export async function WaitUntilAction (element, action = (element) => element.remove(),
  num = 1, step = 50, timeOut = 1000 * 10) {
  let count = 0;
  let _num = 0;
  let outCount = timeOut / step;
  
  try {
    while (count <= outCount) {
      count++;
      await sleep(step);
      
      let _c = element();
      if (_c) {
        //执行动作
        action(_c);
        if (_num < num) {
          break;
        }
        _num++;
      }
      
    }
  } catch (e) {
    console.log('WaitUntilAction错误：', e);
  }
}