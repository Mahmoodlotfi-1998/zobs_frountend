import React from "react";

export function MainCategory({ data }) {
    return (
        <div>
            <img src={data.pic} style={style.catImage} />
            <div className="card-header" style={style.catHeader}>
                {data.name}
            </div>
        </div>
    );
}

const style={
    catHeader:{
        textAlign:'center',
        fontSize:10,
        width:'100%',
        padding:'0px 0px 10px 0px',
        border:'none',
        background:'none'
    },catImage:{
        marginTop: 10,
        width:'80%',
        marginLeft: '10%'
    }
}