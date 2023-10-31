

const Pagination = ({total,page,setPage}) => {
    let pages = total/10;
    function handlepagination(selectedpage){
        if(selectedpage >=1 && selectedpage <= 10){
            setPage(selectedpage);
            console.log(selectedpage);
        }
        
    }
    if(total > 0){
        return (
            <>
                <div className="pagination">
                    <span className={page <= 1 ? 'disable_arrow': ''} onClick={()=>{
                        handlepagination(page-1);
                    }}>◀</span>
                    {
                        [...Array(pages).keys()].map((ele,i)=>{
                            return <span onClick={()=>handlepagination(i+1)}>{i+1}</span>
                        })
                    }
                    <span className={page >=10 ? 'disable_arrow': ''} onclick={()=>handlepagination(page+1)}>▶</span>
                </div>
            </>
        );
    }else{
       return null;
    }
   
}

export default Pagination;