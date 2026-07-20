declare module '*.svg' {
  const content: string;
  export const ReactComponent: import('react').FunctionComponent<
    import('react').SVGProps<SVGSVGElement>
  >;
  export default content;
}
