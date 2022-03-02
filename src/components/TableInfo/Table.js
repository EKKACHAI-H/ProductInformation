import './Table.scss'
import Table from 'react-bootstrap/Table'
import imgEye from '../../assets/images/visibility.png'

function tableInfo({header, data, getDetailData}) {
    return (
        <Table striped bordered hover responsive className="wrapper-table-main">
            <thead>
                <tr>
                    {header.map(item => (
                        <th key={item.id} style={{width: item.width}}>{item.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id} >
                        <td className="text-center">{index + 1}</td>
                        <td>{item.productName ? item.productName : '-'} {item.size ? '('+item.size+')' : ''}</td>
                        <td>{item.price ? item.price + ' Baht' : '-'}</td>
                        <td>{item.amount ? item.amount + ' EA.' : '-'}</td>
                        <td className="text-center">
                            <img src={imgEye} draggable={false} onClick={() => {getDetailData(item)}} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default tableInfo;