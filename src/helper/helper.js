export const fetchData = (key) => {
    return (localStorage.getItem(key))
}

export const setData = (key, value) => {
    return localStorage.setItem(key,value)
} 

export const delData = (key, id) => {
    if(id) {
        const data = fetchBudget(key)
        const newData = data.filter((item) => item.id !== id)
        return localStorage.setItem(key, JSON.stringify(newData))
    }
    return localStorage.removeItem(key)
}

export const createBudget = ({name, amount}) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount
    }
    const existing = JSON.parse(localStorage.getItem('budget')) ?? []

    return setData('budget', JSON.stringify([...existing, newItem]))
}

export const fetchBudget = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const createSpread = ({name, amount, purpose}) => {
    const newSpread = {
        name: name,
        purpose: purpose,
        createdAt: Date.now(),
        amount: +amount,
        id: crypto.randomUUID()
    }
    const existing = JSON.parse(localStorage.getItem('spread')) ?? []

    return setData('spread', JSON.stringify([...existing, newSpread]))
}


export const totalSpentBudget = (name) => {
    const expenses = fetchBudget('spread') ?? []

    const totalSpent = expenses.reduce((acc, expense) => {
       if(expense.name !== name) return acc;
       return acc += expense.amount
    }, 0)

    return totalSpent
}

export const dateFormat = (epoch) => 
    new Date(epoch).toLocaleDateString();
