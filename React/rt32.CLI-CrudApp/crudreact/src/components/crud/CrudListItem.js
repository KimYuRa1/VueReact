import React from "react";
class CrudListItem extends React.Component {
  state = {
      // 상태값(변수)을 정의한다.
      isEditMode: false,
  }
  constructor(props) {
      super()
      // this 바인딩. 예시) this.func.handler = this.func.handler.bind(this)
      // func 에 정의한 메서드는 반드시 this bind 처리해야 한다.

      // ref 만들기. 예시) this.inputref = React.createRef()
      this.refInputName  = React.createRef();
      this.refInputPower = React.createRef();
  }
  doDel = (event)=>{
      // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
      console.log(event.target)
      // 부모 메서드 호출
      const {item, index} = this.props;
      this.props.doDel(index, item);
  }
  doUp = (event)=>{
      // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
      console.log(event.target)
      const {item, index} = this.props;
      this.props.doUp(index, item);
  }
  doDown = (event)=>{
      // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
      console.log(event.target)
      const {item, index} = this.props;
      this.props.doDown(index, item);
  }
  doSave = (event)=>{
      // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
      console.log(event.target);
      debugger;
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

      // 입력된 값을 이용해서 newitem 객체를 만든다.
      const {item} = this.props;
      const newitem = {
          id: item.id,
          name: this.refInputName.current.value,
          power: Number(this.refInputPower.current.value),
      }

      // 부모 메서드 호출
      this.props.doSave(newitem);

      // formEdid 를 formView로 바꾸기.
      // this.state.isEditMode = !this.state.isEditMode;
      this.setState({
          ...this.state,
          isEditMode: !this.state.isEditMode
      });
  }
  doEdit = (event)=>{
      // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
      console.log(event.target)
      // this.state.isEditMode = !this.state.isEditMode;
      this.setState({
          ...this.state,
          isEditMode: !this.state.isEditMode
      })
  }
  render() { // JSX로 화면 만들기
      const {item, index} = this.props;

      // item.power >= 300 이면 "strong" 이 아니면 ""이 되게
      let strong = "";
      if(item.power>= 300) {
          strong = "strong";
      }

      const formView = (
          <tr key={index} className={strong}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.power}</td>
              <td>
                  <button onClick={this.doDel}>Del</button>
                  <button onClick={this.doUp}>Power Up</button>
                  <button onClick={this.doDown}>Power Down</button>
                  <button onClick={this.doEdit}>Edit</button>
              </td>
          </tr>
      );
      const formEdit = (
          <tr key={index} className={strong}>
              <td>{index+1}</td>
              <td>
                  <input type="text"
                      name="name"
                      placeholder="이름을 입력하세요"
                      defaultValue ={item.name}
                      ref={this.refInputName}
                  />
              </td>
              <td>
                  <input type="number"
                      name="power"
                      placeholder="숫자를 입력하세요"
                      defaultValue={item.power}
                      ref={this.refInputPower}
                  />
              </td>
              <td>
                  <button onClick={this.doDel}>Del</button>
                  <button onClick={this.doUp}>Power Up</button>
                  <button onClick={this.doDown}>Power Down</button>
                  <button onClick={this.doSave}>Save</button>
              </td>
          </tr>
      )

      if( this.state.isEditMode )
          return formEdit;
      else
          return formView;
  }
};
export default CrudListItem;
