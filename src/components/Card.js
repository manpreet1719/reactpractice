import 'bootstrap/dist/css/bootstrap.css';
const Card = (data,total) => {
    let result = {...data.data};
    if(result){
        return (
            <div class="col-lg-4 mt-4">
                <div class="card">
                    <img class="card-img-top" src={result.images[0]} alt="Card image" style={{ width: "100%", height:"15rem" }} />
                    <div class="card-body">
                        <h4 class="card-title">{result.title}</h4>
                        <p class="card-text">{result.description}</p>
                        <div class="text-center">
                            <a href='/' class="btn btn-success">Link</a>
                        </div>
                    </div>
                </div>
            </div>
         );

    }else{
        return null
    }

}

export default Card;