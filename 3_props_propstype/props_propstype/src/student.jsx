import style from './style/color.module.css'
function Student(props){
    return(
        <div className={style.cards}>
            <p className={style.cards.card-name}>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isstudent ? "yes" : "no"}</p>
        </div>
    );
}
export default Student