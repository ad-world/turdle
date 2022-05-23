function updateSessionRows(row) {
    console.log(row);
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();

    const item = JSON.parse(localStorage.getItem('turd-rows'));
    
    if(item) {
        if(item.day == day && item.month == month) {
            const newStorage = {
                day,
                month,
                rows: item ? [...item.rows, row] : [row],
                completed : item.completed ? item.completed + 1 : 1
            }
            localStorage.setItem('turd-rows', JSON.stringify(newStorage));
        } else {
            const newStorage = {
                day,
                month,
                rows: [row],
                completed: 1
            }
            localStorage.setItem('turd-rows', JSON.stringify(newStorage));
        }
    } else {
        const newStorage = {
            day,
            month,
            rows: [row],
            completed: 1
        }
        localStorage.setItem('turd-rows', JSON.stringify(newStorage));
    }
}

function getSessionRows() {
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();

    const item = JSON.parse(localStorage.getItem('turd-rows'));

    if(item && item.day == day && item.month == month) {
        return item;
    } else {
        return false;
    }
}

function setSessionPlayed() {
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();

    const playedObject = {
        day,
        month,
        played: true
    }

    localStorage.setItem('turdle-played', JSON.stringify(playedObject));

}

function checkSessionPlayed() {
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();

    const item = JSON.parse(localStorage.getItem('turdle-played'));
    if(!item) return false;

    if(item) {
        if(item.day == day && item.month == month) {
            return true;
        } else {
            return false;
        }
    }

    
}



export { useSession, setSession, updateSessionRows, getSessionRows, setSessionPlayed, checkSessionPlayed};

