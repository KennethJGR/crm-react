export const getClients = async () => {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const data = await response.json();
    return data;
};

export const getClient = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const data = await response.json();
    return data;
};

export const createClient = async (data) => {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        await response.json();
    } catch (error) {
        console.log(error);
    }
};

export const updateClient = async (id, data) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        await response.json();
    } catch (error) {
        console.log(error);
    }
};
