export const groupingLists = (lists) => { 
    const groups = lists.reduce((groups, list) => {
    const date = list.date;
    if (!groups[date]) {
        groups[date] = [];
    }
    groups[date].push(list);
    return groups;
    }, {});
    const groupedLists = Object.keys(groups).map((date) => {
    return {
        date,
        lists: groups[date],
    };
    });
    return groupedLists;
}

export const summaryExpense = (groupedLists) => {
    const expenseSummaryLists=groupedLists.map((e) => { 
        const totalPricePerTransaction = e.lists.map((e) => {
            return e.totalPrice;
        });
        const totalExpensePerDay = totalPricePerTransaction.reduce((total,current) => {
            return total + current;
        }, 0)
        e.totalExpense = totalExpensePerDay;
        return e;
    })
    return expenseSummaryLists;
}




