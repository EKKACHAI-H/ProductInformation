import './Table.scss'
import { useState } from 'react'

const initDetails = {
    productName: '',
    size: '',
    price: '',
    amount: ''
}
    
function DetailTable({detailTableData, getDetailData}) {
    const [isUpdate, setIsUpdate] = useState(false)
    const [inputUpdateData, setInputUpdateData] = useState(initDetails)

    const isUpdateMode = () => {
        setIsUpdate(true)
    }

    const onUpdateData = () => {
        console.log('Updated')
        console.log('inputUpdateData :: ',inputUpdateData)
    }
    
    const onInputUpdateChange = (key, value) => {
        setInputUpdateData((prev) => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    const inputInsertData = [
        {
            key: 'productName',
            title: 'Product name:',
            value: detailTableData.productName,
            onChange: onInputUpdateChange,
        },
        {
            key: 'size',
            title: 'Size:',
            value: detailTableData.size,
            onChange: onInputUpdateChange,
        },
        {
            key: 'price',
            title: 'Price:',
            value: detailTableData.price,
            onChange: onInputUpdateChange,
        },
        {
            key: 'amount',
            title: 'Amount:',
            value: detailTableData.amount,
            onChange: onInputUpdateChange,
        },
        {
            key: 'created',
            title: 'Created:',
            value: 'None',
            onChange: onInputUpdateChange,
        },
        {
            key: 'updatedOn',
            title: 'Updated on:',
            value: 'None',
            onChange: onInputUpdateChange,
        }
    ]

    return (
        <div>
            <div className="wrapper-detail-table">
                <p className="text-center h5 pb-2 title-detail-product">Detail product</p>
                { 
                    isUpdate 
                    ? 
                    inputInsertData.map(item => (
                        <div key={item.key} className="row pb-3">
                            <div className="col-4 text-end">
                                {item.title}
                            </div>
                            <div className="col-8 text-start">
                                <input
                                    className="y-input"
                                    type="text" 
                                    value={item.value}
                                    disabled={item.value === 'None'}
                                    onChange={(event) => {item.onChange(item.key, event.target.value)}}
                                />
                            </div>
                        </div>
                    ))
                    
                    : 
                    <div className="sub-detail-product">
                        <div className="row">
                            <div className="col-6 text-end">
                                Product name: 
                            </div>
                            <div className="col-6 text-start">
                                <span>{detailTableData.productName ? detailTableData.productName : '-'}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end">
                                Size: 
                            </div>
                            <div className="col-6 text-start">
                                <span>{detailTableData.size ? detailTableData.size : '-'}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end">
                                Price: 
                            </div>
                            <div className="col-6 text-start">
                                <span>{detailTableData.price ? detailTableData.price : '-'}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end">
                                Amount: 
                            </div>
                            <div className="col-6 text-start">
                                <span>{detailTableData.amount ? detailTableData.amount : '-'}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end">
                                Created: 
                            </div>
                            <div className="col-6 text-start">
                                <span>None</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-end">
                                Updated on: 
                            </div>
                            <div className="col-6 text-start">
                                <span>None</span>
                            </div>
                        </div>
                    </div>
                } 
                
                <div className="text-center pt-3">
                    { 
                        isUpdate 
                        ? <button variant="contained" className="y-btn mx-1" onClick={() => onUpdateData()}>Save</button> 
                        : <button variant="contained" className="y-btn mx-1" onClick={() => isUpdateMode()}>You want to edit?</button> 
                    } 
                    <button variant="contained" className="y-btn mx-1" onClick={() => getDetailData({})}>Close</button>
                </div>
            </div>
            
            <div className="overlay-detail-table" />
        </div>
    );
}
export default DetailTable;