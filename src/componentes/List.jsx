import React from 'react'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        // console.log('oi')
        // console.log(list)
        return list.map((todo,key) => (
            <tr key={key}>
                <td>{todo.date.toString()}</td>
                <td>{todo.time.toString()}</td>
                <td>{todo.sistole.toString()}</td>
                <td>{todo.diastole.toString()}</td>
            </tr>
        ))
    }

    return (
        <table className='table table-striped table-sm'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Sístole</th>
                    <th>Diástole</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}