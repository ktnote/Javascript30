# 02 - Js and Css Clock

## 簡介
使用JS與CSS製作一個實時的時鐘效果

## JS
### Date() 取得日期時間
* Date()        //取得日期和時間
* getHours()    //取得時
* getMinutes()  //取得分
* getSeconds()  //取得秒

> Date()衍伸：<http://www.w3school.com.cn/js/jsref_obj_date.asp>

### 設定指針角度
```
.style.transform = `rotate(${secondsDeg}deg);`
```
### setInterval()
定時器，有兩個參數：第一個是要執行的function，第二個是時間(毫秒)
```
setInterval(callback, time)
```


## CSS
### transform-origin
變形的軸心，預設為物件的中心點，
在這個範例中，設定為100%(right)可以使其從時鐘面的中心點開始旋轉。
```
transform-origin: 100% //移動軸心
```
## Demo
<https://codepen.io/u9965522/pen/WJgQgx?editors=1111>

2018.05.15
