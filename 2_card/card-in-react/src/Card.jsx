import cutee from './assets/cute.png'
function card(){
return (
    <div className='cards'>
        <img className='card-image' src={cutee} alt="image" />
        <h2 className='card-name'>Shivam chillz</h2>
        <p className='card-description'>Just chilling right now with my buddy.</p>
    </div>
);
}
export default card