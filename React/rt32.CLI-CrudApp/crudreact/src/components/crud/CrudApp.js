import React from "react";

import CrudInput from "./CrudInput";
import CrudList from "./CrudList";

class CrudApp extends React.Component {
  state = {
      // 상태값(변수)을 정의한다.
      items: [
          {id:1, name: "슈퍼맨", power: 100},
          {id:2, name: "아쿠아맨", power: 300},
          {id:3, name: "스파이더맨", power: 500},
          {id:4, name: "배트맨", power: 30},
      ],
  }
  func = {
      // func에 정의된 메서드는 반드시 constructor에서 this를 bind() 처리해야 한다.
      // func에는 자식 컴포넌트에 넘길 메서드만 작성한다.
      // 왜 자식에게 부모 메서드를 넘기나? 부모의 상태값을 변경하기 위해서.
      doIns(newitem){

          // object array 에서 최대값 id 찾기
          //     방법 1. reduce() 메서드 사용해서 최대값을 찾는 방법
          //         var maxObj = array.reduce( function(prev, curt){
          //             return prev.id > curt.id ? prev:  curt  // 최대값 id가 있는 객체
          //             return prev.id < curt.id ? prev:  curt  // 최소값 id가 있는 객체
          //         })
          //         var newid  = maxObj.id + 1
          //
          //     방법 2. map()과 Math.max()를 사용해서 최대값을 찾는 방법
          //         var arrIds = array.map( function(el){
          //             return el.id
          //         })
          //         var newid  = Math.max(...arrIds) + 1
          const maxObj = this.state.items.reduce( function(prev, curt){
              return prev.id > curt.id ? prev: curt  // 최대값 id가 있는 객체
              return prev.id < curt.id ? prev: curt  // 최소값 id가 있는 객체
          });

          debugger;
          const newid  = maxObj.id + 1

          newitem.id = newid;

          // this.state.items.push( newitem );
          // const newitmes = [...this.state.items];
          const newitems = [...this.state.items, newitem];

          // this.state.items = newitems;
          this.setState({
              ...this.state,
              items: newitems,
          })
      },
      doDel(index, item){
          const r = window.confirm("정말로 삭제하시겠습니까?");
          if(r === false) return;

          const newitems = this.state.items.filter( (element)=>{
              return element.id !== item.id;
          });

          // this.state.items = newitems;
          this.setState({
              ...this.state,
              items: newitems,
          })
      },
      doUp(index, item){
          //100씩 증가. Array.map() 을 사용한다
          // item.power = item.power + 100;
          const newitems = this.state.items.map( (element)=>{
              if( item.id === element.id){
                  element.power = element.power + 100;
              }
              return element;
          });

          // this.state.items = newitems;
          this.setState({
              ...this.state,
              items: newitems,
          });
      },
      doDown(index, item){
          // 50씩 감소.  Array.map() 을 사용한다
          // item.power = item.power - 50;
          const newitems = this.state.items.map( (element)=>{
              if( item.id === element.id){
                  element.power = element.power - 50;
              }
              return element;
          });

          // this.state.items = newitems;
          this.setState({
              ...this.state,
              items: newitems,
          });
      },
      doSave(newitem){
          // newitem 으로 바뀐 새로운 배열 만들기. Array.map() 을 사용한다
          const newitems = this.state.items.map( (element)=>{
              if( newitem.id === element.id){
                  return newitem;
              }
              else {
                  return element;
              }
          });

          // this.state.items = newitems;
          this.setState({
              ...this.state,
              items: newitems,
          });
      },
  }
  constructor(props) {
      super()
      // this 바인딩. 예시) this.func.handler = this.func.handler.bind(this);
      // func 에 정의한 메서드는 반드시 this bind 처리해야 한다.
      this.func.doIns = this.func.doIns.bind(this);
      this.func.doDel = this.func.doDel.bind(this);
      this.func.doUp = this.func.doUp.bind(this);
      this.func.doDown = this.func.doDown.bind(this);
      this.func.doSave = this.func.doSave.bind(this);

      // ref 만들기. 예시) this.inputref = React.createRef()

  }
  render() { // JSX로 화면 만들기
      return (
          <div id="app">
              <h1>Creat Read Update Delete</h1>
              <CrudInput {...this.props} {...this.state} {...this.func}></CrudInput>
              <hr/>
              <CrudList {...this.props} {...this.state} {...this.func}></CrudList>
          </div>
      )
  }
};

export default CrudApp;