import './InsertData.scss'

function InsertData({inputInsertData, onShowModalInsert, postInsertData}) {
    return (
        <div>
            <div className="wrapper-insert-data">
                <p className="text-center h5 pb-2 title-detail-product">Add product</p>
                <div className="sub-detail-product">
                    {inputInsertData.map(item => (
                        <div key={item.name} className="row pb-3">
                            <div className="col-4 text-end">
                                {item.name}
                            </div>
                            <div className="col-8 text-start">
                                <input
                                    className="y-input"
                                    type="text" 
                                    onChange={(event) => {item.onChange(item.name, event.target.value)}}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center pt-2">
                    <button variant="contained" className="y-btn mx-1" onClick={() => postInsertData()}>Save</button>
                    <button variant="contained" className="y-btn mx-1" onClick={() => onShowModalInsert(false)}>Close</button>
                </div>
            </div>
            
            <div className="overlay-detail-insert" />
        </div>
    );
}
export default InsertData;