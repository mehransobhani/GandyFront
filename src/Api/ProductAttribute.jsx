import {BaseUrl} from "../env";
export async function getProductAttribute(page) {
    const response = await fetch(BaseUrl + "pconfig/findAll/"+page,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response.json();
}
export async function insertProductAttribute(attributeOption,product) {
    const response = await fetch(BaseUrl + "pconfig/add",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    attributeOption:{
                        id:attributeOption
                    },
                    product:{
                        id:product
                    }
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
export async function editProductAttribute(attributeOption,product,id) {
    const response = await fetch(BaseUrl + "pconfig/add",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    attributeOption:{
                        id:attributeOption
                    },
                    product:{
                        id:product
                    },
                    id:id
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
export async function removeProductAttribute(id) {
    const response = await fetch(BaseUrl + "pconfig/deleteById"+id,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
export async function searchPConfigByPName(name) {
    const response = await fetch(BaseUrl + "pconfig/searchPConfigByPName",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    name:name
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
export async function searchAttributeOption(name) {
    const response = await fetch(BaseUrl + "pconfig/searchAttributeOption",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    name:name
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
export async function getProductByWords(name) {
    const response = await fetch(BaseUrl + "pconfig/getProductByWords",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    name:name
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
