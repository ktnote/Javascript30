# 01 - Drum kit
![](https://ktnote.github.io/Javascript30/01-Drum%20Kit/cover.jpg)

## 簡介

* 利用輸入鍵盤的案件事件keydown觸發功能，使用keyCode取值，將keyCode的值對應到data-code，當符合時Highlight方形框、撥放對應音效
```
  window.addEventListener('keydown',keyboard); //監聽視窗鍵盤事件
```

* 利用for迴圈新增/移除Highlight效果
```
  .classList.add('light'); //新增
  .classList.remove('light'); //移除
```


## CSS
* flex用法:
	- flex: 1 //簡寫，全部為flex: flex-grow｜flex-shrink｜flex-basis
	- align-items : center; //垂直置中
	- justify-content:center; //水平置中
## Demo
<https://codepen.io/u9965522/full/BxPOrw>


2018.05.15
