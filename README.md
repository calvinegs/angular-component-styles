## 本篇筆記是來記錄 Angular 元件樣式及其原理和 探討　Angular 提供的一些特殊選擇器的用法

希望透過了解預設的 Angular 樣式機制（模擬封裝）在底層的工作原理來幫助我們更清楚的如何使用　Angular 所提供的一些特殊選擇器(如： :host、:host-context、::ng-deep等)的用法。

在下面的實作過程將會使用到下列技術:

- Angular cli 16
- Angular 16
    - Router
    - Standalone component
- CSS & SCSS
- 瀏覧器的開發者工具

