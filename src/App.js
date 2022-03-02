import './App.scss';
import InputGenerator from './components/SearchInput/Search.js'
import InsertData from './components/InsertData/InsertData.js'
import TableInfo from './components/TableInfo/Table.js'
import DetailTable from './components/TableInfo/DetailTable.js'
import FooterPage from './components/Footer/Footer.js'

import { useState } from 'react'
import { itemProduct, productHeader } from "./DataTest/ProductInfo"

const initInputData = {
  price: '',
  amount: '',
  name: '',
}

const initInsertData = {
  price: '',
  amount: '',
  name: '',
  size: '',
}

function App() {
  const [inputData, setInputData] = useState(initInputData)
  const [tableData, setTableData] = useState(itemProduct)
  const [detailTableData, setDetailTableData] = useState({})
  const [showModalInsert, setShowModalInsert] = useState(false)

  const [insertValue, setInsertValue] = useState(initInsertData)

  const onInputChange = (fieldname, value) => {
    setInputData((prev) => {
      return {
        ...prev,
        [fieldname]: value
      }
    })
  }

  const onInputInsertChange = (key, value) => {
    setInsertValue((prev) => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  const inputFields = [
    {
      name: 'name',
      placeholder: 'Product name',
      onChange: onInputChange,
    },
    {
      name: 'price',
      placeholder: 'Price product',
      onChange: onInputChange,
    },
    {
      name: 'amount',
      placeholder: 'Amount',
      onChange: onInputChange,
    }
  ]

  const inputInsertData = [
    {
      name: 'name',
      title: 'ชื่อสินค้า',
      onChange: onInputInsertChange,
    },
    {
      name: 'size',
      title: 'ปริมาณ',
      onChange: onInputInsertChange,
    },
    {
      name: 'price',
      title: 'ราคา',
      onChange: onInputInsertChange,
    },
    {
      name: 'amount',
      title: 'จำนวน',
      onChange: onInputInsertChange,
    }
  ]
  
  const isStartWith = (item1, item2) => {
    return item1.includes(item2)
  }
  
  const onSearch = () => {
    const filteredProduct = itemProduct.filter(item => {
      const isSimilarName = isStartWith(item.productName, inputData.name)
      const isSimilarPrice = isStartWith(item.price.toString(), inputData.price.toString())
      const isSimilarAmount = isStartWith(item.amount.toString(), inputData.amount.toString())
      const result = 
      (inputData.name ? isSimilarName : true) &&
      (inputData.price ? isSimilarPrice : true) &&
      (inputData.amount ? isSimilarAmount : true)
      return result
    })
    setTableData(filteredProduct)
  }

  const onShowModalInsert = (show) => {
    setShowModalInsert(show)
  }

  const getDetailData = (data) => {
    setDetailTableData(data)
  }

  const postInsertData = () => {
    const obj = {
      id: itemProduct.length + 1,
      productName: insertValue.name,
      price: insertValue.price,
      amount: insertValue.amount,
      size: insertValue.size,
    }
    try {
      itemProduct.push(obj)
      onShowModalInsert(false)
    } catch (error) {
      
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center">Product information</h1>
      </header>
      <section className="px-4">
        <InputGenerator inputFields={inputFields} onSearch={onSearch} onShowModalInsert={onShowModalInsert}/>
        <TableInfo data={tableData} header={productHeader} getDetailData={getDetailData}/>
        { Object.keys(detailTableData).length > 0 ? <DetailTable detailTableData={detailTableData} getDetailData={getDetailData}/> : null }
        { 
          showModalInsert 
          ? <InsertData inputInsertData={inputInsertData} onShowModalInsert={onShowModalInsert} postInsertData={postInsertData}/> 
          : null 
        }
      </section>
      <FooterPage />
    </div>
  );
}

export default App;
