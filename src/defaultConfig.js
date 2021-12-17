export const NAME = 'VUI';
// 自定义组件前缀
export const COMPONENT_PREFIX = 'V';
export const CSS_PREFIX = `${COMPONENT_PREFIX.toLowerCase()}-`;
export const SIZE = 'medium';
export const configProvideInjectKey = Symbol('configProvideInjectKey');
export const getComponentPrefix = (options = {}) => options.componentPrefix || COMPONENT_PREFIX;
export const getCssPrefix = (options = {}) => options.cssPrefix || CSS_PREFIX;
