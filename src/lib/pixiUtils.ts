// 示例：第三方库封装 - pixiUtils
// import * as PIXI from 'pixi.js';

// PIXI.js 工具函数封装
// export class PixiUtils {
//   // 创建文本对象
//   static createText(
//     text: string,
//     style: Partial<PIXI.TextStyle> = {}
//   ): PIXI.Text {
//     const defaultStyle: PIXI.TextStyle = {
//       fontFamily: 'Arial',
//       fontSize: 24,
//       fill: 0xffffff,
//       align: 'center',
//     };

//     return new PIXI.Text(text, { ...defaultStyle, ...style });
//   }

//   // 创建精灵
//   static createSprite(texture: PIXI.Texture): PIXI.Sprite {
//     const sprite = new PIXI.Sprite(texture);
//     sprite.anchor.set(0.5); // 居中锚点
//     return sprite;
//   }

//   // 创建容器
//   static createContainer(): PIXI.Container {
//     return new PIXI.Container();
//   }

//   // 创建图形
//   static createGraphics(): PIXI.Graphics {
//     return new PIXI.Graphics();
//   }

//   // 动画工具
//   static animate(
//     target: any,
//     properties: Record<string, number>,
//     duration: number = 1000,
//     easing: (t: number) => number = (t) => t
//   ): Promise<void> {
//     return new Promise((resolve) => {
//       const startValues: Record<string, number> = {};
//       const startTime = Date.now();

//       // 记录初始值
//       Object.keys(properties).forEach((key) => {
//         startValues[key] = target[key];
//       });

//       const animate = () => {
//         const elapsed = Date.now() - startTime;
//         const progress = Math.min(elapsed / duration, 1);
//         const easedProgress = easing(progress);

//         // 更新属性
//         Object.keys(properties).forEach((key) => {
//           const startValue = startValues[key];
//           const endValue = properties[key];
//           target[key] = startValue + (endValue - startValue) * easedProgress;
//         });

//         if (progress < 1) {
//           requestAnimationFrame(animate);
//         } else {
//           resolve();
//         }
//       };

//       animate();
//     });
//   }
// }

// 缓动函数
// export const easing = {
//   linear: (t: number) => t,
//   easeIn: (t: number) => t * t,
//   easeOut: (t: number) => t * (2 - t),
//   easeInOut: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
// };
