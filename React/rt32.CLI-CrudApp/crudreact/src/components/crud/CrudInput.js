import React from "react";

class CrudInput extends React.Component {

  static defaultProps = { /*  props의 디폴트 값 설정 */ }
  static propsTypes = {  /* props의 프로퍼티 타입 설정 */ }
  state = {
      // 상태값(변수)을 정의한다.

  }
  style = {
      // 컴포넌트 내부에서 사용할 인라인 스타일을 정의한다.
      // getter 를 사용하면 객체 내부 참조가 가능하다.

  }
  func = {
      // func에 정의된 메서드는 반드시 constructor에서 this를 bind() 처리해야 한다.
      // func에는 자식 컴포넌트에 넘길 메서드만 작성한다.
      // 왜 자식에게 부모 메서드를 넘기나? 부모의 상태값을 변경하기 위해서.

  }
  constructor(props) {
      super()
      // this 바인딩. 예시) this.func.handler = this.func.handler.bind(this);
      // func 에 정의한 메서드는 반드시 this bind 처리해야 한다.

      // ref 만들기. 예시) this.inputref = React.createRef()
      this.refInputName  = React.createRef();
      this.refInputPower = React.createRef();
  }
  componentDidMount() {
      // 마운트 완료 후에 실행됨 : 페이지 load 될 때 한번
      // componentDidMount가 사용되는 경우: redux 구독 설정, focus 줄때
  }
  componentDidUpdate(prevProps, prevState) {
      // 업데이트 완료 후에 실행됨 : 여러번, state 가 변경될 때마다
  }
  componentWillUnmount() {
      // 언마운트 완료 후에 실행됨 : 페이지 unload 될 때 한번
      // componentWillUnmount가 사용되는 경우: redux 구독 해제, 이벤트 핸들러 해제
  }
  doIns = (event)=>{
      // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
      console.log(event.target);

      // 유효성 검사
      if(this.refInputName.current.value.trim() === ''){
          alert('이름을 입력하세요')
          this.refInputName.current.focus();
          event.preventDefault();
          event.stopPropagation();
          return false;
      }
      if(this.refInputPower.current.value.trim() === ''){
          alert('이름을 입력하세요')
          this.refInputPower.current.focus();
          event.preventDefault();
          event.stopPropagation();
          return false;
      }
      if( isNaN( Number(this.refInputPower.current.value) ) ){
          alert('파워에 숫자를 입력하세요')
          this.refInputPower.current.value=""
          this.refInputPower.current.focus()
          event.preventDefault()
          return false
      }

      // ref 를 사용하여 현재 입력된 값을 가져온다.
      //const name = this.refInputName.current.value
      //const power = Number(this.refInputPower.current.value)
      const newitem = {
          id: null,
          name: this.refInputName.current.value,
          power: Number(this.refInputPower.current.value),
      }

      // 작업1. 부모(CrudApp) 메서드 호출
      // CrudApp.func.doIns() 호출
      this.props.doIns(newitem);

      // 작업2. input 태그의 입력값 지우기.
      this.refInputName.current.value = "";
      this.refInputPower.current.value = 0;
  }
  render() { // JSX로 화면 만들기
      return (
          <div>
              <div>
                  <label htmlFor="">Name : </label>
                  <input type="text"
                         name="name"
                         placeholder="이름을 입력하세요"
                         defaultValue={""}
                         ref={this.refInputName}
                  />
              </div>
              <div>
                  <label htmlFor="">Power : </label>
                  <input type="number"
                         name="power"
                         placeholder="숫자를 입력하세요"
                         defaultValue={0}
                         ref={this.refInputPower}
                  />
              </div>
              <button onClick={this.doIns}>Add</button>
          </div>
      )
  }
};

export default CrudInput;