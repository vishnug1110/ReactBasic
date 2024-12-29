// const Button = (props) => (
//    <button onClick={props.handleClick} className="btn btn-primary">{props.title}</button>
// );

const Button = ({handleClick,title}) => (
    <button onClick={handleClick} className="btn btn-primary">{title}</button>
 );

export default Button