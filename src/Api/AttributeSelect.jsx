import {BaseUrl} from "../env";

export async function getAttributeSelect(id) {
    const response = await fetch(BaseUrl + "attributeOption/findAll/"+id,
        {
            method: '',
            body: JSON.stringify(
                {
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}

export async function insertAttributeSelect(attributeOption,attributeType) {
    const response = await fetch(BaseUrl + "attributeOption/add",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    attributeOption:attributeOption,
                    attributeType:{
                        id:attributeType
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

export async function editAttributeSelect(attributeOption,attributeType ,id) {
    const response = await fetch(BaseUrl + "attributeOption/add",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    id:id,
                    attributeOption:attributeOption,
                    attributeType:{
                        id:attributeType
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

export async function removeAttributeSelect(id) {
    const response = await fetch(BaseUrl + "attributeOption/deleteById"+id,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
export async function getAttributeTypeByWords(name) {
    const response = await fetch(BaseUrl + "attributeType/getAttributeTypeByWords",
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
    const response = await fetch(BaseUrl + "attributeOption/searchAttributeOption",
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
