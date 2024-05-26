export default function Main(props){
    const {data}  = props

    return (

        <div className="imgContainer">
            <div>{data.title}</div>
            <img src={data.hdurl} alt={data.title || "bg-img"} className="bgImage" />
            {/* <img src="mars.png" alt="mar-demo" className="bgImage" /> */}
        </div>
    );
}