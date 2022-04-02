# Paint with Js


| Feature            | Image                                              |
| ------------------ | -------------------------------------------------- |
| Home Page          | <img src="img/basic.jpg" width="300"><br>          |
| Use Erase          | <img src="img/Erase.jpg" width="300"><br>          |
| Use fill and paint | <img src="img/fill_and_paint.jpg" width="300"><br> |

<hr>

- ## <사용기술>

- - [x]  canvas api 사용
       
        - getContext("2d") 를 사용하여, 2d를 사용할수 있도록 구현.
        - context의 strokeStyle을 통해, 선의 색상을 구현
        - range와 context의 lineWidth를 통해, 선의 굵기를 조절
  ---

- - [x]  여러가지 event 사용
       
        - mousemove를 사용 
          canvas내에서 마우스가 움직임을 인지하여, 선을 구현

        - mousedown을 사용 
          canvas내에서 마우스를 클릭시, 선을 구현

        - mouseup을 사용 
          canvas내에서 마우스 클릭상태에서, 땔경우, 나타나는 선을 중단

        - mouseleave을 사용 
          canvas내에서만 작동을 해주기 위해 mouseleave를 사용.

  ---