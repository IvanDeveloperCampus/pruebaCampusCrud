const url = "http://localhost:4000/moduloskill"

export const addModulo = async (user) => {
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

export const getModulo = async () => {
    try {
        const response = await fetch(`${url}`)
        const result = await response.json()
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const getModuloBySkill = async (idSkill) => {
    try {
        const response = await fetch(`${url}?skillId=${idSkill}`)
        const result = await response.json()
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const editarModulo=async ()=>{
    
}

export const eliminarModulo = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
};