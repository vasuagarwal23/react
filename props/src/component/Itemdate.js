import "./Itemdate.css";
function Itemdate(props){
    return(
        <div className="itemdate">
            <span>{props.date} </span>
            <span>{props.month} </span>
            <span>{props.year} </span>
        </div>
    );
}
export default Itemdate;