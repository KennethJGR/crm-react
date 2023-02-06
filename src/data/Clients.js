export const getClients = async () => {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const data = await response.json();
    return data;
};

export const createClient = async (data) => {
    console.log(data);

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
