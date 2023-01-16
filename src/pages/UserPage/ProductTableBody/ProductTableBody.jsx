import React from "react";

function ProductTableBody({ data, index, buyProductDelete}) {
    return (
        <tr className="text-darck">
            <th scope="row">{index + 1}</th>
            <td>{data.name}</td>
            <td>{data.price} $</td>

            <td>
                {/* <i
                    className="fa-solid fa-pen text-primary mx-2"
                    style={{ cursor: "pointer", fontSize: 22 }}
                    onClick={() => buyProductUpdate(index)}
                ></i> */}

                <i
                    className="fa-solid fa-trash text-danger"
                    style={{ cursor: "pointer", fontSize: 22 }}
                    onClick={() => buyProductDelete(data._id)}
                ></i>
            </td>
        </tr>
    );
}

export default ProductTableBody;
