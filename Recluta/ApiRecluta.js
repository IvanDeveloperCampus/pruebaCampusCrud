const url = "http://localhost:4000/recluta"


export const addRecluta = async (user) => {
    try {
        await fetch(`${url}`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }

        )
    } catch (error) {
        console.log(error);
    }
}

export const getReclutByTeam=async(idTeam)=>{
    try {
        const response = await fetch(`${url}?teamId=${idTeam}`)
        const result = await response.json()
        return result;
    } catch (error) {
        console.log(error);
    }
}



export const getRecluta = async () => {
    try {
        const response = await fetch(`${url}`)
        const result = await response.json()
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const editarRecluta=async ()=>{
    
}

export const eliminarRecluta = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
};