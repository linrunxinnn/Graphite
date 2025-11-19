// 示例：画布专用组件 - CanvasRenderer
// import React, { useRef, useEffect } from 'react';
// import * as PIXI from 'pixi.js';

// interface CanvasRendererProps {
//   width: number;
//   height: number;
//   children?: React.ReactNode;
// }

// const CanvasRenderer: React.FC<CanvasRendererProps> = ({
//   width,
//   height,
//   children,
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const app = new PIXI.Application({
//       view: canvasRef.current,
//       width,
//       height,
//       backgroundColor: 0x1099bb,
//     });

//     // 这里可以添加 PIXI 对象到 app.stage

//     return () => {
//       app.destroy();
//     };
//   }, [width, height]);

//   return <canvas ref={canvasRef} />;
// };

// export default CanvasRenderer;
