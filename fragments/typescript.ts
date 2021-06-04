export const safeParse = (data: any, defaultValue?: any) => {
  if (typeof data === 'object') {
    return data;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error(data);
    console.error(e);
    return defaultValue;
  }
};

export const tryCatchFn = (data: any, fn: Function) => {try {return fn(data)} catch(e){return null}};

export const safeStringify = (target: any) => (typeof target === 'object')? tryCatchFn(target, JSON.stringify): target;

export const jf = (data: any, space = 4) => {
  return JSON.stringify(data, null, space);
};

export const objectDeepWalk = (obj:any, func: Function) => {
    if(typeof obj !== 'object') return;
    for(let keyName in obj) {
        const item = obj[keyName]; 
        func(obj, item,  keyName);
        objectDeepWalk(item, func)
    }
}
