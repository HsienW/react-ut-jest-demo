export const successData = {
    state: 'success',
    data: [
        {
            id: 1,
            name: 'Apple'
        },
        {
            id: 2,
            name: 'Banana'
        },
        {
            id: 3,
            name: 'Tomato'
        }
    ]
};

export const failData = {
    state: 'fail',
    data: []
};

export const ApiSimulation = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => {
                resolve(successData);
            }, 500);
        } else {
            reject(failData);
        }
    });
};