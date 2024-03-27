import {BaseUrl} from '../env';
export async function getAttributeName(page) {
    const response = await fetch(BaseUrl + "attributeType/findAll/"+page,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response.json();
}export async function getAttributeTypeByWords(name) {
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
export async function insertAttributeName(attributeType) {
    const response = await fetch(BaseUrl + "attributeType/add",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    attributeType:attributeType
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}export async function editAttributeName(attributeType ,id) {
    const response = await fetch(BaseUrl + "",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    attributeType:attributeType,
                    id:id
                }
            ),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}export async function removeAttributeName(id) {
    const response = await fetch(BaseUrl + "attributeType/deleteById/"+id,
        {
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    return response;
}
