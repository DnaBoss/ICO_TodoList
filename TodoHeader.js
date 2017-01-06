class TodoHeader extends React.Component {
  render() {
  	const {
  		title,
  		userName,
  		todoCount
  	}=this.props;
    return (
      <div>
        <h1>{title}</h1>
        <span>Hello，{userName}：你有 {todoCount} 項未完成待辦事項</span>
      </div>
    );
  }
}
TodoHeader.defaultProps={
	title:'ICO的待辦清單',
	userName:'ICO',
	todoCount:0
}
TodoHeader.propsType={
	title:React.PropTypes.string,
	userName:React.PropTypes.string,
	todoCount:React.PropTypes.number,
}
window.App.TodoHeader = TodoHeader;
