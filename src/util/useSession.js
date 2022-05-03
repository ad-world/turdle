function useSession() {
    const item = JSON.parse(localStorage.getItem('session'));
    if(item) {
        const d = new Date();
        const day = d.getDate();
        const month = d.getMonth();
        // console.log(item);
        // console.log(day);
        // console.log(month);
        if((item.date.day == day) && (item.date.month == month)) {
            return item;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function setSession(rows, day, month) {
    const item = {
        rows: rows,
        date: {
            day: day,
            month: month
        }
    }

    localStorage.setItem('session', JSON.stringify(item));
}

export { useSession, setSession};
