import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const groupingListsByDate = (lists) => {
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
};

export const groupingListsByMonth = (lists) => { 
    const groups = lists.reduce((groups, list) => {
      const date = dayjs(list.date, "DD-MM-YYYY").format("MM-YYYY");
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
    groupedLists.sort((a, b) => {
      return dayjs(a.date, "MM-YYYY") - dayjs(b.date, "MM-YYYY");
    });
    return groupedLists;
}

export const summaryExpense = (groupedLists) => {
  const expenseSummaryLists = groupedLists.map((e) => {
    const totalPricePerTransaction = e.lists.map((e) => {
      return e.totalPrice;
    });
    const totalExpensePerDay = totalPricePerTransaction.reduce(
      (total, current) => {
        return total + current;
      },
      0
    );
      const newElement = {...e,totalExpense:totalExpensePerDay}
    return newElement;
  });
  return expenseSummaryLists;
};

export const sortingListsAscending = (groupedLists) => {
    groupedLists.sort((a,b) => { 
        return dayjs(a.date,"DD-MM-YYYY") - dayjs(b.date,"DD-MM-YYYY");
    })
    return groupedLists;
};

export const sortingListsDescending = (groupedLists) => {
  groupedLists.sort((a, b) => {
    return dayjs(b.date, "DD-MM-YYYY") - dayjs(a.date, "DD-MM-YYYY");
  });
  return groupedLists;
};
