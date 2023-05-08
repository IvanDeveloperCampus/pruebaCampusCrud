const url = "http://localhost:4000/evaluacion"

export const addEvaluacion= async (user) => {
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

export const getEvaluacion = async () => {
    try {
        const response = await fetch(`${url}`)
        const result = await response.json()
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const editarEvaluacion=async (id)=>{
    
}

export const eliminarEvaluacion = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
};