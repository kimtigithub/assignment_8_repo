import "../styles/Gallery.css";
function Gallary(){
    return(
      <section className= "containerGal">
                <h2>Gallary</h2>
                <ul>
                    <li><img width={200}src="/assets/photo-1571080648416-3fda23702c51.jpg" /></li>
                    <li><img width={200}src="/assets/8Zw7hWD5ZaquyftsRbEmof.jpg"/></li>
                    <li><img width={200} src="/assets/HD-wallpaper-rainy-day-rainy-day.jpg"/></li>
                </ul>
            </section>
        
    );
}

export default Gallary;