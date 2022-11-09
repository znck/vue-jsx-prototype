export function h() {}
// https://github.com/microsoft/TypeScript/pull/22207
export namespace h {
  export namespace JSX {
    export interface Element {}
    export interface ElementClass {
      $props: {}
    }
    export interface ElementAttributesProperty {
      $props: {}
    }
    export interface IntrinsicElements {
      'foo-bar': Partial<{ class: string; style: string }>
    }
    export interface IntrinsicAttributes {}
    export interface ElementChildrenAttribute {
      $slots: {}
    }
  }
}
