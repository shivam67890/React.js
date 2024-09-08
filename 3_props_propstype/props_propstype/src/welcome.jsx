import style from './style/color.module.css'
function Welcome(prom){
    const agree= <div className={style.colorgreen}>welcome to the website &#123; {prom.username} &#125;.</div>
    const disagree=<div className={style.colorred}>please log in first &#123; {prom.username} &#125;.</div>;
    return (prom.isloggedin ? agree:disagree);
}
export default Welcome;